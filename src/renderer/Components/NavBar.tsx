import React, { useContext } from 'react';
import {
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { FaCog } from 'react-icons/fa';
import useLightModeCheck from '../libs/hooks/useLightModeCheck';
import useColorSchemeContext from '../libs/useColorSchemeContext';
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
  const { color } = useContext(useColorSchemeContext);
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
        bg={useLightModeCheck() ? `${color}.200` : `${color}.800`}
        zIndex="20"
        justifyContent="flex-end"
        alignItems="center"
        //   height="12"
        padding="2"
      >
        <IconButton
          bg="transparent"
          color={useLightModeCheck() ? `black` : `white`}
          _hover={{
            background: `${
              useLightModeCheck() ? `${color}.300` : `${color}.700`
            }`,
          }}
          colorScheme={color}
          icon={<FaCog />}
          aria-label="Settings"
          onClick={onOpen}
        />
        <ColorModeSwitcher
          _hover={{
            background: `${
              useLightModeCheck() ? `${color}.300` : `${color}.700`
            }`,
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
              // closeModal={onClose}
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
