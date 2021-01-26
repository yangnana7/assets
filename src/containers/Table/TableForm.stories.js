import React from "react";
import TableForm from "./TableForm";

export default {
  title: "Containers/TableForm",
  component: TableForm,
};

export const Basic = TableForm.bind({});
Basic.args = {
  inputs: [
    {
      type: "input",
      inputType: "string",
      key: "memo",
      placeholder: "some memo",
    },
    {
      type: "select",
      key: "tradeType",
      defaultValue: "open",
      options: [
        { key: "open", label: "buy" },
        { key: "close", label: "sell" },
      ],
      required: true,
    },
    { type: "timePicker", key: "date" },
  ],
};
