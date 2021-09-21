import React, { useContext } from 'react';

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
  lightMode: boolean;
  color: Color;
  setColor: (color: Color) => void;
};

let currentColor = 'red';
function setColor(color: Color): void {
  currentColor = color;
}

const colorSchemeContext = React.createContext({
  lightMode: false,
  color: currentColor,
  setColor: setColor.bind(this),
});

export default colorSchemeContext;
// export const useColorSchemeContext = () => useContext(colorSchemeContext);
