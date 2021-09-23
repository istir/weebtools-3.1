import { CheckboxGroup } from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import useColorSchemeContext from 'renderer/libs/useColorSchemeContext';
import { Post, Tag } from '../../types';
import TagPickerFunctionWrapper from './TagPickerFunctionWrapper';

interface TagPickerProps {
  tags: Tag[];
  picked?: Post;
  updatePost?: (post: Post) => void;
}
export default function TagPicker(props: TagPickerProps) {
  const [checked, setChecked] = React.useState<string[]>([]);
  const { color } = useContext(useColorSchemeContext);
  useEffect(() => {
    props.picked?.tagIds &&
      setChecked(props.picked.tagIds.map((val) => `${val}`));
  }, [props.picked]);

  return (
    <CheckboxGroup
      value={checked}
      onChange={(e) => {
        if (props.picked) {
          setChecked(e as string[]);
          const filteredTags: number[] = [];
          e.forEach((val) => filteredTags.push(parseInt(val as string, 10)));
          props.updatePost &&
            props.picked &&
            props.updatePost({
              id: props.picked.id,
              name: props.picked.name,
              folder: props.picked.folder,
              image: props.picked.image,
              tagIds: filteredTags,
            });
        }
      }}
    >
      <TagPickerFunctionWrapper
        tags={props.tags}
        valid={!!props.picked}
        colorScheme={color}
      />
    </CheckboxGroup>
  );
}
