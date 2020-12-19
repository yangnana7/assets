import React from "react";
import Text from "../Text/Text";
import View from "./View";

export default {
  title: "Components/View",
  component: View,
  argTypes: { style: { control: "object" } },
};

export const Basic = (args) => (
  <View {...args}>
    <Text>children</Text>
  </View>
);
Basic.args = {
  style: { width: 100, height: 200, backgroundColor: "red" },
};
