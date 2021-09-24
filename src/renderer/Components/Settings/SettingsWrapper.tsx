import React, { useContext } from 'react';
import { Box, Flex, Select } from '@chakra-ui/react';
import useLightModeCheck from '../../libs/hooks/useLightModeCheck';
import useColorSchemeContext, { Color } from '../../libs/useColorSchemeContext';
import SettingsTags from './Tags/SettingsTags';
import { Tag } from '../../types';

interface SettingsWrapperProps {
  tags: Tag[];
  saveTags?: (tagsToSave: Tag[]) => void;
  // closeModal: () => void;
}

export const SettingsWrapper: React.FC<SettingsWrapperProps> = ({
  tags,
  saveTags,
  // closeModal,
}) => {
  const { color, setColor } = useContext(useColorSchemeContext);

  return (
    <Box>
      <Flex>
        <Select
          placeholder={color}
          value={color}
          variant="focusable"
          borderShades={{ light: '200', dark: '700' }}
          colorScheme={color}
          bgShades={{ light: '100', dark: '900' }}
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
        // closeModal={closeModal}
        // color
        // scrollToElement={scrollToElement}
      />
    </Box>
  );
};
export default SettingsWrapper;
