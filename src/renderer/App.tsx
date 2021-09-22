import * as React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from './theme';
import colorSchemeContext, { Color } from './libs/ColorSchemeContext';
import NavBar from './Components/NavBar';
import { Post, Tag } from './types';
import IsLightMode from './libs/IsLightMode';
import ThumbAndTagContainer from './Components/ThumbAndTagContainer';
// import NavBar from './NavBar';
// import colorSchemeContext from 'src/libs/ColorSchemeContext';
// import ThumbAndTagContainer from "./ThumbAndTagContainer";
// import SettingsWrapper from "./Settings/SettingsWrapper";
// import { Post, Tag } from "../types";
// import { FaCog } from "react-icons/fa";
// import NavBar from "./NavBar";
// import ColorScheme from "../libs/ColorScheme";
// import "focus-visible/dist/focus-visible";
interface MainContainerProps {}

// const colors = ["red", "yellow"];

// const colorSchemeContext = React.createContext({
//   lightMode: false,
//   color: "red",
// });
export const MainContainer: React.FC<MainContainerProps> = () => {
  let localStorageItem = localStorage.getItem('colorScheme');
  if (!localStorageItem) localStorageItem = 'red';
  console.log(theme.shadows.outline);
  const [colorScheme, setColorScheme] =
    React.useState<string>(localStorageItem);
  function changeColorScheme(colorScheme: Color) {
    setColorScheme(colorScheme);
    console.log(colorScheme);
    localStorage.setItem('colorScheme', colorScheme);
  }

  const [tags, setTags] = React.useState<Tag[]>([
    {
      id: 1,
      name: 'Tag1',
      folder: 'A',
      fromSite: [
        { id: 0, text: 't' },
        { id: 1, text: 't1' },
        { id: 2, text: 't2' },
      ],
    },
    {
      id: 2,
      name: 'Tag2',
      folder: 'A',
      fromSite: [
        { id: 0, text: 't' },
        { id: 1, text: 't1' },
        { id: 2, text: 't2' },
      ],
    },
    {
      id: 3,
      name: 'Tag3',
      folder: 'A',
      fromSite: [
        { id: 0, text: 't' },
        { id: 1, text: 't1' },
        { id: 2, text: 't2' },
      ],
    },
    {
      id: 4,
      name: 'Tag4',
      folder: 'A',
      fromSite: [
        { id: 0, text: 't' },
        { id: 1, text: 't1' },
        { id: 2, text: 't2' },
      ],
    },
    {
      id: 5,
      name: 'Tag5',
      folder: 'A',
      fromSite: [
        { id: 0, text: 't' },
        { id: 1, text: 't1' },
        { id: 2, text: 't2' },
      ],
    },
    {
      id: 6,
      name: 'Tag6',
      folder: 'A',
      fromSite: [
        { id: 0, text: 't' },
        { id: 1, text: 't1' },
        { id: 2, text: 't2' },
      ],
    },
    {
      id: 7,
      name: 'Tag7',
      folder: 'A',
      fromSite: [
        { id: 0, text: 't' },
        { id: 1, text: 't1' },
        { id: 2, text: 't2' },
      ],
    },
  ]);

  const [posts, setPosts] = React.useState<Post[]>([
    {
      id: 0,
      folder: 'Folder',
      name: 'Post Name',

      tagIds: [0, 1, 2],
    },
    {
      id: 1,
      folder: 'Folder',
      name: 'Post Name',

      tagIds: [1, 2, 3, 7],
    },
    {
      id: 2,
      folder: 'Folder',
      name: 'Post Name',

      tagIds: [1, 3, 2, 7],
    },
    {
      id: 3,
      folder: 'Folder',
      name: 'Post Name',

      tagIds: [7],
    },
    {
      id: 4,
      folder: 'Folder',
      name: 'Post Name',

      tagIds: [7],
    },
  ]);

  // function saveTags(tagsToSave: Tag[]) {
  //   setTags(tagsToSave);
  //   // tags = tagsToSave;
  // }
  return (
    <ChakraProvider theme={theme}>
      <colorSchemeContext.Provider
        value={{
          IsLightMode,
          color: colorScheme,
          setColor: changeColorScheme,
        }}
      >
        <Box
          textAlign="center"
          fontSize="xl"
          background="transparent"
          h="100vh"
        >
          {/* <NavBar /> */}
          <NavBar
            tags={tags}
            saveTags={setTags}
            // colorScheme={colorScheme}
            // setColorScheme={changeColorScheme}
          />
          <ThumbAndTagContainer
            posts={posts}
            tags={tags}
            // colorScheme={colorScheme}
            // setColorScheme={changeColorScheme}
          />
          {/* <IconButton icon={<FaCog />} aria-label="Settings" pos="fixed" /> */}
          {/* <SettingsWrapper tags={tags} saveTags={setTags.bind(this)} /> */}
        </Box>
      </colorSchemeContext.Provider>
    </ChakraProvider>
  );
};
export default MainContainer;
// export const useColorSchemeContext = () => useContext(colorSchemeContext);
