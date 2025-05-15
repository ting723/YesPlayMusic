import { app } from 'electron';

export const isWindows = process.platform === 'win32';
export const isMac = process.platform === 'darwin';
export const isLinux = process.platform === 'linux';
export const isDevelopment = process.env.NODE_ENV === 'development';

export const isCreateTray = isWindows || isLinux || (isMac && !app.dock);
export const isCreateMpris = isLinux;
