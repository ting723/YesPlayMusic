import router from '@/router';
import { doLogout, getCookie } from '@/utils/auth';
import axios from 'axios';
import { getBaseURL, isElectron, getRealIPConfig } from '@/utils/env';

let baseURL = getBaseURL();

const service = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 15000,
});

service.interceptors.request.use(function (config) {
  if (!config.params) config.params = {};
  if (baseURL.length) {
    if (baseURL[0] !== '/' && !isElectron() && getCookie('MUSIC_U') !== null) {
      config.params.cookie = `MUSIC_U=${getCookie('MUSIC_U')};`;
    }
  } else {
    console.error("You must set up the baseURL in the service's config");
  }

  if (!isElectron() && !config.url.includes('/login')) {
    config.params.realIP = '211.161.244.70';
  }

  // Force real_ip
  const enableRealIP = JSON.parse(
    localStorage.getItem('settings')
  ).enableRealIP;
  const realIP = JSON.parse(localStorage.getItem('settings')).realIP;
  const configRealIP = getRealIPConfig();
  if (configRealIP) {
    config.params.realIP = configRealIP;
  } else if (enableRealIP) {
    config.params.realIP = realIP;
  }

  const proxy = JSON.parse(localStorage.getItem('settings')).proxyConfig;
  if (['HTTP', 'HTTPS'].includes(proxy.protocol)) {
    config.params.proxy = `${proxy.protocol}://${proxy.server}:${proxy.port}`;
  }

  return config;
});

service.interceptors.response.use(
  response => {
    const res = response.data;

    // Recursive function to modify image URLs
    const imageUrlKeys = [
      'picUrl',
      'img1v1Url',
      'coverUrl',
      'coverImgUrl',
      'blurPicUrl',
    ];
    function modifyImageUrls(data) {
      if (data === null || typeof data !== 'object') {
        return data;
      }

      if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
          data[i] = modifyImageUrls(data[i]);
        }
      } else {
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            if (typeof data[key] === 'string' && imageUrlKeys.includes(key)) {
              if (!data[key].startsWith('/proxy')) {
                data[key] = '/proxy/' + data[key];
              }
            } else {
              data[key] = modifyImageUrls(data[key]);
            }
          }
        }
      }
      return data;
    }

    modifyImageUrls(res);

    return res;
  },
  async error => {
    /** @type {import('axios').AxiosResponse | null} */
    let response;
    let data;
    if (error === 'TypeError: baseURL is undefined') {
      response = error;
      data = error;
      console.error("You must set up the baseURL in the service's config");
    } else if (error.response) {
      response = error.response;
      data = response.data;
    }

    if (
      response &&
      typeof data === 'object' &&
      data.code === 301 &&
      data.msg === '需要登录'
    ) {
      console.warn('Token has expired. Logout now!');

      // 登出帳戶
      doLogout();

      // 導向登入頁面
      if (isElectron()) {
        router.push({ name: 'loginAccount' });
      } else {
        router.push({ name: 'login' });
      }
    }
  }
);

export default service;
