import path from 'path';
import getSetting from './getSetting';

export default async function loadImage(folder: string, fileName: string) {
  const mainPath = await getSetting('mainPath');
  if (!mainPath) return '';
  const filePath = path.join(mainPath, folder, fileName);
  return filePath;
}
