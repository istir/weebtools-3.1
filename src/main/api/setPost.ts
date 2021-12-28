import prisma from '../../../prisma/prisma';

export default async function setPost({ id, tags }: { id?: number }) {
  const post = await prisma.files.update({ where: { id }, data: {} });
  const tags = await prisma.tag.findMany({ include: { fromSite: true } });
  return tags;
}
