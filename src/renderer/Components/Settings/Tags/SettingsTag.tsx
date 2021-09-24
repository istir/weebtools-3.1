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
  const helperFromSite: { id: number; text: string }[] = [];
  props.tag.fromSite?.map((val) => {
    return helperFromSite.push({ id: val.id, text: val.text });
  });

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

      <InputGroup marginBottom="2">
        <InputLeftAddon
          children="Name"
          bg="whiteAlpha.400"
          width="20"
          textAlign="center"
          justifyContent="center"
          fontWeight="semibold"
          borderColor={`${color}.${lightMode ? '200' : '700'}`}
          borderWidth="2px"
          borderRightWidth="0"
          transitionDuration="normal"
          userSelect="none"
        />
        <Input
          type="text"
          placeholder="Name"
          value={props.tag.name ? props.tag.name : ''}
          variant="focusable"
          colorScheme={color}
          bgShades={{ light: 'transparent', dark: 'transparent' }}
          borderShades={{ light: '200', dark: '700' }}
          borderWidth="2px"
          borderLeftWidth="3px"
          borderLeftColor="transparent"
          onChange={(e) => {
            // this.setState({ name: e.target.value as string });
            props.updateTag(props.tag.id, { name: e.target.value });
          }}
        />
      </InputGroup>

      <InputGroup userSelect="none">
        <InputLeftAddon
          children="Folder"
          bg="whiteAlpha.400"
          width="20"
          textAlign="center"
          justifyContent="center"
          fontWeight="semibold"
          borderColor={`${color}.${lightMode ? '200' : '700'}`}
          borderWidth="2px"
          borderRightStyle="none"
          transitionDuration="normal"
        />
        <Input
          type="text"
          placeholder="Folder"
          value={props.tag.folder ? props.tag.folder : ''}
          variant="focusable"
          colorScheme={color}
          bgShades={{ light: 'transparent', dark: 'transparent' }}
          borderShades={{ light: '200', dark: '700' }}
          borderWidth="2px"
          borderLeftWidth="3px"
          borderLeftColor="transparent"
          onChange={(e) => {
            // this.setState({ folder: e.target.value as string });
            props.updateTag(props.tag.id, {
              folder: e.target.value,
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
          {props.tag.fromSite?.map((tag) => (
            <Flex key={tag.id} mt="2" mx="2">
              <InputGroup
                size="md"
                transitionDuration="normal"
                borderRadius="md"
                border="2px solid #000"
                _focusWithin={{
                  border: '2px solid transparent',
                  boxShadow: `inset 0 0 0 3px var(--chakra-colors-${color}-${
                    lightMode ? '700' : '200'
                  })`,
                }}
              >
                <Input
                  type="text"
                  placeholder="Name"
                  variant="noBorders"
                  value={tag.text}
                  // variant="focusable"
                  // colorScheme={color}
                  bg="whiteAlpha.400"
                  // // bgShades={{ light: '300', dark: '500' }}
                  // borderShades={{ light: '200', dark: '700' }}
                  // borderWidth="2px"
                  // borderLeftWidth="3px"
                  // borderLeftColor="transparent"

                  onChange={(e) => {
                    const { fromSite } = props.tag;
                    const index = fromSite
                      .map((prevFromSite) => prevFromSite.id)
                      .indexOf(tag.id);
                    fromSite[index] = { id: tag.id, text: e.target.value };
                    props.updateTag(props.tag.id, {
                      fromSite,
                    });
                  }}
                  pr="4.5rem"
                />

                <InputRightAddon
                  padding="0"
                  // width="4.5rem"
                  border="transparent"
                  // borderLeftWidth="0"
                  overflow="hidden"
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
                      border="0px solid transparent !important"
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
            const helperArray = props.tag.fromSite
              ? props.tag.fromSite.slice(0)
              : [];
            if (
              (helperArray[helperArray.length - 1] &&
                helperArray[helperArray.length - 1].text !== '') ||
              !helperArray[helperArray.length - 1]
            ) {
              helperArray.push({ id: helperArray.length, text: '' });
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
