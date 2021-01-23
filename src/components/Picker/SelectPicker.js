import React from "react";
import Icon from "../Icon/Icon";
import { defaultStyles } from "./SelectPicker.style";
import View from "../View/View";
import Text from "../Text/Text";
import { toClassName, combineStyles } from "../../styles/combine-styles";
import _ from "lodash";

export default ({
  onChange,
  defaultValue = undefined,
  options,
  name,
  required,
}) => {
  const [localValue, setLocalValues] = React.useState(defaultValue);

  React.useEffect(() => {
    onChange(defaultValue);
  }, []);

  const _onChange = (value) => {
    setLocalValues(value);
    const ef = document.getElementById("selectPicker").value;
    onChange && onChange(ef);
  };
  const styles = combineStyles([defaultStyles]);

  return React.useMemo(
    () => (
      <View style={styles.wrap}>
        {required && <Text style={styles.required}>*</Text>}
        <select
          id="selectPicker"
          onChange={(v) => _onChange(v)}
          style={styles.select}
          name={name}
          defaultValue={defaultValue}
        >
          {_.map(options, (v) => (
            <option key={v.key} value={v.key} style={styles.option}>
              {v.label}
            </option>
          ))}
        </select>
      </View>
    ),
    [options, name, required, defaultValue]
  );
};
