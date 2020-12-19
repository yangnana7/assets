import React from "react";
import Button from "./Button";
import icons from "../Icon/Icon.mapping";
import _ from "lodash";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    size: { control: { type: "select", options: ["m", "l"] } },
    onPress: { action: "onPress" },
    icon: { control: { type: "inline-radio", options: _.keys(icons) } },
  },
};

export const Basic = (args) => <Button {...args} />;
Basic.args = {
  content: "Hello World",
  icon: "plus",
  backgroundColor: "blue",
  color: "white",
  size: "m",
};
