import React from "react";
import icons from "./Icon.mapping";

export default ({ icon, color, size, style }) => {
  const Icon = icons[icon];
  return React.useMemo(
    () => (
      <Icon icon={icon} size={size} color={color} style={style} title={icon} />
    ),
    [size, icon, color]
  );
};
