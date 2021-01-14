import React from "react";
import View from "../View/View";
import Text from "../Text/Text";
import { defaultStyles, marginStyles, sizeStyles } from "./Button.style";
import { combineStyles } from "../../styles/combine-styles";
import Icon from "../Icon/Icon";

export default ({ onPress, content, icon, backgroundColor, color, size }) => {
  const dynamicStyle = {
    containers: { backgroundColor: backgroundColor },
    content: { color: color },
  };
  const styles = combineStyles([
    defaultStyles,
    sizeStyles[size],
    dynamicStyle,
    marginStyles[size],
  ]);

  return React.useMemo(
    () => (
      <View onPress={onPress} style={styles.containers}>
        {icon && (
          <Icon icon={icon} size={sizeStyles[size].icon} color={color} />
        )}
        {content && <Text style={styles.content}>{content}</Text>}
      </View>
    ),
    [content, icon, backgroundColor, color, size, onPress]
  );
};
