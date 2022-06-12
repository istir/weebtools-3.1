import { ButtonGroup, Button } from '@chakra-ui/button';
import { Grid } from '@chakra-ui/layout';

import React, { useContext, useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import useLightModeCheck from '../../../libs/hooks/useLightModeCheck';
import useColorSchemeContext from '../../../libs/useColorSchemeContext';
import { Tag } from '../../../types';
import SettingsTag from './SettingsTag';
// import SettingsTag from './SettingsTag';

interface SettingsTagsProps {
  tags: Tag[];
  saveTags?: (tagsToSave: Tag[]) => void;
  // closeModal?: () => void;
}

export default function SettingsTags(props: SettingsTagsProps) {
  let shouldCancel = false;
  // const isChanged = false;
  console.log('props.tags', props.tags);
  const { color } = useContext(useColorSchemeContext);
  const helperTags: Tag[] = [];
  // eslint-disable-next-line array-callback-return
  props.tags.map((val) => {
    helperTags[val.id] = val;
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initialTags = React.useMemo(() => helperTags, []);
  // const initialTags = Object.

  const [tags, setTags] = useState<(Tag & { deleted?: boolean })[]>(props.tags);

  // useEffect(() => {
  //   const tagsWithoutDeleted = tags.filter((tag) => !tag.deleted);
  //   return () => {
  //     props.saveTags &&
  //       (shouldCancel
  //         ? props.saveTags(initialTags)
  //         : props.saveTags(tagsWithoutDeleted));
  //   };
  // }, [initialTags, props, shouldCancel, tags]);
  React.useEffect(() => {
    // effect - ComponentDidUpdate
    return () => {
      console.log('UNMOUNT');
      console.log('tags unmount', tags);
      const tagsWithoutDeleted = tags.filter(
        (tag) => !tag.deleted || tag.deleted !== true
      );
      console.log('tags without deleted', tagsWithoutDeleted);
      // props.saveTags?.(initialTags);

      props.saveTags &&
        (shouldCancel
          ? props.saveTags(initialTags)
          : props.saveTags(tagsWithoutDeleted));
    };
  }, [tags, shouldCancel]);
  function addTag() {
    console.log('addTag', tags);
    setTags([
      ...tags,
      {
        id: tags.length + 1 || Date.now(),
        name: '',
        folder: '',
        fromSite: [],
      },
    ]);
  }

  function removeTag(id: number) {
    console.log('REMOVE');
    setTags((prevTags) => {
      const index = prevTags.map((prevPost) => prevPost.id).indexOf(id);
      const helperArray = prevTags.slice(0);
      helperArray[index].deleted = true;
      // prevTags[index].deleted = true;
      return helperArray;
    });
  }

  function updateTag(
    id: number,
    {
      name,
      folder,
      fromSite,
    }: {
      name?: string;
      folder?: string;
      fromSite?: string[];
    }
  ) {
    console.log('updateTag', id);
    console.log('FSITE', fromSite);
    // console.log();
    const currentTag = tags.filter((val) => val.id === id)[0];
    console.log('currentTag', currentTag);
    // const tagsWithoutCurrent = tags.filter((val) => val.id !== id);
    const allTags = tags.slice(0);
    const index = allTags.map((val) => val.id).indexOf(id);
    currentTag.folder = folder || currentTag.folder;
    currentTag.fromSite = fromSite || currentTag.fromSite;
    currentTag.name = name || currentTag.name;
    allTags[index] = currentTag;
    console.log('allTags', allTags);
    setTags(allTags);
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
            // false
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

// import { ButtonGroup, Button } from '@chakra-ui/button';
// import { Grid } from '@chakra-ui/layout';
// import { Tag } from '@prisma/client';

// import React, { useContext, useEffect, useState } from 'react';
// import { FaPlus } from 'react-icons/fa';
// import useLightModeCheck from '../../../libs/hooks/useLightModeCheck';
// import useColorSchemeContext from '../../../libs/useColorSchemeContext';
// // import { FromSite, Tag } from '../../../types';
// import SettingsTag from './SettingsTag';
// // import SettingsTag from './SettingsTag';

// interface SettingsTagsProps {
//   tags: Tag[];
//   saveTags?: (tagsToSave: Tag[]) => void;
//   // closeModal?: () => void;
// }

// export default function SettingsTags(props: SettingsTagsProps) {
//   let shouldCancel = false;
//   // const isChanged = false;
//   console.log('props.tags', props.tags);
//   const { color } = useContext(useColorSchemeContext);
//   const helperTags: Tag[] = [];
//   // eslint-disable-next-line array-callback-return
//   props.tags.map((val) => {
//     helperTags[val.id] = val;
//   });

//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   const initialTags = React.useMemo(() => helperTags, []);
//   // const initialTags = Object.

//   const [tags, setTags] = useState<Tag[]>(props.tags);

//   useEffect(() => {
//     return () => {
//       props.saveTags &&
//         (shouldCancel ? props.saveTags(initialTags) : props.saveTags(tags));
//     };
//   }, [initialTags, props, shouldCancel, tags]);

//   function addTag() {
//     console.log('addTag', tags);
//     // setTags([
//     //   ...tags,
//     //   { id: tags.length + 1, name: '', folder: '', fromSite: '' },
//     // ]);

//     setTags((prevTag) => {
//       prevTag.push({
//         id: prevTag.length + 1,
//         name: '',
//         folder: '',
//         fromSite: '',
//       });
//       return prevTag;
//     });
//   }

//   function removeTag(id: number) {
//     setTags((prevTags) => {
//       const index = prevTags.map((prevPost) => prevPost.id).indexOf(id);
//       const helperArray = prevTags.slice(0);
//       helperArray.splice(index, 1);
//       // this.props.saveTags && this.props.saveTags(helperArray);
//       return helperArray;
//     });
//   }

//   function updateTag(
//     id: number,
//     {
//       name,
//       folder,
//       fromSite,
//     }: { name?: string; folder?: string; fromSite?: string }
//   ) {
//     console.log('updateTag');
//     // console.log();
//     const currentTag = tags.filter((val) => val.id === id)[0];
//     // const tagsWithoutCurrent = tags.filter((val) => val.id !== id);
//     const allTags = tags.slice(0);
//     const index = allTags.map((val) => val.id).indexOf(id);
//     currentTag.folder = folder || currentTag.folder;
//     currentTag.fromSite = fromSite || currentTag.fromSite;
//     currentTag.name = name || currentTag.name;
//     allTags[index] = currentTag;
//     setTags(allTags);
//   }

//   return (
//     <>
//       <ButtonGroup
//         // width="calc(100% - var(--chakra-space-6))"
//         width="full"
//         // ml="10"
//         // transform="translateX(var(--chakra-space-6))"
//         // width="calc(100% - var(--chakra-space-6) * 2)"
//         // right="0"
//         borderRadius="md"
//         mt="2"
//         px="6"
//         py="2"
//         bg={useLightModeCheck() ? `${color}.300` : `${color}.800`}
//         // ml="-6"
//         pos="sticky"
//         top="-5px"
//         zIndex="10"
//         display="grid"
//         gridTemplateColumns="1fr min-content min-content"
//         // px="2"
//       >
//         <Button
//           aria-label="Add empty tag"
//           alignSelf="flex-end"
//           colorScheme={color}
//           // _focus={{
//           //   boxShadow: `0 0 0 2px ${color}.${
//           //     this.props.isLightMode ? "800" : "800"
//           //   }`,
//           // }}
//           // mt="2"
//           w="min-content"
//           // height="full"
//           // minH="250px"
//           // icon={<FaPlus />}
//           onClick={addTag}
//         >
//           <FaPlus /> Add Tag
//         </Button>
//         <Button
//           disabled={
//             // true
//             // false
//             JSON.stringify(initialTags) === JSON.stringify(tags)
//           }
//           onClick={() => {
//             shouldCancel = true;
//             setTags(initialTags);
//             // this.setState({ tags: this.initialTags });
//           }}
//         >
//           Return to initial
//         </Button>
//         {/* <Button
//             colorScheme={color}
//             onClick={() => {
//               this.props.saveTags && this.props.saveTags(this.state.tags);
//               this.props.closeModal && this.props.closeModal();
//             }}
//           >
//             Save
//           </Button> */}
//       </ButtonGroup>
//       <Grid
//         gap="2"
//         p="2"
//         gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
//       >
//         {tags.map((val) => (
//           <SettingsTag
//             // isLightMode={this.props.isLightMode}
//             key={val.id}
//             tag={val}
//             removeTag={removeTag}
//             updateTag={updateTag}
//             // colorScheme={color}
//           />
//         ))}
//         {/* <Grid
//             bg={`${ColorScheme}.${this.props.isLightMode ? 100 : 900}`}
//             borderStyle="solid"
//             borderWidth="2px"
//             borderRadius="md"
//             borderColor={`${ColorScheme}.${
//               this.props.isLightMode ? "200" : "700"
//             }`}
//             p="2"
//             gridTemplateRows="1fr"
//           >
//           </Grid> */}
//       </Grid>
//     </>
//   );
// }
