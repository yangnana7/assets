import React from "react";
import Text from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: { style: { control: "object" } },
};

export const Basic = (args) => <Text {...args} />;
Basic.args = {
  children: "Hello World",
  style: {
    color: "black",
    fontSize: 54,
    fontWeight: "bold",
  },
};
