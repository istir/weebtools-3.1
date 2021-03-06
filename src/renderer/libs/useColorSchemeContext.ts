import React from 'react';

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
  // IsLightMode: () => boolean;
  color: Color;
  setColor: (color: Color) => void;
};

let currentColor = 'red';
function setColor(color: Color): void {
  currentColor = color;
}

const useColorSchemeContext = React.createContext({
  // IsLightMode,
  color: currentColor,
  setColor: setColor.bind(this),
});

export default useColorSchemeContext;
// export const useColorSchemeContext = () => useContext(colorSchemeContext);
