import { isElectron, isDev, isElectronDev } from './env';

export const isWindows =
  isElectron() && process.platform === 'win32';
export const isMac =
  isElectron() && process.platform === 'darwin';
export const isLinux =
  isElectron() && process.platform === 'linux';
export const isDevelopment = isDev();

export const isCreateTray =
  isElectronDev() &&
  (isWindows || isLinux || (isMac && !window?.electron?.app?.dock));
export const isCreateMpris =
  isElectronDev() && isLinux;
