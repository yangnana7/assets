import React from "react";
import { Picker } from "./index";

export default {
  title: "Components/Picker",
  component: Picker,
  argTypes: {
    required: { control: "boolean" },
  },
};

export const TimePicker = Picker.Date.bind({});
TimePicker.args = {
  inputType: "number",
  defaultValue: "20",
  placeholder: "0",
};
