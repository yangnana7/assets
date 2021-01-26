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

export default ({ keyName = "key", onAddRow, defaultSelected, inputs }) => {
  const inputRef = React.useRef(undefined);
  const [localValue, setLocalValue] = React.useState(undefined);
  const [values, setValues] = React.useState([]);
  const styles = combineStyles([defaultStyles]);

  const _onChange = (key, value) => {
    setLocalValue((localValue) => ({ ...localValue, [key]: value }));
  };

  React.useEffect(() => {
    setLocalValue(() => ({ _id: uuid() }));
  }, []);

  const addValue = (value) => {
    setLocalValue((localValue) => ({ _id: uuid() }));
    setValues((values) => _.concat(values, value));
  };

  const deleteValue = (key) => {
    setValues((values) => _.filter(values, (value) => value.key !== key));
  };

  const savedValue = JSON.parse(localStorage.getItem(keyName));

  return React.useMemo(
    () => (
      <React.Fragment>
        <View style={styles.container}>
          {_.map(inputs, (i) => (
            <React.Fragment key={i.key}>
              {i.type == "timePicker" && (
                <Picker.Date onChange={(e) => _onChange(i.key, e)} />
              )}
              {i.type == "select" && (
                <Picker.Select
                  onChange={(e) => _onChange(i.key, e)}
                  defaultValue={i.defaultValue}
                  options={i.options}
                  required={i.required}
                  name={keyName}
                />
              )}
              {i.type == "input" && (
                <Input
                  placeholder={i.placeholder}
                  onChange={(e) => _onChange(i.key, e)}
                  inputType={i.inputType}
                  onRef={(ref) => (inputRef.current = ref)}
                  required={i.required}
                />
              )}
            </React.Fragment>
          ))}
          <Button
            size="m"
            backgroundColor={"gray"}
            color="white"
            icon="plus"
            onPress={() => addValue(localValue)}
          />
        </View>
        {_.map(values, (v) => (
          <View style={styles.row} key={v._id}>
            <Text>{v._id}</Text>
            <Button
              icon="delete"
              backgroundColor="red"
              size="l"
              color="white"
            />
          </View>
        ))}
      </React.Fragment>
    ),
    [localValue, values, keyName, inputs]
  );
};
