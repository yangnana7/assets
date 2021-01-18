import React from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import View from "../../components/View/View";
import TableRow from "../../components/Table/TableRow";
import Table from "../../components/Table/Table";
import { defaultStyles } from "./Form.style";
import { combineStyles } from "../../styles/combine-styles";
import Icon from "../../components/Icon/Icon";
import Text from "../../components/Text/Text";
import TimePicker from "../../components/Picker/TimePicker";
import SelectPicker from "../../components/Picker/SelectPicker";

export default () => {
  const [localValue, onChange] = React.useState([]);
  const [savedValue, saveItem] = React.useState([]);
  const styles = combineStyles([defaultStyles]);

  const _onChange = (key, value) => {
    onChange((localValue) => ({
      ...localValue,
      key: key,
      value: value,
    }));
  };

  const setItems = (value) => {
    saveItem({ key: value.key, value: value.value });
  };

  console.log(localValue);
  return React.useMemo(
    () => (
      <View>
        <Input onChange={(e) => _onChange("keyName", e)} />
        <View style={styles.save}>
          <Button backgroundColor="gray" size="l" color={"white"} icon="plus" />
          <Button
            size="l"
            backgroundColor={"blue"}
            color={"white"}
            content="Save"
            icon="save"
            onPress={() => setItems(localValue)}
          />
        </View>
        <View style={{ marginTop: 100 }}>
          <Button
            icon="delete"
            backgroundColor="red"
            size="l"
            color="white"
            onPress={() => localStorage.clear()}
          />
        </View>
        <Text style={{ fontSize: 20 }}>{savedValue.key}</Text>
        <Text style={{ fontSize: 20 }}>{savedValue.value}</Text>
      </View>
    ),
    [localValue, savedValue]
  );
};
