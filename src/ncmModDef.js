import user_update from 'NeteaseCloudMusicApi/module/user_update.js';
import user_subcount from 'NeteaseCloudMusicApi/module/user_subcount.js';
import user_replacephone from 'NeteaseCloudMusicApi/module/user_replacephone.js';
import user_record from 'NeteaseCloudMusicApi/module/user_record.js';
import user_playlist from 'NeteaseCloudMusicApi/module/user_playlist.js';
import user_level from 'NeteaseCloudMusicApi/module/user_level.js';
import user_follows from 'NeteaseCloudMusicApi/module/user_follows.js';
import user_followeds from 'NeteaseCloudMusicApi/module/user_followeds.js';
import user_event from 'NeteaseCloudMusicApi/module/user_event.js';
import user_dj from 'NeteaseCloudMusicApi/module/user_dj.js';
import user_detail from 'NeteaseCloudMusicApi/module/user_detail.js';
import user_cloud_detail from 'NeteaseCloudMusicApi/module/user_cloud_detail.js';
import user_cloud_del from 'NeteaseCloudMusicApi/module/user_cloud_del.js';
import user_cloud from 'NeteaseCloudMusicApi/module/user_cloud.js';
import user_bindingcellphone from 'NeteaseCloudMusicApi/module/user_bindingcellphone.js';
import user_binding from 'NeteaseCloudMusicApi/module/user_binding.js';
import user_audio from 'NeteaseCloudMusicApi/module/user_audio.js';
import user_account from 'NeteaseCloudMusicApi/module/user_account.js';
import toplist_detail from 'NeteaseCloudMusicApi/module/toplist_detail.js';
import toplist_artist from 'NeteaseCloudMusicApi/module/toplist_artist.js';
import toplist from 'NeteaseCloudMusicApi/module/toplist.js';
import topic_sublist from 'NeteaseCloudMusicApi/module/topic_sublist.js';
import topic_detail_event_hot from 'NeteaseCloudMusicApi/module/topic_detail_event_hot.js';
import topic_detail from 'NeteaseCloudMusicApi/module/topic_detail.js';
import top_song from 'NeteaseCloudMusicApi/module/top_song.js';
import top_playlist_highquality from 'NeteaseCloudMusicApi/module/top_playlist_highquality.js';
import top_playlist from 'NeteaseCloudMusicApi/module/top_playlist.js';
import top_mv from 'NeteaseCloudMusicApi/module/top_mv.js';
import top_list from 'NeteaseCloudMusicApi/module/top_list.js';
import top_artists from 'NeteaseCloudMusicApi/module/top_artists.js';
import top_album from 'NeteaseCloudMusicApi/module/top_album.js';
import song_url from 'NeteaseCloudMusicApi/module/song_url.js';
import song_download_url from 'NeteaseCloudMusicApi/module/song_download_url.js';
import song_detail from 'NeteaseCloudMusicApi/module/song_detail.js';
import simi_mv from 'NeteaseCloudMusicApi/module/simi_mv.js';
import simi_artist from 'NeteaseCloudMusicApi/module/simi_artist.js';
import search from 'NeteaseCloudMusicApi/module/search.js';
import scrobble from 'NeteaseCloudMusicApi/module/scrobble.js';
import recommend_songs from 'NeteaseCloudMusicApi/module/recommend_songs.js';
import recommend_resource from 'NeteaseCloudMusicApi/module/recommend_resource.js';

export default [
  {
    identifier: 'user_update',
    route: '/user/update',
    module: user_update.default,
  },
  {
    identifier: 'user_subcount',
    route: '/user/subcount',
    module: user_subcount.default,
  },
  {
    identifier: 'user_replacephone',
    route: '/user/replacephone',
    module: user_replacephone.default,
  },
  {
    identifier: 'user_record',
    route: '/user/record',
    module: user_record.default,
  },
  {
    identifier: 'user_playlist',
    route: '/user/playlist',
    module: user_playlist.default,
  },
  {
    identifier: 'user_level',
    route: '/user/level',
    module: user_level.default,
  },
  {
    identifier: 'user_follows',
    route: '/user/follows',
    module: user_follows.default,
  },
  {
    identifier: 'user_followeds',
    route: '/user/followeds',
    module: user_followeds.default,
  },
  {
    identifier: 'user_event',
    route: '/user/event',
    module: user_event.default,
  },
  {
    identifier: 'user_dj',
    route: '/user/dj',
    module: user_dj.default,
  },
  {
    identifier: 'user_detail',
    route: '/user/detail',
    module: user_detail.default,
  },
  {
    identifier: 'user_cloud_detail',
    route: '/user/cloud/detail',
    module: user_cloud_detail.default,
  },
  {
    identifier: 'user_cloud_del',
    route: '/user/cloud/del',
    module: user_cloud_del.default,
  },
  {
    identifier: 'user_cloud',
    route: '/user/cloud',
    module: user_cloud.default,
  },
  {
    identifier: 'user_bindingcellphone',
    route: '/user/bindingcellphone',
    module: user_bindingcellphone.default,
  },
  {
    identifier: 'user_binding',
    route: '/user/binding',
    module: user_binding.default,
  },
  {
    identifier: 'user_audio',
    route: '/user/audio',
    module: user_audio.default,
  },
  {
    identifier: 'user_account',
    route: '/user/account',
    module: user_account.default,
  },
  {
    identifier: 'toplist_detail',
    route: '/toplist/detail',
    module: toplist_detail.default,
  },
  {
    identifier: 'toplist_artist',
    route: '/toplist/artist',
    module: toplist_artist.default,
  },
  {
    identifier: 'toplist',
    route: '/toplist',
    module: toplist.default,
  },
  {
    identifier: 'topic_sublist',
    route: '/topic/sublist',
    module: topic_sublist.default,
  },
  {
    identifier: 'topic_detail_event_hot',
    route: '/topic/detail/event/hot',
    module: topic_detail_event_hot.default,
  },
  {
    identifier: 'topic_detail',
    route: '/topic/detail',
    module: topic_detail.default,
  },
  {
    identifier: 'top_song',
    route: '/top/song',
    module: top_song.default,
  },
  {
    identifier: 'top_playlist_highquality',
    route: '/top/playlist/highquality',
    module: top_playlist_highquality.default,
  },
  {
    identifier: 'top_playlist',
    route: '/top/playlist',
    module: () =>
      import('NeteaseCloudMusicApi/module/top_playlist.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'top_mv',
    route: '/top/mv',
    module: () =>
      import('NeteaseCloudMusicApi/module/top_mv.js').then(m => m.default),
  },
  {
    identifier: 'top_list',
    route: '/top/list',
    module: () =>
      import('NeteaseCloudMusicApi/module/top_list.js').then(m => m.default),
  },
  {
    identifier: 'top_artists',
    route: '/top/artists',
    module: () =>
      import('NeteaseCloudMusicApi/module/top_artists.js').then(m => m.default),
  },
  {
    identifier: 'top_album',
    route: '/top/album',
    module: () =>
      import('NeteaseCloudMusicApi/module/top_album.js').then(m => m.default),
  },
  {
    identifier: 'song_url',
    route: '/song/url',
    module: () =>
      import('NeteaseCloudMusicApi/module/song_url.js').then(m => m.default),
  },
  {
    identifier: 'song_download_url',
    route: '/song/download/url',
    module: () =>
      import('NeteaseCloudMusicApi/module/song_download_url.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'song_detail',
    route: '/song/detail',
    module: () =>
      import('NeteaseCloudMusicApi/module/song_detail.js').then(m => m.default),
  },
  {
    identifier: 'simi_mv',
    route: '/simi/mv',
    module: () =>
      import('NeteaseCloudMusicApi/module/simi_mv.js').then(m => m.default),
  },
  {
    identifier: 'simi_artist',
    route: '/simi/artist',
    module: () =>
      import('NeteaseCloudMusicApi/module/simi_artist.js').then(m => m.default),
  },
  {
    identifier: 'search',
    route: '/search',
    module: () =>
      import('NeteaseCloudMusicApi/module/search.js').then(m => m.default),
  },
  {
    identifier: 'scrobble',
    route: '/scrobble',
    module: () =>
      import('NeteaseCloudMusicApi/module/scrobble.js').then(m => m.default),
  },
  {
    identifier: 'recommend_songs',
    route: '/recommend/songs',
    module: () =>
      import('NeteaseCloudMusicApi/module/recommend_songs.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'recommend_resource',
    route: '/recommend/resource',
    module: () =>
      import('NeteaseCloudMusicApi/module/recommend_resource.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'playmode_intelligence_list',
    route: '/playmode/intelligence/list',
    module: () =>
      import('NeteaseCloudMusicApi/module/playmode_intelligence_list.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'playlist_video_recent',
    route: '/playlist/video/recent',
    module: () =>
      import('NeteaseCloudMusicApi/module/playlist_video_recent.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'playlist_update',
    route: '/playlist/update',
    module: () =>
      import('NeteaseCloudMusicApi/module/playlist_update.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'playlist_tracks',
    route: '/playlist/tracks',
    module: () =>
      import('NeteaseCloudMusicApi/module/playlist_tracks.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'playlist_track_delete',
    route: '/playlist/track/delete',
    module: () =>
      import('NeteaseCloudMusicApi/module/playlist_track_delete.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'playlist_track_all',
    route: '/playlist/track/all',
    module: () =>
      import('NeteaseCloudMusicApi/module/playlist_track_all.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'playlist_track_add',
    route: '/playlist/track/add',
    module: () =>
      import('NeteaseCloudMusicApi/module/playlist_track_add.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'playlist_tags_update',
    route: '/playlist/tags/update',
    module: () =>
      import('NeteaseCloudMusicApi/module/playlist_tags_update.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'playlist_subscribers',
    route: '/playlist/subscribers',
    module: () =>
      import('NeteaseCloudMusicApi/module/playlist_subscribers.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'playlist_subscribe',
    route: '/playlist/subscribe',
    module: () =>
      import('NeteaseCloudMusicApi/module/playlist_subscribe.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'playlist_privacy',
    route: '/playlist/privacy',
    module: () =>
      import('NeteaseCloudMusicApi/module/playlist_privacy.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'playlist_order_update',
    route: '/playlist/order/update',
    module: () =>
      import('NeteaseCloudMusicApi/module/playlist_order_update.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'playlist_name_update',
    route: '/playlist/name/update',
    module: () =>
      import('NeteaseCloudMusicApi/module/playlist_name_update.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'playlist_mylike',
    route: '/playlist/mylike',
    module: () =>
      import('NeteaseCloudMusicApi/module/playlist_mylike.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'playlist_hot',
    route: '/playlist/hot',
    module: () =>
      import('NeteaseCloudMusicApi/module/playlist_hot.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'playlist_highquality_tags',
    route: '/playlist/highquality/tags',
    module: () =>
      import('NeteaseCloudMusicApi/module/playlist_highquality_tags.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'playlist_detail_dynamic',
    route: '/playlist/detail/dynamic',
    module: () =>
      import('NeteaseCloudMusicApi/module/playlist_detail_dynamic.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'playlist_detail',
    route: '/playlist/detail',
    module: () =>
      import('NeteaseCloudMusicApi/module/playlist_detail.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'playlist_desc_update',
    route: '/playlist/desc/update',
    module: () =>
      import('NeteaseCloudMusicApi/module/playlist_desc_update.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'playlist_delete',
    route: '/playlist/delete',
    module: () =>
      import('NeteaseCloudMusicApi/module/playlist_delete.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'playlist_create',
    route: '/playlist/create',
    module: () =>
      import('NeteaseCloudMusicApi/module/playlist_create.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'playlist_cover_update',
    route: '/playlist/cover/update',
    module: () =>
      import('NeteaseCloudMusicApi/module/playlist_cover_update.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'playlist_catlist',
    route: '/playlist/catlist',
    module: () =>
      import('NeteaseCloudMusicApi/module/playlist_catlist.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'personalized',
    route: '/personalized',
    module: () =>
      import('NeteaseCloudMusicApi/module/personalized.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'personal_fm',
    route: '/personal_fm',
    module: () =>
      import('NeteaseCloudMusicApi/module/personal_fm.js').then(m => m.default),
  },
  {
    identifier: 'mv_url',
    route: '/mv/url',
    module: () =>
      import('NeteaseCloudMusicApi/module/mv_url.js').then(m => m.default),
  },
  {
    identifier: 'mv_sublist',
    route: '/mv/sublist',
    module: () =>
      import('NeteaseCloudMusicApi/module/mv_sublist.js').then(m => m.default),
  },
  {
    identifier: 'mv_sub',
    route: '/mv/sub',
    module: () =>
      import('NeteaseCloudMusicApi/module/mv_sub.js').then(m => m.default),
  },
  {
    identifier: 'mv_first',
    route: '/mv/first',
    module: () =>
      import('NeteaseCloudMusicApi/module/mv_first.js').then(m => m.default),
  },
  {
    identifier: 'mv_exclusive_rcmd',
    route: '/mv/exclusive/rcmd',
    module: () =>
      import('NeteaseCloudMusicApi/module/mv_exclusive_rcmd.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'mv_detail_info',
    route: '/mv/detail/info',
    module: () =>
      import('NeteaseCloudMusicApi/module/mv_detail_info.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'mv_detail',
    route: '/mv/detail',
    module: () =>
      import('NeteaseCloudMusicApi/module/mv_detail.js').then(m => m.default),
  },
  {
    identifier: 'mv_all',
    route: '/mv/all',
    module: () =>
      import('NeteaseCloudMusicApi/module/mv_all.js').then(m => m.default),
  },
  {
    identifier: 'lyric',
    route: '/lyric',
    module: () =>
      import('NeteaseCloudMusicApi/module/lyric.js').then(m => m.default),
  },
  {
    identifier: 'logout',
    route: '/logout',
    module: () =>
      import('NeteaseCloudMusicApi/module/logout.js').then(m => m.default),
  },
  {
    identifier: 'login_status',
    route: '/login/status',
    module: () =>
      import('NeteaseCloudMusicApi/module/login_status.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'login_refresh',
    route: '/login/refresh',
    module: () =>
      import('NeteaseCloudMusicApi/module/login_refresh.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'login_qr_key',
    route: '/login/qr/key',
    module: () =>
      import('NeteaseCloudMusicApi/module/login_qr_key.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'login_qr_create',
    route: '/login/qr/create',
    module: () =>
      import('NeteaseCloudMusicApi/module/login_qr_create.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'login_qr_check',
    route: '/login/qr/check',
    module: () =>
      import('NeteaseCloudMusicApi/module/login_qr_check.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'login_cellphone',
    route: '/login/cellphone',
    module: () =>
      import('NeteaseCloudMusicApi/module/login_cellphone.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'login',
    route: '/login',
    module: () =>
      import('NeteaseCloudMusicApi/module/login.js').then(m => m.default),
  },
  {
    identifier: 'likelist',
    route: '/likelist',
    module: () =>
      import('NeteaseCloudMusicApi/module/likelist.js').then(m => m.default),
  },
  {
    identifier: 'like',
    route: '/like',
    module: () =>
      import('NeteaseCloudMusicApi/module/like.js').then(m => m.default),
  },
  {
    identifier: 'follow',
    route: '/follow',
    module: () =>
      import('NeteaseCloudMusicApi/module/follow.js').then(m => m.default),
  },
  {
    identifier: 'fm_trash',
    route: '/fm_trash',
    module: () =>
      import('NeteaseCloudMusicApi/module/fm_trash.js').then(m => m.default),
  },
  {
    identifier: 'daily_signin',
    route: '/daily_signin',
    module: () =>
      import('NeteaseCloudMusicApi/module/daily_signin.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'cloudsearch',
    route: '/cloudsearch',
    module: () =>
      import('NeteaseCloudMusicApi/module/cloudsearch.js').then(m => m.default),
  },
  {
    identifier: 'cloud',
    route: '/cloud',
    module: () =>
      import('NeteaseCloudMusicApi/module/cloud.js').then(m => m.default),
  },
  {
    identifier: 'check_music',
    route: '/check/music',
    module: () =>
      import('NeteaseCloudMusicApi/module/check_music.js').then(m => m.default),
  },
  {
    identifier: 'cellphone_existence_check',
    route: '/cellphone/existence/check',
    module: () =>
      import('NeteaseCloudMusicApi/module/cellphone_existence_check.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'captcha_verify',
    route: '/captcha/verify',
    module: () =>
      import('NeteaseCloudMusicApi/module/captcha_verify.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'captcha_sent',
    route: '/captcha/sent',
    module: () =>
      import('NeteaseCloudMusicApi/module/captcha_sent.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'calendar',
    route: '/calendar',
    module: () =>
      import('NeteaseCloudMusicApi/module/calendar.js').then(m => m.default),
  },
  {
    identifier: 'batch',
    route: '/batch',
    module: () =>
      import('NeteaseCloudMusicApi/module/batch.js').then(m => m.default),
  },
  {
    identifier: 'banner',
    route: '/banner',
    module: () =>
      import('NeteaseCloudMusicApi/module/banner.js').then(m => m.default),
  },
  {
    identifier: 'avatar_upload',
    route: '/avatar/upload',
    module: () =>
      import('NeteaseCloudMusicApi/module/avatar_upload.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'audio_match',
    route: '/audio/match',
    module: () =>
      import('NeteaseCloudMusicApi/module/audio_match.js').then(m => m.default),
  },
  {
    identifier: 'artists',
    route: '/artists',
    module: () =>
      import('NeteaseCloudMusicApi/module/artists.js').then(m => m.default),
  },
  {
    identifier: 'artist_video',
    route: '/artist/video',
    module: () =>
      import('NeteaseCloudMusicApi/module/artist_video.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'artist_top_song',
    route: '/artist/top/song',
    module: () =>
      import('NeteaseCloudMusicApi/module/artist_top_song.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'artist_sublist',
    route: '/artist/sublist',
    module: () =>
      import('NeteaseCloudMusicApi/module/artist_sublist.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'artist_sub',
    route: '/artist/sub',
    module: () =>
      import('NeteaseCloudMusicApi/module/artist_sub.js').then(m => m.default),
  },
  {
    identifier: 'artist_songs',
    route: '/artist/songs',
    module: () =>
      import('NeteaseCloudMusicApi/module/artist_songs.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'artist_new_song',
    route: '/artist/new/song',
    module: () =>
      import('NeteaseCloudMusicApi/module/artist_new_song.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'artist_new_mv',
    route: '/artist/new/mv',
    module: () =>
      import('NeteaseCloudMusicApi/module/artist_new_mv.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'artist_mv',
    route: '/artist/mv',
    module: () =>
      import('NeteaseCloudMusicApi/module/artist_mv.js').then(m => m.default),
  },
  {
    identifier: 'artist_list',
    route: '/artist/list',
    module: () =>
      import('NeteaseCloudMusicApi/module/artist_list.js').then(m => m.default),
  },
  {
    identifier: 'artist_fans',
    route: '/artist/fans',
    module: () =>
      import('NeteaseCloudMusicApi/module/artist_fans.js').then(m => m.default),
  },
  {
    identifier: 'artist_detail',
    route: '/artist/detail',
    module: () =>
      import('NeteaseCloudMusicApi/module/artist_detail.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'artist_desc',
    route: '/artist/desc',
    module: () =>
      import('NeteaseCloudMusicApi/module/artist_desc.js').then(m => m.default),
  },
  {
    identifier: 'artist_album',
    route: '/artist/album',
    module: () =>
      import('NeteaseCloudMusicApi/module/artist_album.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'album_sublist',
    route: '/album/sublist',
    module: () =>
      import('NeteaseCloudMusicApi/module/album_sublist.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'album_sub',
    route: '/album/sub',
    module: () =>
      import('NeteaseCloudMusicApi/module/album_sub.js').then(m => m.default),
  },
  {
    identifier: 'album_songsaleboard',
    route: '/album/songsaleboard',
    module: () =>
      import('NeteaseCloudMusicApi/module/album_songsaleboard.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'album_newest',
    route: '/album/newest',
    module: () =>
      import('NeteaseCloudMusicApi/module/album_newest.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'album_new',
    route: '/album/new',
    module: () =>
      import('NeteaseCloudMusicApi/module/album_new.js').then(m => m.default),
  },
  {
    identifier: 'album_list_style',
    route: '/album/list/style',
    module: () =>
      import('NeteaseCloudMusicApi/module/album_list_style.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'album_list',
    route: '/album/list',
    module: () =>
      import('NeteaseCloudMusicApi/module/album_list.js').then(m => m.default),
  },
  {
    identifier: 'album_detail_dynamic',
    route: '/album/detail/dynamic',
    module: () =>
      import('NeteaseCloudMusicApi/module/album_detail_dynamic.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'album_detail',
    route: '/album/detail',
    module: () =>
      import('NeteaseCloudMusicApi/module/album_detail.js').then(
        m => m.default
      ),
  },
  {
    identifier: 'album',
    route: '/album',
    module: () =>
      import('NeteaseCloudMusicApi/module/album.js').then(m => m.default),
  },
  {
    identifier: 'activate_init_profile',
    route: '/activate/init/profile',
    module: () =>
      import('NeteaseCloudMusicApi/module/activate_init_profile.js').then(
        m => m.default
      ),
  },
];
