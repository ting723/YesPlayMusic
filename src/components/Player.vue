<template>
  <div class="player" @click="toggleLyrics">
    <div
      class="progress-bar"
      :class="{
        nyancat: settings.nyancatStyle,
        'nyancat-stop': settings.nyancatStyle && !player.playing,
      }"
      @click.stop
    >
      <vue-slider
        v-model="player.progress"
        :min="0"
        :max="player.currentTrackDuration"
        :interval="1"
        :drag-on-click="true"
        :duration="0"
        :dot-size="12"
        :height="2"
        :tooltip-formatter="formatTrackTime"
        :lazy="true"
        :silent="true"
      ></vue-slider>
    </div>
    <div class="controls">
      <div class="playing">
        <div class="container" @click.stop>
          <img
            :src="currentTrack.al ? resizeImage(currentTrack.al.picUrl, 224) : ''"
            loading="lazy"
            @click="goToAlbum"
          />
          <div class="track-info" :title="audioSource">
            <div
              :class="['name', { 'has-list': hasList() }]"
              @click="hasList() && goToList()"
            >
              {{ currentTrack.name }}
            </div>
            <div class="artist">
              <span
                v-for="(ar, index) in currentTrack.ar"
                :key="ar.id"
                @click="ar.id && goToArtist(ar.id)"
              >
                <span :class="{ ar: ar.id }"> {{ ar.name }} </span
                ><span v-if="index !== currentTrack.ar.length - 1">, </span>
              </span>
            </div>
          </div>
          <div class="like-button">
            <button-icon
              :title="
                player.isCurrentTrackLiked ? $t('player.unlike') : $t('player.like')
              "
              @click="likeATrack(player.currentTrack.id)"
            >
              <svg-icon
                v-show="!player.isCurrentTrackLiked"
                icon-class="heart"
              ></svg-icon>
              <svg-icon
                v-show="player.isCurrentTrackLiked"
                icon-class="heart-solid"
              ></svg-icon>
            </button-icon>
          </div>
        </div>
        <div class="blank"></div>
      </div>
      <div class="middle-control-buttons">
        <div class="blank"></div>
        <div class="container" @click.stop>
          <button-icon
            v-show="!player.isPersonalFM"
            :title="$t('player.previous')"
            @click="playPrevTrack"
            ><svg-icon icon-class="previous"
          /></button-icon>
          <button-icon v-show="player.isPersonalFM" title="不喜欢" @click="moveToFMTrash"
            ><svg-icon icon-class="thumbs-down"
          /></button-icon>
          <button-icon
            class="play"
            :title="$t(player.playing ? 'player.pause' : 'player.play')"
            @click="playOrPause"
          >
            <svg-icon :icon-class="player.playing ? 'pause' : 'play'"
          /></button-icon>
          <button-icon :title="$t('player.next')" @click="playNextTrack"
            ><svg-icon icon-class="next"
          /></button-icon>
        </div>
        <div class="blank"></div>
      </div>
      <div class="right-control-buttons">
        <div class="blank"></div>
        <div class="container" @click.stop>
          <button-icon
            :title="$t('player.nextUp')"
            :class="{
              active: route.name === 'next',
              disabled: player.isPersonalFM,
            }"
            @click="goToNextTracksPage"
            ><svg-icon icon-class="list"
          /></button-icon>
          <button-icon
            :class="{
              active: player.repeatMode !== 'off',
              disabled: player.isPersonalFM,
            }"
            :title="
              player.repeatMode === 'one' ? $t('player.repeatTrack') : $t('player.repeat')
            "
            @click="switchRepeatMode"
          >
            <svg-icon v-show="player.repeatMode !== 'one'" icon-class="repeat" />
            <svg-icon v-show="player.repeatMode === 'one'" icon-class="repeat-1" />
          </button-icon>
          <button-icon
            :class="{ active: player.shuffle, disabled: player.isPersonalFM }"
            :title="$t('player.shuffle')"
            @click="switchShuffle"
            ><svg-icon icon-class="shuffle"
          /></button-icon>
          <button-icon
            v-if="settings.enableReversedMode"
            :class="{ active: player.reversed, disabled: player.isPersonalFM }"
            :title="$t('player.reversed')"
            @click="switchReversed"
            ><svg-icon icon-class="sort-up"
          /></button-icon>
          <div class="volume-control">
            <button-icon :title="$t('player.mute')" @click="mute">
              <svg-icon v-show="volume > 0.5" icon-class="volume" />
              <svg-icon v-show="volume === 0" icon-class="volume-mute" />
              <svg-icon v-show="volume <= 0.5 && volume !== 0" icon-class="volume-half" />
            </button-icon>
            <div class="volume-bar">
              <vue-slider
                v-model="volume"
                :min="0"
                :max="1"
                :interval="0.01"
                :drag-on-click="true"
                :duration="0"
                tooltip="none"
                :dot-size="12"
              ></vue-slider>
            </div>
          </div>
          <button-icon
            class="lyrics-button"
            title="歌词"
            @click="toggleLyrics"
            ><svg-icon icon-class="arrow-up"
          /></button-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import "@/assets/css/slider.css";

import ButtonIcon from "@/components/ButtonIcon.vue";
import VueSlider from "vue-slider-component";
import { formatTrackTime } from "@/utils/common";
import { goToListSource, hasListSource } from "@/utils/playList";

const store = useStore();
const route = useRoute();
const router = useRouter();

const player = computed(() => store.state.player);
const settings = computed(() => store.state.settings);
const data = computed(() => store.state.data);

const currentTrack = computed(() => player.value.currentTrack);

const volume = computed({
  get() {
    return player.value.volume;
  },
  set(value) {
    player.value.volume = value; // Directly set volume on player instance
  },
});

const playing = computed(() => player.value.playing);

const audioSource = computed(() =>
  player.value._howler?._src.includes("kuwo.cn") ? "音源来自酷我音乐" : ""
);

const toggleLyrics = () => store.commit("toggleLyrics");
const showToast = (msg) => store.dispatch("showToast", msg);
const likeATrack = (id) => store.dispatch("likeATrack", id);

const playPrevTrack = () => player.value.playPrevTrack();
const playOrPause = () => player.value.playOrPause();
const playNextTrack = () => {
  if (player.value.isPersonalFM) {
    player.value.playNextFMTrack();
  } else {
    player.value.playNextTrack();
  }
};

const goToNextTracksPage = () => {
  if (player.value.isPersonalFM) return;
  route.name === "next" ? router.go(-1) : router.push({ name: "next" });
};

const goToAlbum = () => {
  if (player.value.currentTrack.al.id === 0) return;
  router.push({ path: "/album/" + player.value.currentTrack.al.id });
};

const goToArtist = (id) => {
  router.push({ path: "/artist/" + id });
};

const moveToFMTrash = () => {
  player.value.moveToFMTrash();
};

const resizeImage = (url, size = 512) => {
  if (!url) return "";
  return `${url}?param=${size}y${size}`;
};

const switchRepeatMode = () => {
  player.value.switchRepeatMode();
};

const switchShuffle = () => {
  player.value.switchShuffle();
};

const switchReversed = () => {
  player.value.switchReversed();
};

const mute = () => {
  player.value.mute();
};

// No need to convert formatTrackTime, hasList, goToList as they are imported functions

const hasList = hasListSource;
const goToList = goToListSource;
</script>

<style lang="scss" scoped>
.player {
  // 播放器固定在底部
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  // 使用flex布局，纵向排列
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 64px;
  // 毛玻璃效果
  backdrop-filter: saturate(180%) blur(30px);
  background-color: var(--color-navbar-bg);
  z-index: 100;
}

// Firefox浏览器特殊处理，因为不支持backdrop-filter
@supports (-moz-appearance: none) {
  .player {
    background-color: var(--color-body-bg);
  }
}

.progress-bar {
  // 进度条上下边距调整
  margin-top: -6px;
  margin-bottom: -6px;
  width: 100%;
}

.controls {
  // 使用网格布局，分为3列
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100%;
  // 左右padding自适应视窗宽度
  padding: {
    right: 10vw;
    left: 10vw;
  }
}

// 窄屏幕时减小padding
@media (max-width: 1336px) {
  .controls {
    padding: 0 5vw;
  }
}

.blank {
  // 空白区域自动填充
  flex-grow: 1;
}

.playing {
  // 正在播放区域使用flex布局
  display: flex;

  .container {
    display: flex;
    align-items: center;

    img {
      // 封面图样式
      height: 46px;
      border-radius: 5px;
      box-shadow: 0 6px 8px -2px rgba(0, 0, 0, 0.16);
      cursor: pointer;
      user-select: none;
    }

    .track-info {
      // 歌曲信息区域
      height: 46px;
      margin-left: 12px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .name {
        // 歌曲名称样式
        font-weight: 600;
        font-size: 16px;
        opacity: 0.88;
        color: var(--color-text);
        margin-bottom: 4px;
        // 单行文本溢出省略
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        word-break: break-all;
      }

      .has-list {
        // 播放列表链接样式
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }

      .artist {
        // 艺术家名称样式
        font-size: 12px;
        opacity: 0.58;
        color: var(--color-text);
        // 单行文本溢出省略
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        word-break: break-all;

        span.ar {
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}

.middle-control-buttons {
  // 中间控制按钮区域
  display: flex;

  .container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 8px;

    .button-icon {
      margin: 0 8px;
      height: 42px;
      width: 42px;
      color: var(--color-text);
    }

    .play {
      // 播放按钮样式
      height: 42px;
      width: 42px;
      .svg-icon {
        width: 24px;
        height: 24px;
      }
    }
  }
}

.right-control-buttons {
  // 右侧控制按钮区域
  display: flex;

  .container {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .button-icon {
      height: 42px;
      width: 42px;
      color: var(--color-text);
    }

    .expand {
      margin-left: 24px;
      .svg-icon {
        height: 12px;
        width: 12px;
      }
    }

    .active .svg-icon {
      // 激活状态的图标颜色
      color: var(--color-primary);
    }

    .volume-control {
      // 音量控制区域
      margin-left: 4px;
      display: flex;
      align-items: center;
      .volume-bar {
        width: 100px;
      }
    }

    .svg-icon {
      width: 24px;
      height: 24px;
      color: var(--color-text);
    }
    .lyrics-button {
      width: 42px;
      height: 42px;
    }
  }
}

.like-button {
  margin-left: 16px;
  .svg-icon{
      height: 24px;
      width: 24px;
      color: var(--color-text);
  }
}

.button-icon.disabled {
  // 禁用状态的按钮样式
  cursor: default;
  opacity: 0.38;
  &:hover {
    background: none;
  }
  &:active {
    transform: unset;
  }
}
</style>
