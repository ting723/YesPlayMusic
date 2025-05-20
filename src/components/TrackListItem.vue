<template>
  <div
    class="track"
    :class="trackClass"
    :style="trackStyle"
    :title="showUnavailableSongInGreyStyle ? track.reason : ''"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <img
      v-if="!isAlbum"
      :src="imgUrl"
      loading="lazy"
      :class="{ hover: focus }"
      @click="goToAlbum"
    />
    <div v-if="showOrderNumber" class="no">
      <button v-show="focus && playable && !isPlaying" @click="playTrack">
        <svg-icon
          icon-class="play"
          style="height: 14px; width: 14px"
        ></svg-icon>
      </button>
      <span v-show="(!focus || !playable) && !isPlaying">{{ trackNo }}</span>
      <button v-show="isPlaying">
        <svg-icon
          icon-class="volume"
          style="height: 16px; width: 16px"
        ></svg-icon>
      </button>
    </div>
    <div class="title-and-artist">
      <div class="container">
        <div class="title">
          {{ track.name }}
          <span v-if="isSubTitle" :title="subTitle" class="sub-title">
            ({{ subTitle }})
          </span>
          <span v-if="isAlbum" class="featured">
            <ArtistsInLine
              :artists="track.ar"
              :exclude="$parent.albumObject.artist.name"
              prefix="-"
          /></span>
          <span
            v-if="isAlbum && (track.mark & 1048576) === 1048576"
            class="explicit-symbol"
            ><ExplicitSymbol
          /></span>
        </div>
        <div v-if="!isAlbum" class="artist">
          <span
            v-if="(track.mark & 1048576) === 1048576"
            class="explicit-symbol before-artist"
            ><ExplicitSymbol :size="15"
          /></span>
          <ArtistsInLine :artists="artists" />
        </div>
      </div>
      <div></div>
    </div>

    <div v-if="showAlbumName" class="album">
      <router-link v-if="album && album.id" :to="`/album/${album.id}`">{{
        album.name
      }}</router-link>
      <div></div>
    </div>

    <div v-if="showLikeButton" class="actions">
      <button @click="likeThisSong">
        <svg-icon
          icon-class="heart"
          :style="{
            visibility: focus && !isLiked ? 'visible' : 'hidden',
          }"
        ></svg-icon>
        <svg-icon v-show="isLiked" icon-class="heart-solid"></svg-icon>
      </button>
    </div>
    <div v-if="showTrackTime" class="time">
      {{ formattedTrackTime }}
    </div>

    <div v-if="track.playCount" class="count"> {{ track.playCount }}</div>
  </div>
</template>

<script>
import ArtistsInLine from '@/components/ArtistsInLine.vue';
import ExplicitSymbol from '@/components/ExplicitSymbol.vue';
import { mapState } from 'vuex';
import { isNil } from 'lodash';
import { isElectronDev } from '@/utils/env';
import { formatTrackTime } from '@/utils/common';

export default {
  name: 'TrackListItem',
  components: { ArtistsInLine, ExplicitSymbol },

  props: {
    trackProp: Object,
    trackNo: Number,
    highlightPlayingTrack: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return { hover: false, trackStyle: {} };
  },

  computed: {
    ...mapState(['settings']),
    track() {
      return this.type === 'cloudDisk'
        ? this.trackProp.simpleSong
        : this.trackProp;
    },
    playable() {
      return this.track?.privilege?.pl > 0 || this.track?.playable;
    },
    imgUrl() {
      let image =
        this.track?.al?.picUrl ??
        this.track?.album?.picUrl ??
        '/proxy/https://p2.music.126.net/UeTuwE7pvjBpypWLudqukA==/3132508627578625.jpg';
      return image + '?param=224y224';
    },
    artists() {
      const { ar, artists } = this.track;
      if (!isNil(ar)) return ar;
      if (!isNil(artists)) return artists;
      return [];
    },
    album() {
      return this.track.album || this.track.al || this.track?.simpleSong?.al;
    },
    subTitle() {
      let tn = undefined;
      if (
        this.track?.tns?.length > 0 &&
        this.track.name !== this.track.tns[0]
      ) {
        tn = this.track.tns[0];
      }

      //优先显示alia
      if (this.$store.state.settings.subTitleDefault) {
        return this.track?.alia?.length > 0 ? this.track.alia[0] : tn;
      } else {
        return tn === undefined ? this.track.alia[0] : tn;
      }
    },
    type() {
      return this.$parent.type;
    },
    isAlbum() {
      return this.type === 'album';
    },
    isSubTitle() {
      return (
        (this.track?.tns?.length > 0 &&
          this.track.name !== this.track.tns[0]) ||
        this.track.alia?.length > 0
      );
    },
    isPlaylist() {
      return this.type === 'playlist';
    },
    isLiked() {
      return this.$parent.liked.songs.includes(this.track?.id);
    },
    isPlaying() {
      return this.$store.state.player.currentTrack.id === this.track?.id;
    },
    trackClass() {
      let trackClass = [this.type];
      if (!this.playable && this.showUnavailableSongInGreyStyle)
        trackClass.push('disable');
      if (this.isPlaying && this.highlightPlayingTrack)
        trackClass.push('playing');
      if (this.focus) trackClass.push('focus');
      return trackClass;
    },
    isMenuOpened() {
      return this.$parent.rightClickedTrack.id === this.track.id ? true : false;
    },
    focus() {
      return (
        (this.hover && this.$parent.rightClickedTrack.id === 0) ||
        this.isMenuOpened
      );
    },
    showUnavailableSongInGreyStyle() {
      return isElectronDev()
        ? !this.$store.state.settings.enableUnblockNeteaseMusic
        : true;
    },
    showLikeButton() {
      return (
        this.type !== 'cloudDisk' &&
        this.type !== 'tracklist' &&
        this.type !== 'album'
      );
    },
    showAlbumName() {
      return this.type !== 'album';
    },
    showOrderNumber() {
      return this.type !== 'album';
    },
    showTrackTime() {
      return this.type !== 'album';
    },
    formattedTrackTime() {
      return formatTrackTime(this.track?.dt);
    }
  },

  methods: {
    playTrack() {
      this.$store.state.player.playTrack(this.track.id);
    },
    goToAlbum() {
      this.$router.push({
        path: '/album/' + this.album.id,
      });
    },
    likeThisSong() {
      this.$parent.like(this.track.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.track {
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 12px;
  width: 100%;
  height: 46px;
  margin-bottom: 2px;
  cursor: default;

  img {
    height: 30px;
    width: 30px;
    border-radius: 8px;
    margin-right: 14px;
    cursor: pointer;
    transition: filter 0.3s;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
    &.hover {
      filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1));
    }
  }

  .no {
    font-size: 1rem;
    width: 20px;
    margin-right: 14px;
    flex-shrink: 0;
    color: var(--color-text);
    text-align: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
    button {
      color: var(--color-primary);
      opacity: 0.8;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .title-and-artist {
    flex: 1;
    display: flex;
    flex-direction: column;
    .container {
      display: flex;
      align-items: center;
    }
    .title {
      font-size: 1rem;
      font-weight: 600;
      color: var(--color-text);
      cursor: default;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      word-wrap: break-word;
      .sub-title {
        font-size: 0.8rem;
        font-weight: 500;
        color: var(--color-text);
        opacity: 0.7;
        margin-left: 4px;
      }
      .featured {
        font-weight: 500;
        opacity: 0.7;
      }
    }
    .artist {
      margin-top: 2px;
      font-size: 0.9rem;
      opacity: 0.8;
      color: var(--color-text);
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      word-wrap: break-word;
    }
  }

  .album {
    flex: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    word-wrap: break-word;
    margin-right: 10px;
    font-size: 0.9rem;
    opacity: 0.8;
    color: var(--color-text);
    cursor: default;
  }

  .time,
  .count {
    font-size: 0.9rem;
    opacity: 0.8;
    color: var(--color-text);
    min-width: 28px;
    margin-left: 10px;
    text-align: right;
    font-variant-numeric: tabular-nums;
  }

  .actions {
    width: 40px;
    display: flex;
    justify-content: flex-end;
    button {
      opacity: 0.2;
      color: var(--color-primary);
      &:hover {
        opacity: 0.7;
      }
    }
  }

  &:hover {
    background-color: var(--color-secondary-bg-for-transparent);
  }

  &.playing {
    background-color: var(--color-primary-bg-for-transparent);
    color: var(--color-primary);
    .title,
    .artist,
    .album,
    .time,
    .count {
      color: var(--color-primary);
    }
    .artist,
    .album,
    .time,
    .count {
      opacity: 0.8;
    }
    .actions button {
      color: var(--color-primary);
      opacity: 0.7;
      &:hover {
        opacity: 1;
      }
    }
  }

  &.disable {
    .title,
    .artist,
    .album,
    .time,
    .count {
      color: var(--color-text);
      opacity: 0.2;
    }
  }
}

.track.album {
  img {
    display: none;
  }
}
</style>
