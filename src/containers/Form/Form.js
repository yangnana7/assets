import React from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import View from "../../components/View/View";
import { defaultStyles } from "./Form.style";
import { combineStyles } from "../../styles/combine-styles";
import Text from "../../components/Text/Text";
import _ from "lodash";
import { v4 as uuid } from "uuid";

export default () => {
  const inputRef = React.useRef();
  const [localValue, onChange] = React.useState(undefined);
  const [values, setValues] = React.useState([]);
  const styles = combineStyles([defaultStyles]);

  const addValue = (key, value) => {
    setValues((values) => _.concat(values, [{ key: key, value: value }]));
  };

  const deleteValue = (key) => {
    setValues((values) => _.filter(values, (value) => value.key !== key));
  };

  return React.useMemo(
    () => (
      <React.Fragment>
        <Input
          onChange={(e) => onChange(e)}
          inputType="string"
          inputRef={inputRef}
        />
        <View style={styles.save}>
          <Button
            size="l"
            backgroundColor={"gray"}
            icon="plus"
            onPress={() => addValue(uuid(), localValue)}
          />
          <Button
            size="l"
            backgroundColor={"blue"}
            color={"white"}
            content="Save"
            icon="save"
            onPress={() => localStorage.setItem("keyName", values)}
          />
        </View>
        {_.map(values, (v) => (
          <View key={v.key} style={styles.row}>
            <Text>{v.value}</Text>
            <Button
              icon="delete"
              backgroundColor="red"
              size="l"
              color="white"
              onPress={() => deleteValue(v.key)}
            />
          </View>
        ))}
        <Button
          backgroundColor="red"
          icon="close"
          size="l"
          onPress={() => localStorage.clear()}
        />
      </React.Fragment>
    ),
    [localValue, values]
  );
};
