// import { ipcRenderer } from 'electron/renderer';
import { Files } from '.prisma/client';

export default function useSetPost(post: Files) {
  // window.electron.ipcRenderer.loadFiles(howMany);
  console.log('USESETPOST', post);
  window.electron.ipcRenderer.setPost(post);
  window.electron.ipcRenderer.once('setPost', (arg) => {
    // eslint-disable-next-line no-console
    // setPosts(arg);
    console.log(arg);
  });
}
