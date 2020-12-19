import React from "react";
import Text from "../Text/Text";
import View from "../View/View";
import { combineStyles } from "../../styles/combine-styles";
import { defaultStyles, borderStyles } from "./common.style";
import _ from "lodash";

export default ({ children, header, border }) => {
  const styles = combineStyles([defaultStyles, border && borderStyles]);
  return React.useMemo(
    () => (
      <View style={styles.table}>
        <View style={styles.header}>
          {_.map(header, (h) => (
            <View key={h} style={styles.column}>
              <Text>{h}</Text>
            </View>
          ))}
        </View>
        <View style={styles.body}>{children}</View>
      </View>
    ),
    []
  );
};
