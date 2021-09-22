import React from "react";
import ThumbnailFunctionWrapper from "./ThumbnailFunctionWrapper";
import { Post, Tag } from "../../types";
import { Grid } from "@chakra-ui/layout";
interface ThumbnailContainerProps {
  posts?: Post[];
  picked?: Post;
  onDestroy?: (post: Post) => void;
  onSelect?: (post: Post) => void;
  unCheckThumbnail?: () => void;
  tags: Tag[];
  colorScheme: string;
}

interface ThumbnailContainerState {
  posts: Post[];
  picked: null | Post;
}

export default class ThumbnailContainer extends React.Component<
  ThumbnailContainerProps,
  ThumbnailContainerState
> {
  constructor(props: ThumbnailContainerProps) {
    super(props);
    this.state = { posts: [], picked: null };
  }
  // componentDidMount() {

  //     this.setState({ posts: this.props.posts });

  // }
  // onThumbnailDeletion(post: Post) {
  //   //! this COPIES the array to some helper and THEN removes it. Without it it's going to delete more than one element because it's state
  //   if (this.state.picked?.id === post.id) {
  //     this.setState({ picked: null });
  //   }
  //   this.setState((prevState) => {
  //     const index = prevState.posts.indexOf(post);
  //     const helperArray = prevState.posts.slice(0);
  //     helperArray.splice(index, 1);
  //     return { posts: helperArray };
  //   });
  // }

  // onThumbnailClick(post: Post) {
  //   this.setState({ picked: post });
  // }

  render() {
    return (
      <Grid
        className="ThumbnailContainer"
        padding="2"
        templateColumns="repeat(auto-fit, minmax(240px, 1fr))"
        gap="2"
        width="100%"
      >
        {this.props.posts &&
          this.props.posts.map((post) => (
            <ThumbnailFunctionWrapper
              onDestroy={this.props.onDestroy}
              onSelect={this.props.onSelect}
              post={post}
              key={post.id}
              picked={this.props.picked?.id === post.id}
              tags={this.props.tags}
              colorScheme={this.props.colorScheme}
            />
          ))}
      </Grid>
    );
  }
}
