import React, { useContext } from 'react';
import IsLightMode from './IsLightMode';

export type Color =
  | 'gray'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'blue'
  | 'cyan'
  | 'purple'
  | 'pink';
export type ColorScheme = {
  IsLightMode: () => boolean;
  color: Color;
  setColor: (color: Color) => void;
};

let currentColor = 'red';
function setColor(color: Color): void {
  currentColor = color;
}

const colorSchemeContext = React.createContext({
  IsLightMode,
  color: currentColor,
  setColor: setColor.bind(this),
});

export default colorSchemeContext;
// export const useColorSchemeContext = () => useContext(colorSchemeContext);
