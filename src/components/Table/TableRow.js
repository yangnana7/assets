import React from "react";
import Text from "../Text/Text";
import View from "../View/View";
import { combineStyles } from "../../styles/combine-styles";
import { defaultStyles, hoverStyles } from "./common.style";
import _ from "lodash";
import { v4 as uuid } from "uuid";

export default ({ values, hover = true }) => {
  const styles = combineStyles([defaultStyles, hover && hoverStyles]);
  return React.useMemo(
    () => (
      <View style={styles.row}>
        {_.map(values, (v) => (
          <View key={uuid()} style={styles.column}>
            <Text style={styles.text}>{v}</Text>
          </View>
        ))}
      </View>
    ),
    []
  );
};
