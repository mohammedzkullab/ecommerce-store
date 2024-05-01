import type { Preview } from '@storybook/react';

import { withThemeByClassName } from '@storybook/addon-styling';

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"
/* TODO: update import to your tailwind styles file. If you're using Angular, inject this through your angular.json config instead */
import "../styles/global.css";

const myViewports = {
  IPHONE_14: {
    name: "Iphone 14",
    styles: {
      width: "390px",
      height: "844px"
    }
  }
}
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      values: [
        {
          name: "black",
          value: "#000"
        },
        {
          name: "secondary",
          value: "#202325"
        },
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: { ...INITIAL_VIEWPORTS, ...myViewports }
    }
  },

  decorators: [
    // Adds theme switching support.
    // NOTE: requires setting "darkMode" to "class" in your tailwind config
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }), // Adds theme switching support.
    // NOTE: requires setting "darkMode" to "class" in your tailwind config
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
