import { Box, VStack } from "@chakra-ui/layout";
import React from "react";
import IsLightMode from "../../libs/IsLightMode";
import { Tag } from "../../types";
import TagComponent from "./TagComponent";

interface TagPickerFunctionWrapperProps {
  tags: Tag[];
  valid?: boolean;
  colorScheme: string;
}

export const TagPickerFunctionWrapper: React.FC<TagPickerFunctionWrapperProps> =
  ({ tags, valid, colorScheme }) => {
    return (
      <Box pr="2" pt="2" h="fit-content">
        <VStack
          borderRadius="md"
          alignItems="flex-start"
          bg={IsLightMode() ? `${colorScheme}.200` : `${colorScheme}.800`}
          borderStyle="solid"
          borderWidth="2px"
          minH="200px"
          borderColor={
            IsLightMode() ? `${colorScheme}.400` : `${colorScheme}.600`
          }
          padding="2"
        >
          {tags.map((tag) => (
            <TagComponent
              key={tag.id}
              tag={tag}
              valid={valid}
              colorScheme={colorScheme}
            />
          ))}
        </VStack>
      </Box>
    );
  };
export default TagPickerFunctionWrapper;
