// import { ipcRenderer } from 'electron/renderer';

export default function useSaveFiles(posts) {
  // window.electron.ipcRenderer.loadFiles(howMany);
  window.electron.ipcRenderer.saveFiles();
  window.electron.ipcRenderer.once('saveFiles', (arg) => {
    // eslint-disable-next-line no-console
    setPosts(arg);
    // console.log(arg);
  });
}
