// 统一环境变量访问
export const isElectron = () =>
  typeof window !== 'undefined' && window.process?.type;

// 判断开发环境
export const isDev = () => import.meta.env.DEV;

// 获取环境变量
export const getEnv = key => {
  if (isElectron()) {
    return process.env[key];
  } else {
    return import.meta.env[`VITE_${key}`];
  }
};

// 安全获取环境变量（防止浏览器环境报错）
export const safeGetEnv = key => {
  try {
    return getEnv(key);
  } catch (e) {
    return null;
  }
};

// 获取API基础URL
export const getBaseURL = () => {
  if (isElectron()) {
    return isDev()
      ? import.meta.env.VITE_ELECTRON_API_URL_DEV
      : import.meta.env.VITE_ELECTRON_API_URL;
  } else {
    return isDev() ? '/api' : import.meta.env.VITE_NETEASE_API_URL;
  }
};

// 获取平台信息
export const getPlatform = () => {
  if (!isElectron()) return null;
  return process.platform;
};

// 判断是否为Electron开发模式
export const isElectronDev = () => {
  return isElectron() && isDev();
};

// Electron功能封装
export const electronInvoke = async (channel, ...args) => {
  if (isElectron()) {
    const { ipcRenderer } = await import('electron');
    return ipcRenderer.invoke(channel, ...args);
  } else {
    console.warn('非Electron环境，忽略调用');
    return null;
  }
};

// 获取Last.fm API配置
export const getLastFMConfig = () => {
  return {
    apiKey: safeGetEnv('VUE_APP_LASTFM_API_KEY'),
    apiSharedSecret: safeGetEnv('VUE_APP_LASTFM_API_SHARED_SECRET'),
  };
};

// 获取真实IP配置
export const getRealIPConfig = () => {
  return safeGetEnv('VUE_APP_REAL_IP');
};
