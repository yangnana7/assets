import React from "react";
import Table from "./Table";
import TableRow from "./TableRow";
import Input from "../Input/Input";
import Icon from "../Icon/Icon";

export default {
  title: "Components/Table",
  component: Table,
  argTypes: { border: { control: "boolean" } },
};

export const Wrap = Table.bind({});
Wrap.args = {
  header: ["date", "trade", "price", "unit", "lot", "note"],
};

export const Row = (args) => <TableRow {...args} />;
Row.args = {
  values: [
    <Input type="datetime-local" />,
    "trade",
    <Input type="number" />,
    "lot",
    "note",
  ],
};

export const Group = (args) => (
  <Table {...args}>
    <TableRow {...args} />
    <TableRow {...args} />
  </Table>
);
Group.args = {
  header: ["date", "trade", "price", "unit", "lot", "note"],
  values: [
    "2019-12-12 19:00",
    "sell",
    "23823.30",
    <Icon icon="usd" size={20} color="black" />,
    "1",
    "some notice",
  ],
};
