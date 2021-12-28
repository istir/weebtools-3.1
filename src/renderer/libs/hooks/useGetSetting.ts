export default function useGetSetting(
  key?: string,
  setSetting: (key: string, value: string) => void
) {
  window.electron.ipcRenderer.getSetting(key);
  // let setting = '';
  window.electron.ipcRenderer.once('getSetting', (arg) => {
    // setting = arg;
    // eslint-disable-next-line no-console
    // setPosts(arg);
    // console.log(arg);
    // return new Promise((resolve) => {
    //   resolve(arg);
    // });
    setSetting(key, arg);
  });
  // console.log(setting);
}
