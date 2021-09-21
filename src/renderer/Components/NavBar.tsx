import React, { useContext, useRef } from 'react';
import {
  Button,
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import colorSchemeContext, { Color } from '../libs/ColorSchemeContext';
// import { FaCog } from "react-icons/fa";
// import { ColorModeSwitcher } from "../ColorModeSwitcher";
// import IsLightMode from "../libs/IsLightMode";
// import SettingsWrapper from "./Settings/SettingsWrapper";
// import { Tag } from "../types";

interface NavBarProps {
  // tags: Tag[];
  // saveTags?: (tagsToSave: Tag[]) => void;
  // colorScheme: string;
  // setColorScheme: (colorScheme: string) => void;
}

export const NavBar: React.FC<NavBarProps> = (
  {
    // tags,
    // saveTags,
    // colorScheme,
    // setColorScheme,
  }
) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // colorSchemeContext
  const { lightMode, color, setColor } = useContext(colorSchemeContext);
  return (
    <>
      <Button
        colorScheme={color}
        onClick={() => {
          const colors: Color[] = [
            'gray',
            'red',
            'orange',
            'yellow',
            'green',
            'teal',
            'blue',
            'cyan',
            'purple',
            'pink',
          ];
          setColor(colors[Math.floor(Math.random() * colors.length)]);
        }}
      >
        {color}
      </Button>
      {/* <Flex
        pos="sticky"
        top="0"
        bg={IsLightMode() ? `${colorScheme}.200` : `${colorScheme}.800`}
        zIndex="20"
        justifyContent="flex-end"
        alignItems="center"
        //   height="12"
        padding="2"
      >
        <IconButton
          bg="transparent"
          color={IsLightMode() ? `black` : `white`}
          _hover={{
            background: `${
              IsLightMode() ? `${colorScheme}.300` : `${colorScheme}.700`
            }`,
          }}
          colorScheme={colorScheme}
          icon={<FaCog />}
          aria-label="Settings"
          onClick={onOpen}
        />

        <ColorModeSwitcher
          _hover={{
            background: `${
              IsLightMode() ? `${colorScheme}.300` : `${colorScheme}.700`
            }`,
          }}
          colorScheme={colorScheme}
          justifySelf="flex-end"
        />
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent borderRadius="none">
          <ModalCloseButton />
          <ModalBody marginTop="10">
            <SettingsWrapper
              tags={tags}
              saveTags={saveTags}
              closeModal={onClose.bind(this)}
              colorScheme={colorScheme}
              setColorScheme={setColorScheme}
            />
          </ModalBody>


        </ModalContent>
      </Modal> */}
    </>
  );
};
export default NavBar;
