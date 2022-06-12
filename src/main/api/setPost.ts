import prisma from '../../../prisma/prisma';
import { Files } from '.prisma/client';

export default async function setPost({ post }: { post: Files }) {
  console.log('setPost', post);
  // const post = await prisma.files.update({ where: { id }, data: {} });
  const p = await prisma.files.update({
    where: { id: post.id },
    data: { ...post },
  });
  return p;
  // const tags = await prisma.tag.findMany({ include: { fromSite: true } });
  // return tags;
}
