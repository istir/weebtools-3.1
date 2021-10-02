import React from 'react';
import { Grid } from '@chakra-ui/layout';
import { Post, Tag } from '../../types';
import Thumbnail from './Thumbnail';

interface ThumbnailContainerProps {
  posts?: Post[];
  picked?: Post[];
  onDestroy?: (post: Post) => void;
  onSelect?: (post: Post, ctrlKey: boolean, shiftKey: boolean) => void;
  // unCheckThumbnail?: () => void;
  tags: Tag[];
}

export default function ThumbnailContainer(props: ThumbnailContainerProps) {
  // const [posts, setPosts] = useState<Post[]>([]);
  // const [picked, setPicked] = useState<Post|null>(null);

  return (
    <Grid
      className="ThumbnailContainer"
      padding="2"
      templateColumns="repeat(auto-fit, minmax(240px, 1fr))"
      gap="2"
      width="100%"
    >
      {props.posts &&
        props.posts.map((post) => (
          <Thumbnail
            onDestroy={props.onDestroy}
            onSelect={props.onSelect}
            post={post}
            key={post.id}
            picked={props.picked}
            tags={props.tags}
          />
        ))}
    </Grid>
  );
}
