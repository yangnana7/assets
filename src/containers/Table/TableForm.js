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
const defalutValue = [
  {
    key: uuid(),
    payload: {
      string: "no message",
      date: Now,
      trade: "buy",
    },
  },
];

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
  const [values, setValues] = React.useState(defalutValue);
  const styles = combineStyles([defaultStyles]);

  const _onChange = React.useCallback(
    (attr, newValue) => {
      onChange({ ...defalutValue.payload, [attr]: newValue });
    },
    [defalutValue, onChange]
  );
  const payload = {};
  const addValue = React.useCallback(
    (attr, newValue) => {
      //if (_.isEmpty(payload.note)) {
      //  setValues({ ...values.payload, note: "no message" });
      //}
      //if (_.isEmpty(payload.date)) {
      //  setValues({ ...values.payload, date: Now });
      //}
      setValues({ ...values.payload, [attr]: newValue });
    },
    [payload, addValue]
  );
  console.log(values);
  //setValues((values) =>
  //  _.concat(values, [
  //    { key: key, payload: { key: value.key, value: value.value } },
  //  ])
  //);
  //  type == "input" && inputRef.current.clear();
  //  onAddRow && onAddRow(key, value);
  //};

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
            defaultValue={"buy"}
            options={[
              { key: "buy", label: "buy" },
              { key: "sell", label: "sell" },
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
            onPress={() => addValue(uuid(), localValue)}
          />
        </View>
        {_.map(values, (v) => (
          <View key={v.key} style={styles.row}>
            <Text>{v.payload.date}</Text>
            <Text>{v.payload.trade}</Text>
            <Text>{v.payload.string}</Text>
            <Button
              icon="delete"
              backgroundColor="red"
              size="l"
              color="white"
              onPress={() => deleteValue(v.key)}
            />
          </View>
        ))}
      </React.Fragment>
    ),
    [localValue, values, keyName, inputType, type, required]
  );
};
