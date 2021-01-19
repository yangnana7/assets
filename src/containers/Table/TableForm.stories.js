import React from "react";
import TableForm from "./TableForm";

export default {
  title: "Containers/TableForm",
  component: TableForm,
};

export const Basic = TableForm.bind({});
Basic.args = {};
