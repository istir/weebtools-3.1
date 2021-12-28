// import { ipcRenderer } from 'electron/renderer';

export default function useLoadFiles(setPosts, howMany: number) {
  window.electron.ipcRenderer.loadFiles(howMany);

  window.electron.ipcRenderer.once('loadFiles', (arg) => {
    // eslint-disable-next-line no-console
    setPosts(arg);
    // console.log(arg);
  });
}
