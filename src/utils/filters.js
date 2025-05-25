import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import locale from '@/locale';

// 初始化 dayjs 插件
dayjs.extend(duration);
dayjs.extend(relativeTime);

/**
 * 格式化时间（毫秒转换为时分秒）
 * @param {number} Milliseconds - 毫秒数
 * @param {string} format - 格式化类型，支持 'HH:MM:SS' 或 'Human'
 * @returns {string} 格式化后的时间字符串
 */
export function formatTime(Milliseconds, format = 'HH:MM:SS') {
  if (!Milliseconds) return '';

  let time = dayjs.duration(Milliseconds);
  let hours = time.hours().toString();
  let mins = time.minutes().toString();
  let seconds = time.seconds().toString().padStart(2, '0');

  if (format === 'HH:MM:SS') {
    return hours !== '0'
      ? `${hours}:${mins.padStart(2, '0')}:${seconds}`
      : `${mins}:${seconds}`;
  } else if (format === 'Human') {
    let hoursUnit, minitesUnit;
    switch (locale.locale) {
      case 'zh-CN':
        hoursUnit = '小时';
        minitesUnit = '分钟';
        break;
      case 'zh-TW':
        hoursUnit = '小時';
        minitesUnit = '分鐘';
        break;
      default:
        hoursUnit = 'hr';
        minitesUnit = 'min';
        break;
    }
    return hours !== '0'
      ? `${hours} ${hoursUnit} ${mins} ${minitesUnit}`
      : `${mins} ${minitesUnit}`;
  }
}

/**
 * 格式化日期
 * @param {number|string} timestamp - 时间戳
 * @param {string} format - 日期格式
 * @returns {string} 格式化后的日期字符串
 */
export function formatDate(timestamp, format = 'MMM D, YYYY') {
  if (!timestamp) return '';
  if (locale.locale === 'zh-CN') format = 'YYYY年MM月DD日';
  else if (locale.locale === 'zh-TW') format = 'YYYY年MM月DD日';
  return dayjs(timestamp).format(format);
}

/**
 * 格式化专辑类型
 * @param {string} type - 专辑类型
 * @param {Object} album - 专辑信息对象
 * @returns {string} 格式化后的专辑类型
 */
export function formatAlbumType(type, album) {
  if (!type) return '';
  if (type === 'EP/Single') {
    return album.size === 1 ? 'Single' : 'EP';
  } else if (type === 'Single') {
    return 'Single';
  } else if (type === '专辑') {
    return 'Album';
  } else {
    return type;
  }
}

/**
 * 调整图片尺寸
 * @param {string} imgUrl - 图片URL
 * @param {number} size - 目标尺寸
 * @returns {string} 调整后的图片URL
 */
export function resizeImage(imgUrl, size = 512) {
  if (!imgUrl) return '';
  let httpsImgUrl = imgUrl;
  if (imgUrl.slice(0, 7) == '/proxy/') {
    return imgUrl;
  }
  if (imgUrl.slice(0, 5) !== 'https') {
    httpsImgUrl = 'https' + imgUrl.slice(4);
  }
  return `${httpsImgUrl}?param=${size}y${size}`;
}

/**
 * 格式化播放次数
 * @param {number} count - 播放次数
 * @returns {string|number} 格式化后的播放次数
 */
export function formatPlayCount(count) {
  if (!count) return '';
  if (locale.locale === 'zh-CN') {
    if (count > 100000000) {
      return `${Math.floor((count / 100000000) * 100) / 100}亿`; // 2.32 亿
    }
    if (count > 100000) {
      return `${Math.floor((count / 10000) * 10) / 10}万`; // 232.1 万
    }
    if (count > 10000) {
      return `${Math.floor((count / 10000) * 100) / 100}万`; // 2.3 万
    }
    return count;
  } else if (locale.locale === 'zh-TW') {
    if (count > 100000000) {
      return `${Math.floor((count / 100000000) * 100) / 100}億`; // 2.32 億
    }
    if (count > 100000) {
      return `${Math.floor((count / 10000) * 10) / 10}萬`; // 232.1 萬
    }
    if (count > 10000) {
      return `${Math.floor((count / 10000) * 100) / 100}萬`; // 2.3 萬
    }
    return count;
  } else {
    if (count > 10000000) {
      return `${Math.floor((count / 1000000) * 10) / 10}M`; // 233.2M
    }
    if (count > 1000000) {
      return `${Math.floor((count / 1000000) * 100) / 100}M`; // 2.3M
    }
    if (count > 1000) {
      return `${Math.floor((count / 1000) * 100) / 100}K`; // 233.23K
    }
    return count;
  }
}

/**
 * 将 HTTP URL 转换为 HTTPS
 * @param {string} url - 原始URL
 * @returns {string} 转换后的URL
 */
export function toHttps(url) {
  if (!url) return '';
  return url.replace(/^http:/, 'https:');
}
