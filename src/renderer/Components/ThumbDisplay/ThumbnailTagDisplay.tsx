import { Text } from '@chakra-ui/react';
import React from 'react';
import { fromSite, Tag } from '.prisma/client';
// import { Tag } from '../../types';

interface ThumbnailTagDisplayProps {
  tags: (Tag & { fromSite: fromSite[] })[];
  tagsCurrentPost: Tag[];
  opacity?: string;
  color?: string;
}

export const ThumbnailTagDisplay: React.FC<ThumbnailTagDisplayProps> = ({
  tags,
  opacity,
  color,
  tagsCurrentPost,
}) => {
  return (
    <Text
      fontSize="sm"
      fontWeight="semibold"
      opacity={tags.length > 0 ? opacity || '1' : '0'}
      color={color}
    >
      {/* {tags
        .filter((tag) => tagsIdsCurrentPost?.includes(tag.id))
        .map((tag) => {
          return tag.name;
        })
        .join(', ')} */}
      {tagsCurrentPost
        .map((tag) => {
          return tag.name;
        })
        .join(', ')}
    </Text>
  );
};
export default ThumbnailTagDisplay;
