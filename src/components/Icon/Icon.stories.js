import React from "react";
import Icon from "./Icon";
import View from "../View/View";
import _ from "lodash";
import mapping from "./Icon.mapping";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    color: { control: "color" },
    size: { control: { type: "range", min: 10, max: 80 } },
    icon: { control: { type: "text" } },
  },
};

const icons = _.keys(mapping);
export const Basic = ({ size, color }) => (
  <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
    {_.map(icons, (i) => (
      <View style={{ marginRight: 16 }} key={i}>
        <Icon icon={i} size={size} color={color} />
      </View>
    ))}
  </View>
);
Basic.args = { icon: "delete", size: 40, color: "black" };
