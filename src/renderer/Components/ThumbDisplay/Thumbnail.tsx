import { Image } from '@chakra-ui/image';
import { Box, Grid, Text } from '@chakra-ui/layout';
import React, { useContext, useState } from 'react';
import useLightModeCheck from '../../libs/hooks/useLightModeCheck';
import useColorSchemeContext from '../../libs/useColorSchemeContext';
import ThumbnailTagDisplay from './ThumbnailTagDisplay';
import { Post, Tag } from '../../types';

// import isLightMode from "../../libs/IsLightMode"

export interface ThumbnailProps {
  post?: Post;
  onDestroy?: (post: Post) => void;
  onSelect?: (post: Post, ctrlKey: boolean, shiftKey: boolean) => void;
  picked?: Post[];
  tags: Tag[];
}

export default function Thumbnail(props: ThumbnailProps) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const hiddenTextRef = React.createRef<HTMLParagraphElement>();

  const lightMode = useLightModeCheck();
  const { color } = useContext(useColorSchemeContext);

  const isPicked =
    props.picked && props.post
      ? props.picked.map((val) => val.id).indexOf(props.post?.id) >= 0
      : false;
  // console.log(isPicked);
  return (
    <Grid
      onContextMenu={(e) => {
        props.onDestroy && props.post && props.onDestroy(props.post);
        e.preventDefault();
      }}
      onClick={(e) => {
        // console.log(e);
        props.onSelect &&
          props.post &&
          props.onSelect(props.post, e.ctrlKey, e.shiftKey);
        e.preventDefault();
      }}
      cursor="pointer"
      userSelect="none"
      p="5"
      tabIndex={0}
      transitionDuration="normal"
      borderRadius="md"
      _focus={{
        transition: 'box-shadow 200ms',
        boxShadow: `0 0 0 2px var(--chakra-colors-${color}-200)`,
      }}
      bg={
        lightMode
          ? isPicked
            ? `${color}.400`
            : `${color}.200`
          : isPicked
          ? `${color}.600`
          : `${color}.800`
      }
      borderStyle="solid"
      borderWidth="2px"
      borderColor={lightMode ? `${color}.400` : `${color}.600`}
      _hover={{
        background: () => {
          if (lightMode) {
            return isPicked ? `${color}.500` : `${color}.300`;
          }
          return isPicked ? `${color}.500` : `${color}.700`;
        },
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
          props.post?.image
            ? props.post.image
            : 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D'
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
          ref={hiddenTextRef}
        >
          {props.post?.name ? props.post.name : 'Post Name'}
        </Text>
        <Text
          fontSize="md"
          fontWeight="semibold"
          wordBreak="break-all"
          overflow="hidden"
          height={
            isMouseOver ? `${hiddenTextRef.current?.clientHeight}px` : 'inherit'
          }
          w="inherit"
          transitionDuration="150ms"
          transitionProperty="height"
          onMouseOver={() => {
            // this.setState({ isMouseOver: true });
            setIsMouseOver(true);
          }}
          onMouseLeave={() => {
            setIsMouseOver(false);
            // this.setState({ isMouseOver: false });
          }}
          // bg={lightMode ? `${color}.200` : `${color}.800`}
          bg="inherit"
        >
          {props.post?.name ? props.post.name : 'Post Name'}
        </Text>
      </Box>
      <ThumbnailTagDisplay
        tags={props.tags}
        tagsIdsCurrentPost={props.post?.tagIds}
        color={lightMode ? 'blackAlpha.800' : 'whiteAlpha.800'}
      />
      <Text
        fontSize="sm"
        fontWeight="semibold"
        color={lightMode ? 'blackAlpha.700' : 'whiteAlpha.700'}
      >
        {props.post?.folder ? props.post.folder : 'Folder'}
      </Text>
    </Grid>
  );
}
