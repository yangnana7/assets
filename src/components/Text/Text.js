import React from "react";
import { defaultStyles } from "./Text.style.js";
import _ from "lodash";
import { combineStyles, toClassName } from "../../styles/combine-styles";

export default ({ onPress, children, numberOfLines, style }) => {
  const dynamicStyle = {
    span: numberOfLines && {
      WebkitLineClamp: numberOfLines,
      WebkitBoxOrient: "vertical",
    },
    text: onPress && { cursor: "pointer" },
  };

  const styles = combineStyles([defaultStyles, dynamicStyle, { text: style }]);

  return React.useMemo(
    () => (
      <span className={toClassName(styles.text)}>
        <span className={toClassName(styles.span)} onClick={onPress && onPress}>
          {children}
        </span>
      </span>
    ),
    [style, children]
  );
};
