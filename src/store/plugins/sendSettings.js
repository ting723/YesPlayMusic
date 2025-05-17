export function getSendSettingsPlugin() {
  const electron = window.electron;
  return store => {
    store.subscribe((mutation, state) => {
      // console.log(mutation);
      if (mutation.type !== 'updateSettings') return;
      window.electron.ipcRenderer.send('settings', state.settings);
    });
  };
}
