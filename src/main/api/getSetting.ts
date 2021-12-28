// import { prisma } from ".prisma/client";

import prisma from '../../../prisma/prisma';

export default async function getSetting(key?: string) {
  if (key) {
    const setting = await prisma.settings.findUnique({ where: { key } });
    if (setting) return setting.value;
    // return null;
  } else {
    const setting = await prisma.settings.findMany();
    if (setting) return setting;
  }
  return null;
  // console.log('key:', key);
  // return setting?.value;
}
