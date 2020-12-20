import React from "react";
import Form from "./Form";

export default {
  title: "Components/Form",
  component: Form,
  argTypes: {
    required: { control: "boolean" },
  },
};

export const Basic = Form.bind({});
Basic.args = {
  required: true,
};

