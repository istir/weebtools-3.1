import { Tag as TagOwnType } from 'renderer/types';
import filterTags from './filterTags';

export default function filterTagsAsStringArray(
  tags: TagOwnType[],
  fromSite: string | string[]
): string[] {
  const c = filterTags(tags, fromSite);
  const justName = c.map((tag) => tag.name);
  return justName;
}
