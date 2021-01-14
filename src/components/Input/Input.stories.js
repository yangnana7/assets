import React from "react";
import Input from "./Input";
import * as moment from "moment";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    required: { control: "boolean" },
  },
};

export const String = Input.bind({});
String.args = {
  inputType: "string",
  defaultValue: "string value",
  placeholder: "entry something",
  required: false,
};

export const Number = Input.bind({});
Number.args = {
  inputType: "number",
  defaultValue: "20",
  placeholder: "0",
};

export const Date = Input.bind({});
Date.args = {
  inputType: "date",
};
