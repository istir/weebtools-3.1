import { CheckboxGroup } from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import useColorSchemeContext from '../../libs/useColorSchemeContext';
import TagPickerFunctionWrapper from './TagPickerFunctionWrapper';

interface TagPickerProps {
  tags: Tag[];
  picked?:  (Files & { tags: Tag[] })[];
  updatePost?: (posts:  (Files & { tags: Tag[] })[] |  (Files & { tags: Tag[] }), tagIds: number[]) => void;
}
export default function TagPicker(props: TagPickerProps) {
  const [checked, setChecked] = React.useState<string[]>([]);
  const { color } = useContext(useColorSchemeContext);
  const workType = props.picked?.length !== 1 ? 'multiple' : 'single';

  function convertNumberToStringArray(arr: number[]): string[] {
    return arr.map(String);
  }

  useEffect(() => {
    if (!props.picked) return;
    if (workType === 'single') {
      setChecked(convertNumberToStringArray(props.picked[0].tagIds));
    } else {
      // TODO: somehow make it so that if every post contains the same tag then show it and let the user toggle it on every post
      // props.picked.map(post=>)
      // setChecked(convertNumberToStringArray());
    }

    // setChecked(props.picked.tagIds.map((val) => `${val}`));
  }, [props.picked]);

  return (
    <CheckboxGroup
      value={checked}
      onChange={(e) => {
        if (props.picked) {
          setChecked(e as string[]);
          const filteredTags: number[] = [];
          e.forEach((val) => filteredTags.push(parseInt(val as string, 10)));
          if (!props.updatePost) return;
          if (!props.picked) return;
          if (workType === 'single') {
            props.updatePost(props.picked[0], filteredTags);
            return;
          }
          return;
          // props.updatePost &&
          //   props.picked &&
          //   props.updatePost(props.picked, filteredTags);
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
