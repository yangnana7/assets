import React from "react";
import Input from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    required: { control: "boolean" },
  },
};

export const String = Input.bind({});
String.args = {
  type: "string",
  defaultValue: "string value",
  placeholder: "entry something",
  required: false,
};

export const Number = Input.bind({});
Number.args = {
  type: "number",
  defaultValue: "20",
  placeholder: "0",
};

export const Date = Input.bind({});
Date.args = {
  type: "datetime-local",
  defaultValue: "20",
  placeholder: "0",
};
