import { Text } from "@chakra-ui/react";
import React from "react";
import { Tag } from "../../types";

interface ThumbnailTagDisplayProps {
  tags: Tag[];
  tagsIdsCurrentPost: number[];
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
      opacity={tags.length > 0 ? (opacity ? opacity : "1") : "0"}
      color={color}
    >
      {/* {tags.map(tag=>tag.id).filter()} */}
      {tags
        .filter((tag) => tagsIdsCurrentPost.includes(tag.id))
        .map((tag) => {
          return tag.name;
        })
        .join(", ")}
      {/*     
    {tagsIdsCurrentPost.map(tagId=>(
      
    ))} */}
      {/* {tags.length > 0
        ? tags
            .map((tag) => {
              return tag.name;
            })
            .join(", ")
        : "-"} */}
    </Text>
  );
};
export default ThumbnailTagDisplay;
