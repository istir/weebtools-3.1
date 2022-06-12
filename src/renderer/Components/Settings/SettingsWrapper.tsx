import React, { useContext } from 'react';
import {
  Box,
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Select,
  useDisclosure,
} from '@chakra-ui/react';
// import useLightModeCheck from '../../libs/hooks/useLightModeCheck';

import { FaCog } from 'react-icons/fa';
import useLightModeCheck from 'renderer/libs/hooks/useLightModeCheck';
import useColorSchemeContext, { Color } from '../../libs/useColorSchemeContext';
import SettingsTags from './Tags/SettingsTags';
import { Tag } from 'renderer/types';
// import { Tag } from '../../types';

interface SettingsWrapperProps {
  tags: (Tag & { deleted?: boolean })[];
  saveTags?: (tagsToSave: Tag[]) => void;

  // closeModal: () => void;
}

export const SettingsWrapper: React.FC<SettingsWrapperProps> = ({
  tags,
  saveTags,
  // closeModal,
}) => {
  const { color, setColor } = useContext(useColorSchemeContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  function saveAndClose() {
    const tagsWithoutDeleted = tags.filter((tag) => !tag.deleted);
    saveTags?.(tagsWithoutDeleted);
    onClose();
  }
  return (
    <Box>
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

      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent borderRadius="none">
          <ModalCloseButton />
          <ModalBody marginTop="10">
            <Box>
              <Flex>
                <Select
                  placeholder={color}
                  value={color}
                  variant="focusable"
                  // borderShades={{ light: '200', dark: '700' }}
                  lightborder="200"
                  darkborder="700"
                  lightbg="100"
                  darkbg="900"
                  colorScheme={color}
                  // bgShades={{ light: '100', dark: '900' }}
                  onChange={(e) => {
                    if (e.target.value) {
                      setColor(e.target.value as Color);
                    }
                  }}
                >
                  <option value="gray">Gray</option>
                  <option value="red">Red</option>
                  <option value="orange">Orange</option>
                  <option value="yellow">Yellow</option>
                  <option value="green">Green</option>
                  <option value="teal">Teal</option>
                  <option value="blue">Blue</option>
                  <option value="cyan">Cyan</option>
                  <option value="purple">Purple</option>
                  <option value="pink">Pink</option>
                </Select>
                {/* <Box w="10" h="10" bg={`${color}.200`} /> */}
              </Flex>
              <SettingsTags
                // isLightMode={useLightModeCheck()}
                tags={tags}
                saveTags={saveTags}
                // closeModal={onC}

                // color
                // scrollToElement={scrollToElement}
              />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
export default SettingsWrapper;
