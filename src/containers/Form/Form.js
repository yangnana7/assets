import React from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import View from "../../components/View/View";
import { defaultStyles } from "./Form.style";
import { combineStyles } from "../../styles/combine-styles";
import Text from "../../components/Text/Text";
import _ from "lodash";
import { v4 as uuid } from "uuid";
import { Picker } from "../../components/Picker";

export default ({
  keyName = "key",
  type = "input",
  inputType,
  required,
  options,
  onAddRow,
  defaultSelected,
}) => {
  const inputRef = React.useRef(undefined);
  const [localValue, onChange] = React.useState(undefined);
  const [values, setValues] = React.useState([]);
  const styles = combineStyles([defaultStyles]);

  const addValue = (key, value) => {
    setValues((values) => _.concat(values, [{ key: key, value: value }]));
    type == "input" && inputRef.current.clear();
    onAddRow && onAddRow(key, value);
  };

  const deleteValue = (key) => {
    setValues((values) => _.filter(values, (value) => value.key !== key));
  };

  const savedValue = JSON.parse(localStorage.getItem(keyName));

  return React.useMemo(
    () => (
      <React.Fragment>
        <View style={styles.container}>
          {type == "input" && (
            <Input
              onChange={(e) => onChange(e)}
              inputType={inputType}
              onRef={(ref) => (inputRef.current = ref)}
              required={required}
            />
          )}
          {type == "timepicker" && (
            <Picker.Date onChange={(e) => onChange(e)} />
          )}
          {type == "select" && (
            <Picker.Select
              onChange={(e) => onChange(e)}
              defaultValue={defaultSelected}
              options={options}
              required={required}
              name={keyName}
              value={localValue}
            />
          )}
          <Button
            size="m"
            backgroundColor={"gray"}
            color="white"
            icon="plus"
            onPress={() => addValue(uuid(), localValue)}
          />
        </View>
        <View style={styles.buttonGroup}>
          <Button
            size="l"
            backgroundColor={"blue"}
            color={"white"}
            content="Save"
            icon="save"
            onPress={() =>
              localStorage.setItem(keyName, JSON.stringify(values))
            }
          />
          <Button
            backgroundColor="red"
            icon="close"
            size="l"
            onPress={() => localStorage.clear()}
          />
        </View>
        <Text>{keyName}</Text>
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
          _.map(savedValue, (s) => <Text key={s.key}>{s.value}</Text>)}
      </React.Fragment>
    ),
    [localValue, values, keyName, inputType, type, required]
  );
};
