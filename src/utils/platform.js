export const isWindows =
  typeof process !== 'undefined' && process.platform === 'win32';
export const isMac =
  typeof process !== 'undefined' && process.platform === 'darwin';
export const isLinux =
  typeof process !== 'undefined' && process.platform === 'linux';
export const isDevelopment =
  typeof process !== 'undefined' && process.env.NODE_ENV === 'development';

export const isCreateTray =
  typeof process !== 'undefined' &&
  process.env.IS_ELECTRON_DEV &&
  (isWindows || isLinux || (isMac && !window?.electron?.app?.dock));
export const isCreateMpris =
  typeof process !== 'undefined' && process.env.IS_ELECTRON_DEV && isLinux;
