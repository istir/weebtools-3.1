// import { ipcRenderer } from 'electron/renderer';

export default function useLoadTags(setTags) {
  window.electron.ipcRenderer.loadTags();

  window.electron.ipcRenderer.once('loadTags', (arg) => {
    // eslint-disable-next-line no-console
    setTags(arg);
    //  console.log(arg);
  });
}
