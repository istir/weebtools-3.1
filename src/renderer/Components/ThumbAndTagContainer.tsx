import React, { useState } from 'react';
import { Flex } from '@chakra-ui/layout';
import ThumbnailContainer from './ThumbDisplay/ThumbnailContainer';
import TagPicker from './TagPicker/TagPicker';
import { Post, Tag } from '../types';

interface ThumbAndTagContainerProps {
  posts?: Post[];
  tags: Tag[];
  // colorScheme: string;
  // setColorScheme: (colorScheme: string) => void;
}

export default function ThumbAndTagContainer(props: ThumbAndTagContainerProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [picked, setPicked] = useState<Post | undefined>(undefined);

  React.useEffect(() => {
    setPosts(props.posts ? props.posts : []);
  }, [props.posts]);

  function onThumbnailClick(post: Post) {
    setPicked(post);
  }
  function unCheckThumbnail() {
    setPicked(undefined);
  }

  function updatePost(post: Post) {
    setPosts((prevPost) => {
      const index = prevPost.map((prevIndex) => prevIndex.id).indexOf(post.id);
      const helperArray = prevPost.slice(0);
      helperArray.splice(index, 1, post);
      return helperArray;
    });
    onThumbnailClick(post);
  }

  function onThumbnailDeletion(post: Post) {
    //! this COPIES the array to some helper and THEN removes it. Without it it's going to delete more than one element because it's state
    if (picked?.id === post.id) {
      // this.setState({ picked: undefined });
      setPicked(undefined);
    }
    setPosts((prevPost) => {
      const index = prevPost.indexOf(post);
      const helperArray = prevPost.slice(0);
      helperArray.splice(index, 1);
      return helperArray;
    });
  }

  return (
    <Flex
      className="ThumbnailContainer"
      onClick={(e) => {
        e.stopPropagation();
        const { target } = e;
        //* if clicked on .ThumbnailContainer unclick
        if (target) {
          (target as HTMLParagraphElement).classList.contains(
            'ThumbnailContainer'
          ) && unCheckThumbnail();
        }
      }}
    >
      <ThumbnailContainer
        posts={posts}
        picked={picked}
        onDestroy={onThumbnailDeletion}
        onSelect={onThumbnailClick}
        unCheckThumbnail={unCheckThumbnail}
        tags={props.tags}
      />
      <TagPicker picked={picked} tags={props.tags} updatePost={updatePost} />
    </Flex>
  );
}
