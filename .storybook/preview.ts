import type { Preview } from "@storybook/nextjs";
import { ModeDecorator } from "./mode-decorator";

import "../app/globals.css";

export const decorators = [ModeDecorator];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
