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
import { FaCog } from 'react-icons/fa';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
// import IsLightMode from '../libs/IsLightMode';
// import SettingsWrapper from './Settings/SettingsWrapper';
import { Tag } from '../types';
import SettingsWrapper from './Settings/SettingsWrapper';

interface NavBarProps {
  tags: Tag[];
  saveTags?: (tagsToSave: Tag[]) => void;
  // colorScheme: string;
  // setColorScheme: (colorScheme: string) => void;
}

export const NavBar: React.FC<NavBarProps> = ({
  tags,
  saveTags,
  // colorScheme,
  // setColorScheme,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // colorSchemeContext
  const { IsLightMode, color } = useContext(colorSchemeContext);
  return (
    // <>
    //   <Button
    //     colorScheme={color}
    //     onClick={() => {
    //       const colors: Color[] = [
    //         'gray',
    //         'red',
    //         'orange',
    //         'yellow',
    //         'green',
    //         'teal',
    //         'blue',
    //         'cyan',
    //         'purple',
    //         'pink',
    //       ];
    //       setColor(colors[Math.floor(Math.random() * colors.length)]);
    //     }}
    //   >
    //     {color}
    //   </Button>
    <>
      <Flex
        pos="sticky"
        top="0"
        bg={IsLightMode() ? `${color}.200` : `${color}.800`}
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
            background: `${IsLightMode() ? `${color}.300` : `${color}.700`}`,
          }}
          colorScheme={color}
          icon={<FaCog />}
          aria-label="Settings"
          onClick={onOpen}
        />
        <ColorModeSwitcher
          _hover={{
            background: `${IsLightMode() ? `${color}.300` : `${color}.700`}`,
          }}
          colorScheme={color}
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
              closeModal={onClose}
              // colorScheme={color}
              // setColorScheme={setColor}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default NavBar;
