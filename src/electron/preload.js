import { contextBridge, ipcRenderer, shell, dialog } from 'electron';
import os from 'os';

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    on: (channel, func) => ipcRenderer.on(channel, (event, ...args) => func(event, ...args)),
    send: (channel, ...args) => ipcRenderer.send(channel, ...args),
  },
  os: os,
  shell: shell,
  dialog: dialog,
});