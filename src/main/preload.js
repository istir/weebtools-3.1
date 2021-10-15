const { contextBridge, ipcRenderer } = require('electron');

const valid = ['ipc-example', 'loadFiles', 'loadTags'];
contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    async loadFiles() {
      return ipcRenderer.send('loadFiles');
    },
    async loadTags() {
      return ipcRenderer.send('loadTags');
    },
    myPing() {
      ipcRenderer.send('ipc-example', 'ping');
    },
    on(channel, func) {
      const validChannels = valid;
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.on(channel, (event, ...args) => func(...args));
      }
    },
    once(channel, func) {
      const validChannels = valid;
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.once(channel, (event, ...args) => func(...args));
      }
    },
  },
});
