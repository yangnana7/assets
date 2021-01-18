import React from "react";
import { Picker } from "./index";

export default {
  title: "Components/Picker",
  component: Picker,
};

export const TimePicker = Picker.Date.bind({});
TimePicker.args = {};

export const SelectPicker = Picker.Select.bind({});
SelectPicker.args = {
  defaultValue: "buy",
  name: "trade",
  options: [
    { key: "buy", label: "buy" },
    { key: "sell", label: "sell" },
  ],
  required: false,
};
