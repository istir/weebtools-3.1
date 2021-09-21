export interface Post {
  id: number;
  image?: string; //imageUrl/imagePath
  name: string;
  tags?: Tag[];
  tagIds: number[];
  folder: string;
}
export type fromSite = { id: number; text: string }[];

export interface Tag {
  id: number;
  name: string;
  key?: string;
  folder: string;
  fromSite: fromSite;
}
