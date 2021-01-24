import React from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import View from "../../components/View/View";
import { defaultStyles } from "./TableForm.style";
import { combineStyles } from "../../styles/combine-styles";
import Text from "../../components/Text/Text";
import _ from "lodash";
import { v4 as uuid } from "uuid";
import { Picker } from "../../components/Picker";
import * as moment from "moment";

const Now = moment().format("YYYY-MM-DDThh:mm");

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
  const [localValue, setLocalValue] = React.useState(undefined);
  const [values, setValues] = React.useState([]);
  const styles = combineStyles([defaultStyles]);

  const _onChange = (key, value) => {
    setLocalValue((localValue) => ({ ...localValue, [key]: value }));
  };

  React.useEffect(() => {
    setLocalValue(() => ({ id: uuid() }));
  }, []);

  const addValue = (value) => {
    setLocalValue((localValue) => ({ id: uuid() }));
    setValues((values) => _.concat(values, value));
    console.log(values);
  };

  const deleteValue = (key) => {
    setValues((values) => _.filter(values, (value) => value.key !== key));
  };

  const savedValue = JSON.parse(localStorage.getItem(keyName));

  return React.useMemo(
    () => (
      <React.Fragment>
        <View style={styles.container}>
          <Picker.Date onChange={(e) => _onChange("date", e)} />
          <Picker.Select
            onChange={(e) => _onChange("trade", e)}
            defaultValue={"open"}
            options={[
              { key: "open", label: "buy" },
              { key: "close", label: "sell" },
            ]}
            required={true}
            name={keyName}
            value={localValue}
          />
          <Input
            onChange={(e) => _onChange("note", e)}
            inputType={inputType}
            onRef={(ref) => (inputRef.current = ref)}
            required={required}
          />
          <Button
            size="m"
            backgroundColor={"gray"}
            color="white"
            icon="plus"
            onPress={() => addValue(localValue)}
          />
        </View>
        <View style={styles.row}>
          <Text>newValue</Text>
          <Button icon="delete" backgroundColor="red" size="l" color="white" />
        </View>
      </React.Fragment>
    ),
    [localValue, values, keyName, inputType, type, required]
  );
};
