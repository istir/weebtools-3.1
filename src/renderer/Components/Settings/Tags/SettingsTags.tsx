import { ButtonGroup, Button } from '@chakra-ui/button';
import { Grid } from '@chakra-ui/layout';

import React, { useContext, useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import useLightModeCheck from '../../../libs/hooks/useLightModeCheck';
import useColorSchemeContext from '../../../libs/useColorSchemeContext';
import { FromSite, Tag } from '../../../types';
import SettingsTag from './SettingsTag';
// import SettingsTag from './SettingsTag';

interface SettingsTagsProps {
  tags: Tag[];
  saveTags?: (tagsToSave: Tag[]) => void;
  // closeModal?: () => void;
}

export default function SettingsTags(props: SettingsTagsProps) {
  const initialTags = props.tags;
  let shouldCancel = false;
  // const isChanged = false;

  const { color } = useContext(useColorSchemeContext);

  const [tags, setTags] = useState(props.tags);

  useEffect(() => {
    // componentDidMount
    // console.log('componentdidmount');
    return () => {
      // componentWillUnmount
      // console.log('component will unmount');
      props.saveTags &&
        (shouldCancel ? props.saveTags(initialTags) : props.saveTags(tags));
    };
  }, [initialTags, props, shouldCancel, tags]);

  function addTag() {
    setTags((prevTags) => {
      if (
        prevTags[prevTags.length - 1] &&
        (prevTags[prevTags.length - 1].name !== '' ||
          prevTags[prevTags.length - 1].folder !== '' ||
          prevTags[prevTags.length - 1].fromSite.length > 0)
      ) {
        const helperArray = prevTags.slice(0);
        // console.log(prevTags[prevTags.length - 1]);
        helperArray.push({
          id: prevTags[prevTags.length - 1].id + 1,
          folder: '',
          name: '',
          fromSite: [],
        });
        // this.props.saveTags && this.props.saveTags(helperArray);
        return helperArray;
      }
      return prevTags;
    });
  }

  function removeTag(id: number) {
    setTags((prevTags) => {
      const index = prevTags.map((prevPost) => prevPost.id).indexOf(id);
      const helperArray = prevTags.slice(0);
      helperArray.splice(index, 1);
      // this.props.saveTags && this.props.saveTags(helperArray);
      return helperArray;
    });
  }

  function updateTag(
    id: number,
    {
      name,
      folder,
      fromSite,
    }: { name?: string; folder?: string; fromSite?: FromSite }
  ) {
    setTags((prevTags) => {
      const index = prevTags.map((prevPost) => prevPost.id).indexOf(id);
      if (index < 0) return prevTags;
      const helperArray = prevTags.slice(0);
      const helperTag = helperArray[index];
      helperArray[index] = {
        id: helperTag.id,
        name: name || helperTag.name,
        folder: folder || helperTag.folder,
        fromSite: fromSite || helperTag.fromSite,
      };
      // this.props.saveTags && this.props.saveTags(helperArray);

      return helperArray;
    });
  }

  return (
    <>
      <ButtonGroup
        // width="calc(100% - var(--chakra-space-6))"
        width="full"
        // ml="10"
        // transform="translateX(var(--chakra-space-6))"
        // width="calc(100% - var(--chakra-space-6) * 2)"
        // right="0"
        borderRadius="md"
        mt="2"
        px="6"
        py="2"
        bg={useLightModeCheck() ? `${color}.300` : `${color}.800`}
        // ml="-6"
        pos="sticky"
        top="-5px"
        zIndex="10"
        display="grid"
        gridTemplateColumns="1fr min-content min-content"
        // px="2"
      >
        <Button
          aria-label="Add empty tag"
          alignSelf="flex-end"
          colorScheme={color}
          // _focus={{
          //   boxShadow: `0 0 0 2px ${color}.${
          //     this.props.isLightMode ? "800" : "800"
          //   }`,
          // }}
          // mt="2"
          w="min-content"
          // height="full"
          // minH="250px"
          // icon={<FaPlus />}
          onClick={addTag}
        >
          <FaPlus /> Add Tag
        </Button>
        <Button
          disabled={
            // true
            JSON.stringify(initialTags) === JSON.stringify(tags)
          }
          onClick={() => {
            shouldCancel = true;
            setTags(initialTags);
            // this.setState({ tags: this.initialTags });
          }}
        >
          Return to initial
        </Button>
        {/* <Button
            colorScheme={color}
            onClick={() => {
              this.props.saveTags && this.props.saveTags(this.state.tags);
              this.props.closeModal && this.props.closeModal();
            }}
          >
            Save
          </Button> */}
      </ButtonGroup>
      <Grid
        gap="2"
        p="2"
        gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
      >
        {tags.map((val) => (
          <SettingsTag
            // isLightMode={this.props.isLightMode}
            key={val.id}
            tag={val}
            removeTag={removeTag}
            updateTag={updateTag}
            // colorScheme={color}
          />
        ))}
        {/* <Grid
            bg={`${ColorScheme}.${this.props.isLightMode ? 100 : 900}`}
            borderStyle="solid"
            borderWidth="2px"
            borderRadius="md"
            borderColor={`${ColorScheme}.${
              this.props.isLightMode ? "200" : "700"
            }`}
            p="2"
            gridTemplateRows="1fr"
          >
          </Grid> */}
      </Grid>
    </>
  );
}
