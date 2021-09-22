import { Image } from "@chakra-ui/image";
import { Box, Grid, Text } from "@chakra-ui/layout";
import React from "react";
import ThumbnailTagDisplay from "./ThumbnailTagDisplay";
import { Post, Tag } from "../../types";

// import isLightMode from "../../libs/IsLightMode"

export interface ThumbnailProps {
  lightMode?: boolean;
  post?: Post;
  onDestroy?: (post: Post) => void;
  onSelect?: (post: Post) => void;
  picked?: boolean;
  tags: Tag[];
  colorScheme: string;
}
interface ThumbnailState {
  isMouseOver: boolean;
}

export default class Thumbnail extends React.Component<
  ThumbnailProps,
  ThumbnailState
> {
  hiddenTextRef: React.RefObject<HTMLParagraphElement>;
  constructor(props: ThumbnailProps) {
    super(props);
    this.state = { isMouseOver: false };
    this.hiddenTextRef = React.createRef();
  }

  render() {
    return (
      <Grid
        onContextMenu={(e) => {
          this.props.onDestroy &&
            this.props.post &&
            this.props.onDestroy(this.props.post);
          e.preventDefault();
        }}
        onClick={(e) => {
          this.props.onSelect &&
            this.props.post &&
            this.props.onSelect(this.props.post);
          e.preventDefault();
        }}
        cursor="pointer"
        userSelect="none"
        p="5"
        transitionDuration="150ms"
        borderRadius="md"
        bg={
          this.props.lightMode
            ? this.props.picked
              ? `${this.props.colorScheme}.400`
              : `${this.props.colorScheme}.200`
            : this.props.picked
            ? `${this.props.colorScheme}.600`
            : `${this.props.colorScheme}.800`
        }
        borderStyle="solid"
        borderWidth="2px"
        borderColor={
          this.props.lightMode
            ? `${this.props.colorScheme}.400`
            : `${this.props.colorScheme}.600`
        }
        _hover={{
          background: this.props.lightMode
            ? this.props.picked
              ? `${this.props.colorScheme}.500`
              : `${this.props.colorScheme}.300`
            : this.props.picked
            ? `${this.props.colorScheme}.500`
            : `${this.props.colorScheme}.700`,
        }}
        gridTemplateRows="200px"
      >
        <Image
          borderRadius="md"
          border="inherit"
          height="100%"
          margin="auto"
          objectFit="cover"
          src={
            this.props.post?.image
              ? this.props.post.image
              : "https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D"
          }
        />
        <Box h="3rem" pos="relative" bg="inherit">
          <Text
            fontSize="md"
            fontWeight="semibold"
            wordBreak="break-all"
            visibility="hidden"
            opacity="0"
            pos="absolute"
            w="100%"
            zIndex="-1"
            ref={this.hiddenTextRef}
          >
            {this.props.post?.name ? this.props.post.name : "Post Name"}
          </Text>
          <Text
            fontSize="md"
            fontWeight="semibold"
            wordBreak="break-all"
            overflow="hidden"
            height={
              this.state.isMouseOver
                ? this.hiddenTextRef.current?.clientHeight + "px"
                : "inherit"
            }
            w="inherit"
            transitionDuration="150ms"
            transitionProperty="height"
            onMouseOver={() => {
              this.setState({ isMouseOver: true });
            }}
            onMouseLeave={() => {
              this.setState({ isMouseOver: false });
            }}
            // bg={this.props.lightMode ? `${this.props.colorScheme}.200` : `${this.props.colorScheme}.800`}
            bg="inherit"
          >
            {this.props.post?.name ? this.props.post.name : "Post Name"}
          </Text>
        </Box>

        <ThumbnailTagDisplay
          // tags={
          //   this.props.post?.tags
          //     ? this.props.post.tags
          //     : [
          //         { id: 0, key: "tag" + 0, name: "Tag" + 0 },
          //         { id: 1 + 1, key: "tag" + (1 + 1), name: "Tag" + (1 + 1) },
          //       ]
          // }
          tags={this.props.tags}
          tagsIdsCurrentPost={this.props.post?.tagIds}
          color={this.props.lightMode ? "blackAlpha.800" : "whiteAlpha.800"}
        />
        <Text
          fontSize="sm"
          fontWeight="semibold"
          color={this.props.lightMode ? "blackAlpha.700" : "whiteAlpha.700"}
        >
          {this.props.post?.folder ? this.props.post.folder : "Folder"}
        </Text>
      </Grid>
    );
  }
}
