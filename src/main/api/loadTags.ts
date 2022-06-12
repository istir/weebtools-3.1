import prisma from '../../../prisma/prisma';

export default async function loadTags() {
  const tags = await prisma.tag.findMany();
  return tags;
}
