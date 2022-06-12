// import { ipcRenderer } from 'electron/renderer';

export default function useLoadTags(setTags) {
  window.electron.ipcRenderer.loadTags();

  window.electron.ipcRenderer.once('loadTags', (arg) => {
    // eslint-disable-next-line no-console
    arg.forEach((tag) => {
      if (!Array.isArray(tag.fromSite)) {
        tag.fromSite = tag.fromSite.split(', ');
      }
    });
    setTags(arg);
    //  console.log(arg);
  });
}
