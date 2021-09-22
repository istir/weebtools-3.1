import { Checkbox, Text } from "@chakra-ui/react";
import React from "react";
import { Tag } from "../../types";

export interface TagComponentProps {
  tag: Tag;
  valid?: boolean;
  colorScheme: string;
}

export const TagComponent: React.FC<TagComponentProps> = ({
  tag,
  valid,
  colorScheme,
}) => {
  return (
    <Checkbox
      colorScheme={colorScheme}
      minW="150px"
      value={tag.id + ""}
      isDisabled={!valid}
    >
      {<Text fontSize="lg">{tag.name}</Text>}
    </Checkbox>
  );
};
export default TagComponent;
