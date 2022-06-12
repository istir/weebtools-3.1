import { Tag as TagOwnType } from 'renderer/types';
// import { Tag as TagOwnType} from 'renderer/types';

export default function filterTags(
  tags: TagOwnType[],
  fromSite: string | string[]
) {
  const fSite = Array.isArray(fromSite) ? fromSite : fromSite.split(', ');
  // const ts = tags.forEach(tag=>{Array.isArray(tag)?tag:tag.split(", ")})

  const intersection = tags.filter((tag) => fSite.includes(tag.fromSite[0]));

  return intersection;
  // if (!justText) return intersection;
  // const justName = intersection.map((tag) => tag.name);
  // return justName;
}
