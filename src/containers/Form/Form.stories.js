import React from "react";
import Form from "./Form";

export default {
  title: "Containers/Form",
  component: Form,
};

export const NumberInput = Form.bind({});
NumberInput.args = {
  keyName: "lot",
  type: "input",
  inputType: "number",
  required: true,
};

export const StringInput = Form.bind({});
StringInput.args = {
  keyName: "note",
  type: "input",
  inputType: "string",
};

export const DatePicker = Form.bind({});
DatePicker.args = {
  keyName: "date",
  type: "timepicker",
};

export const Selector = Form.bind({});
Selector.args = {
  keyName: "trade",
  type: "select",
  required: true,
  defaultSelected: "buy",
  options: [
    { key: "buy", label: "buy" },
    { key: "sell", label: "sell" },
  ],
};
