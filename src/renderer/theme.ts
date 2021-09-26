import { Colors, ThemeConfig, extendTheme } from '@chakra-ui/react';
import { Styles, mode } from '@chakra-ui/theme-tools';
// import isLight from "./libs/isLightMode";
// const customTheme:Theme {
//   ...
// }

// const components ={
//   NavBar: {

//   }
// }
const colors: Colors = {
  gray: {
    '50': '#F2F2F2',
    '100': '#DBDBDB',
    '200': '#C4C4C4',
    '300': '#ADADAD',
    '400': '#969696',
    '500': '#808080',
    '600': '#666666',
    '700': '#4D4D4D',
    '800': '#333333',
    '900': '#1A1A1A',
  },
};

const shadows = {
  // outline: "0 0 0 2px " + mode("red.500", "gray.900"),
};

const styles: Styles = {
  global: () => ({
    'html, body': {
      // color: isLight()?"gray.":"white",
      // lineHeight: "tall",
      // backgroundColor: mode('gray.50', 'gray.900'),
    },

    // a: {
    //   color: "teal.500",
    // },
  }),
};
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};
const components = {
  Button: {
    baseStyle: (props: { colorScheme: string }) => ({
      _focus: {
        boxShadow: `0 0 0 3px var(--chakra-colors-${props.colorScheme}-${mode(
          '700',
          '200'
        )(props)})`,
      },
    }),
  },
  Input: {
    variants: {
      focusable: (props: {
        colorScheme: string;
        lightborder?: string;
        darkborder?: string;
        lightbg?: string;
        darkbg?: string;
      }) => ({
        field: {
          backgroundColor:
            props.lightbg &&
            props.darkbg &&
            `var(--chakra-colors-${props.colorScheme}-${mode(
              props.lightbg,
              props.darkbg
            )(props)})`,
          border:
            props.lightborder &&
            props.darkborder &&
            `2px solid var(--chakra-colors-${props.colorScheme}-${mode(
              props.lightborder,
              props.darkborder
            )(props)}) `,
          _focus: {
            border: `3px solid var(--chakra-colors-${props.colorScheme}-${mode(
              '700',
              '200'
            )(props)})`,
            // border: 'none',
            // borderWidth: 'none',
          },
        },
      }),
      noBorders: {
        border: '0px',
        _focus: {
          border: '0px',
        },
        _focusWithin: {
          border: '0px',
        },
      },
    },
  },
  InputGroup: {
    // variants: {
    //   focusable: (props: {
    //     colorScheme: string;
    //     borderShades?: { light: string; dark: string };
    //     bgShades?: { light: string; dark: string };
    //   }) => ({
    //     field: {
    //       backgroundColor: '#000',
    //     },
    //   }),
    // },
    variants: {
      focusable: {
        background: '#000',
      },
    },
  },

  Select: {
    baseStyle: () => ({}),
    variants: {
      focusable: (props: {
        colorScheme: string;
        lightborder?: string;
        darkborder?: string;
        lightbg?: string;
        darkbg?: string;
        // borderShades?: { light: string; dark: string };
        // bgShades?: { light: string; dark: string };
      }) => ({
        field: {
          backgroundColor:
            props.lightbg &&
            props.darkbg &&
            `var(--chakra-colors-${props.colorScheme}-${mode(
              props.lightbg,
              props.darkbg
            )(props)})`,
          boxShadow:
            props.lightborder &&
            props.darkborder &&
            `0 0 0 2px var(--chakra-colors-${props.colorScheme}-${mode(
              props.lightborder,
              props.darkborder
            )(props)}) `,
          _focus: {
            boxShadow: `0 0 0 3px var(--chakra-colors-${
              props.colorScheme
            }-${mode('700', '200')(props)})`,
            border: 'none',
          },
        },
      }),
    },
  },
  // Input: {
  //   variants: {
  //     correctOutline: {
  //       _focus: {boxShadow:}
  //     }
  //   }
  //   baseStyle: {
  //     track: {
  //       _focus: {
  //         boxShadow: "0 0 0 1px " + mode("gray.50", "gray.900"),
  //       },
  //     },
  //   },
  //   Switch: {
  //     baseStyle: {
  //       track: {
  //         _focus: {
  //           boxShadow: "0 0 0 1px " + mode("gray.50", "gray.900"),
  //         },
  //       },
  //     },
  //   },
  // },
};
const theme = extendTheme({ colors, styles, config, shadows, components });
export default theme;
