import prisma from '../../../prisma/prisma';

export default async function loadFiles(postsToLoad = 100) {
  const posts = await prisma.files.findMany({
    take: -postsToLoad,
    include: { tags: true },
  });
  return posts;
}
