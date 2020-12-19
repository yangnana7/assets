import React from "react";
import _ from "lodash";
import { toClassName, combineStyles } from "../../styles/combine-styles";
import { defaultStyles } from "./View.style";

export default ({ style = {}, onPress, children, onRef }) => {
  const dynamicStyle = onPress
    ? {
        container: {
          cursor: "pointer",
        },
      }
    : {};
  const styles = React.useMemo(
    () =>
      combineStyles([
        defaultStyles,
        dynamicStyle,
        { container: _.isArray(style) ? combineStyles(style) : style },
      ]),
    [style, dynamicStyle]
  );

  return React.useMemo(
    () => (
      <div
        onClick={onPress}
        className={toClassName(styles.container)}
        ref={onRef}
      >
        {children}
      </div>
    ),
    [style, children]
  );
};
