import React from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import View from "../../components/View/View";
//import TableRow from "../../components/Table/TableRow";
//import Table from "../../components/Table/Table";
import { defaultStyles } from "./Form.style";
import { combineStyles } from "../../styles/combine-styles";
//import Icon from "../../components/Icon/Icon";
import Text from "../../components/Text/Text";
//import TimePicker from "../../components/Picker/TimePicker";
//import SelectPicker from "../../components/Picker/SelectPicker";
import _ from "lodash";

export default () => {
  const [localValue, onChange] = React.useState(undefined);
  const [savedValue, saveItem] = React.useState([]);
  const styles = combineStyles([defaultStyles]);

  const setItems = (value) => {
    saveItem((savedValue) => _.concat(savedValue, value));
  };
  const deleteItem = (v) => {
    saveItem((savedValue) => _.pull(savedValue, v));
  };

  //onPress={() => localStorage.clear()}
  return React.useMemo(
    () => (
      <React.Fragment>
        <Input onChange={(e) => onChange(e)} inputType="string" />
        <View style={styles.save}>
          <Button
            size="l"
            backgroundColor={"gray"}
            icon="plus"
            onPress={() => setItems(localValue)}
          />
          <Button
            size="l"
            backgroundColor={"blue"}
            color={"white"}
            content="Save"
            icon="save"
            onPress={() => localStorage.setItem("keyName", savedValue)}
          />
        </View>
        {_.map(savedValue, (v, index) => (
          <View key={index}>
            <Text>{v}</Text>
            <Button
              icon="delete"
              backgroundColor="red"
              size="l"
              color="white"
              onPress={() => deleteItem(v)}
            />
          </View>
        ))}
        <Text>key name</Text>
      </React.Fragment>
    ),
    [localValue, savedValue]
  );
};
