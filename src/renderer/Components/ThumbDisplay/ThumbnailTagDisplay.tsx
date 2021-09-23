import { Text } from '@chakra-ui/react';
import React from 'react';
import { Tag } from '../../types';

interface ThumbnailTagDisplayProps {
  tags: Tag[];
  tagsIdsCurrentPost?: number[];
  opacity?: string;
  color?: string;
}

export const ThumbnailTagDisplay: React.FC<ThumbnailTagDisplayProps> = ({
  tags,
  opacity,
  color,
  tagsIdsCurrentPost,
}) => {
  return (
    <Text
      fontSize="sm"
      fontWeight="semibold"
      opacity={tags.length > 0 ? opacity || '1' : '0'}
      color={color}
    >
      {tags
        .filter((tag) => tagsIdsCurrentPost?.includes(tag.id))
        .map((tag) => {
          return tag.name;
        })
        .join(', ')}
    </Text>
  );
};
export default ThumbnailTagDisplay;
