/* eslint-disable react/no-children-prop */
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from '@chakra-ui/input';
import { Grid, Text } from '@chakra-ui/layout';
import { Flex, IconButton } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { FaMinus, FaPlus, FaTimes } from 'react-icons/fa';
import useColorSchemeContext from '../../../libs/useColorSchemeContext';
import useLightModeCheck from '../../../libs/hooks/useLightModeCheck';
import { FromSite, Tag } from '../../../types';
// import SettingsInput from "./SettingsInput";
interface SettingsTagProps {
  tag: Tag;
  removeTag: (id: number) => void;
  updateTag: (
    id: number,
    {
      name,
      folder,
      fromSite,
    }: {
      name?: string;
      folder?: string;
      fromSite?: FromSite;
    }
  ) => void;
}
// interface SettingsTagState {
//   name: string;
//   key?: string;
//   folder: string;
//   fromSite: fromSite;
// }
// //TODO: everything that updates state should instead update parent prop

export default function SettingsTags(props: SettingsTagProps) {
  const { color } = useContext(useColorSchemeContext);
  const lightMode = useLightModeCheck();

  // const helperFromSite: { id: number; text: string }[] = [];
  // props.tag.fromSite?.map((val) => {
  //   // helperFromSite[val.id] = { id: val.id, text: val.text };
  //   return helperFromSite.push({ id: val.id, text: val.text });
  // });
  // TODO: use memo
  const [tag, setTag] = React.useState<Tag>(props.tag);
  // const [fromSite, setFromSite] = React.useState<
  //   { id: number; text: string }[]
  // >(props.tag.fromSite);

  React.useEffect(() => {
    // setFromSite(props.tag.fromSite);
    setTag(props.tag);
    // console.log(fromSite);
    return () => {};
  }, [props.tag]);

  // React.useEffect(() => {
  //   return () => {
  //     console.log(props.tag.id);
  //     props.updateTag(props.tag.id, {
  //       fromSite,
  //     });
  //   };
  // }, []);

  function removeFromSite(fromSiteIndex: number) {
    const index = props.tag.fromSite
      .map((prevPost) => prevPost.id)
      .indexOf(fromSiteIndex);
    const helperArray = props.tag.fromSite.slice(0);
    helperArray.splice(index, 1);
    // helperArray.inse
    props.updateTag(props.tag.id, { fromSite: helperArray });
    // return { fromSite: helperArray };
  }

  return (
    <Grid
      bg={`${color}.${lightMode ? 100 : 900}`}
      borderStyle="solid"
      borderWidth="2px"
      borderRadius="md"
      borderColor={`${color}.${lightMode ? '200' : '700'}`}
      p="2"
      gridTemplateRows="min-content min-content min-content min-content"
      onBlur={() => {
        // console.log(props.tag.id);
        // props.tag.fromSite
        props.updateTag(props.tag.id, {
          // tag.fromSite,
          folder: tag.folder,
          name: tag.name,
          fromSite: tag.fromSite,
        });
      }}
    >
      <Grid
        ml="40px"
        templateColumns="1fr min-content"
        alignItems="center"
        mb="2"
      >
        <Text
          fontSize="lg"
          fontWeight="semibold"
          // mb="2"
          textAlign="center"
          opacity={props.tag.name.length > 0 ? 1 : 0}
        >
          {props.tag.name.length > 0 ? props.tag.name : '-'}
        </Text>
        <IconButton
          justifySelf="end"
          colorScheme={color}
          // role="group"
          aria-label="Delete tag"
          transitionDuration="normal"
          icon={<FaTimes />}
          onClick={() => {
            props.removeTag(props.tag.id);
          }}
        />
      </Grid>

      <InputGroup
        marginBottom="2"
        transitionDuration="normal"
        borderRadius="md"
        // border="2px solid #"
        overflow="hidden"
        boxShadow={`0 0 0 2px var(--chakra-colors-${color}-${
          lightMode ? '200' : '800'
        })`}
        _focusWithin={{
          // border: `2px solid transparent`,
          boxShadow: `0 0 0 3px var(--chakra-colors-${color}-${
            lightMode ? '700' : '200'
          })`,
        }}
      >
        <InputLeftAddon
          children="Name"
          bg="whiteAlpha.400"
          width="20"
          textAlign="center"
          justifyContent="center"
          fontWeight="semibold"
          // borderColor={`${color}.${lightMode ? '200' : '700'}`}
          borderWidth="0px"
          // borderRightWidth="0"
          transitionDuration="normal"
          userSelect="none"
        />
        <Input
          type="text"
          placeholder="Name"
          // value={props.tag.name ? props.tag.name : ''}
          value={tag.name ? tag.name : ''}
          variant="noBorders"
          colorScheme={color}
          bg="transparent"
          // lightborder="200"
          // darkborder="700"
          // lightbg="transparent"
          // darkbg="transparent"
          // borderWidth="2px"
          // borderLeftWidth="3px"
          borderLeftColor="transparent"
          // onBlur={(e) => {
          //   // props.updateTag(props.tag.id, { name: e.target.value });
          // }}
          onChange={(e) => {
            // this.setState({ name: e.target.value as string });
            // setTag((prevTag) => {
            //   const helperArray = prevTag;
            //   helperArray[tag.id] = {
            //     id: tag.id,
            //     text: e.target.value,
            //   };
            //   return { ...prevTag, fromSite: helperArray };
            // });
            setTag((prevTag) => {
              return { ...prevTag, name: e.target.value as string };
            });
            // props.updateTag(props.tag.id, { name: e.target.value });
            // console.log(e.target.value);
          }}
        />
      </InputGroup>

      <InputGroup
        userSelect="none"
        transitionDuration="normal"
        borderRadius="md"
        // border="2px solid #"
        overflow="hidden"
        boxShadow={`0 0 0 2px var(--chakra-colors-${color}-${
          lightMode ? '200' : '800'
        })`}
        _focusWithin={{
          // border: `2px solid transparent`,
          boxShadow: `0 0 0 3px var(--chakra-colors-${color}-${
            lightMode ? '700' : '200'
          })`,
        }}
      >
        <InputLeftAddon
          children="Folder"
          bg="whiteAlpha.400"
          width="20"
          textAlign="center"
          justifyContent="center"
          fontWeight="semibold"
          // borderColor={`${color}.${lightMode ? '200' : '700'}`}
          borderWidth="0px"
          borderRightStyle="none"
          transitionDuration="normal"
        />
        <Input
          type="text"
          placeholder="Folder"
          value={tag.folder ? tag.folder : ''}
          variant="noBorders"
          colorScheme={color}
          bg="transparent"
          onChange={(e) => {
            // this.setState({ folder: e.target.value as string });
            // props.updateTag(props.tag.id, {
            //   folder: e.target.value,
            // });
            setTag((prevTag) => {
              return { ...prevTag, folder: e.target.value as string };
            });
          }}
        />
      </InputGroup>
      {/* <SettingsInput fromSite={ }/> */}
      <InputGroup flexDirection="column" display="flex">
        <Text fontSize="lg" fontWeight="semibold" ml="2">
          From Site
        </Text>
        <Flex flexDirection="column">
          {tag.fromSite.map((tag) => (
            <Flex key={tag.id} mt="2" mx="2">
              <InputGroup
                size="md"
                transitionDuration="normal"
                borderRadius="md"
                // border="2px solid #"
                overflow="hidden"
                // border={`2px solid var(--chakra-colors-${color}-${
                //   lightMode ? '200' : '700'
                // })`}
                boxShadow={`0 0 0 2px var(--chakra-colors-${color}-${
                  lightMode ? '200' : '800'
                })`}
                _focusWithin={{
                  // border: `2px solid transparent`,
                  boxShadow: `0 0 0 3px var(--chakra-colors-${color}-${
                    lightMode ? '700' : '200'
                  })`,
                }}
              >
                <Input
                  type="text"
                  placeholder="Name"
                  variant="noBorders"
                  value={tag.text}
                  // id={tag.id.toString()}

                  bg="whiteAlpha.400"
                  borderRadius="0"
                  // onBlur={(e) => {
                  //   console.log(props.tag.id);
                  //   props.updateTag(props.tag.id, {
                  //     fromSite,
                  //   });
                  // }}
                  onChange={(e) => {
                    // console.log(e.target.id);
                    // const { fromSite } = props.tag;
                    // // const index = fromSite
                    // //   .map((prevFromSite) => prevFromSite.id)
                    // //   .indexOf(tag.id);
                    // // fromSite[index] = { id: tag.id, text: e.target.value };
                    // // props.updateTag(props.tag.id, {
                    // //   fromSite,
                    // // });
                    // fromSite[tag.id] = { id: tag.id, text: e.target.value };
                    // props.updateTag(props.tag.id, {
                    //   fromSite,
                    // });
                    setTag((prevTag) => {
                      const helperArray = prevTag.fromSite.slice(0);
                      helperArray[tag.id] = {
                        id: tag.id,
                        text: e.target.value,
                      };
                      return { ...prevTag, fromSite: helperArray };
                    });
                    // console.log(tag.id, index);
                  }}
                  pr="4.5rem"
                />

                <InputRightAddon
                  padding="0"
                  // width="4.5rem"
                  border="transparent"
                  // borderLeftWidth="0"
                  borderRadius="0"
                  // overflow="hidden"
                  bg={`var(--chakra-colors-${color}-${
                    lightMode ? '700' : '200'
                  })`}
                  children={
                    <IconButton
                      aria-label="Remove tag"
                      // h="1.75rem"
                      // size="sm"
                      // mx="2"
                      colorScheme={color}
                      icon={<FaMinus />}
                      w="100%"
                      borderRadius="0"
                      // border={`2px solid var(--chakra-colors-${color}-${
                      //   lightMode ? '700' : '200'
                      // })`}
                      // borderLeftRadius="0"
                      // borderColor={`${color}.${lightMode ? '200' : '700'}`}
                      // borderWidth="2px"
                      // borderStyle="solid"
                      // borderLeftWidth="0"
                      onClick={() => {
                        removeFromSite(tag.id);
                      }}
                    />
                  }
                />
              </InputGroup>
            </Flex>
          ))}
        </Flex>
        <IconButton
          aria-label="Add empty tag"
          alignSelf="flex-end"
          colorScheme={color}
          mt="2"
          mx="2"
          icon={<FaPlus />}
          onClick={() => {
            // this.setState((prevState) => {
            // prevTags[prevTags.length - 1].id + 1,
            const helperArray = props.tag.fromSite
              ? props.tag.fromSite.slice(0)
              : [];
            if (
              (helperArray[helperArray.length - 1] &&
                helperArray[helperArray.length - 1].text !== '') ||
              !helperArray[helperArray.length - 1]
            ) {
              helperArray.push({
                id: helperArray[helperArray.length - 1].id + 1,
                text: '',
              });
              // return { fromSite: helperArray };
              props.updateTag(props.tag.id, {
                fromSite: helperArray,
              });
            }
            // return { fromSite: prevState.fromSite };
            // props.updateTag(props.tag.id, { fromSite: e.target.value });
            // });
          }}
        />
      </InputGroup>
    </Grid>
  );
}
