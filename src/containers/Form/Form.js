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
  const inputRef = React.useRef(undefined);
  const [localValue, onChange] = React.useState(undefined);
  const [values, setValues] = React.useState([]);
  const styles = combineStyles([defaultStyles]);

  const addValue = (key, value) => {
    setValues((values) => _.concat(values, [{ key: key, value: value }]));
    inputRef.current.clear();
  };

  const deleteValue = (key) => {
    setValues((values) => _.filter(values, (value) => value.key !== key));
  };

  const savedValue = localStorage.getItem("keyName");

  return React.useMemo(
    () => (
      <React.Fragment>
        <Input
          onChange={(e) => onChange(e)}
          inputType="string"
          onRef={(ref) => (inputRef.current = ref)}
        />
        <View style={styles.save}>
          <Button
            size="l"
            backgroundColor={"gray"}
            icon="plus"
            onPress={() => addValue(uuid(), localValue)}
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
        {_.size(savedValue) > 0 &&
          _.map(JSON.parse(savedValue), (s) => (
            <Text key={s.key}>{s.value}</Text>
          ))}
        <View style={styles.buttonGroup}>
          <Button
            size="l"
            backgroundColor={"blue"}
            color={"white"}
            content="Save"
            icon="save"
            onPress={() =>
              localStorage.setItem("keyName", JSON.stringify(values))
            }
          />
          <Button
            backgroundColor="red"
            icon="close"
            size="l"
            onPress={() => localStorage.clear()}
          />
        </View>
      </React.Fragment>
    ),
    [localValue, values]
  );
};
