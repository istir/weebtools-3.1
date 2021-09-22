import React from 'react';
import ThumbnailContainer from './ThumbDisplay/ThumbnailContainer';
import TagPicker from './TagPicker/TagPicker';
import { Flex } from '@chakra-ui/layout';
import { Post, Tag } from '../types';
interface ThumbAndTagContainerProps {
  posts?: Post[];
  tags: Tag[];
  colorScheme: string;
  setColorScheme: (colorScheme: string) => void;
}
interface ThumbAndTagContainerState {
  posts: Post[];
  picked?: Post;
}

export default class ThumbAndTagContainer extends React.Component<
  ThumbAndTagContainerProps,
  ThumbAndTagContainerState
> {
  constructor(props: ThumbAndTagContainerProps) {
    super(props);
    this.state = { posts: [], picked: undefined };
  }

  updatePost(post: Post) {
    this.setState((prevState) => {
      const index = prevState.posts
        .map((prevPost) => prevPost.id)
        .indexOf(post.id);
      const helperArray = prevState.posts.slice(0);
      helperArray.splice(index, 1, post);
      // helperArray.inse
      return { posts: helperArray };
    });
    this.onThumbnailClick(post);
  }

  componentDidMount() {
    this.setState({ posts: this.props.posts ? this.props.posts : [] });
  }

  onThumbnailDeletion(post: Post) {
    //! this COPIES the array to some helper and THEN removes it. Without it it's going to delete more than one element because it's state
    if (this.state.picked?.id === post.id) {
      this.setState({ picked: undefined });
    }
    this.setState((prevState) => {
      const index = prevState.posts.indexOf(post);
      const helperArray = prevState.posts.slice(0);
      helperArray.splice(index, 1);
      return { posts: helperArray };
    });
  }

  onThumbnailClick(post: Post) {
    this.setState({ picked: post });
  }
  unCheckThumbnail() {
    this.setState({ picked: undefined });
  }
  render() {
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
            ) && this.unCheckThumbnail();
          }
        }}
      >
        <ThumbnailContainer
          posts={this.state.posts}
          picked={this.state.picked}
          onDestroy={this.onThumbnailDeletion.bind(this)}
          onSelect={this.onThumbnailClick.bind(this)}
          unCheckThumbnail={this.unCheckThumbnail.bind(this)}
          tags={this.props.tags}
          colorScheme={this.props.colorScheme}
        />
        <TagPicker
          picked={this.state.picked}
          tags={this.props.tags}
          updatePost={this.updatePost.bind(this)}
          colorScheme={this.props.colorScheme}
        />
      </Flex>
    );
  }
}
