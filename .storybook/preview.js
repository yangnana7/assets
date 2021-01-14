import { themes } from "@storybook/theming";
import '../src/style.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: { theme: themes.normal },
};
