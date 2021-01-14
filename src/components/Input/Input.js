import React from "react";
import Icon from "../Icon/Icon";
import { defaultStyles } from "./Input.style";
import View from "../View/View";
import { toClassName, combineStyles } from "../../styles/combine-styles";
import * as moment from "moment";
import Button from "../Button/Button";

const formatValue = (value, type) => {
  let viewValue, modelValue;

  switch (type) {
    case "integer":
    case "number":
      modelValue = parseInt(value);
      break;
    case "float":
      modelValue = parseFloat(value);
      break;
    default:
      modelValue = value;
      break;
  }

  const isFalsy = (value) => {
    return _.isNaN(value) || _.isNil(value) || value === "";
  };

  viewValue = isFalsy(modelValue) ? "" : _.toString(modelValue);
  modelValue = isFalsy(modelValue) ? undefined : modelValue;

  if (type == "float" && value.substr(value.length - 1) == ".") {
    viewValue = viewValue + ".";
  }

  return {
    viewValue,
    modelValue,
  };
};

export default ({
  inputType = "string",
  placeholder,
  required,
  onChange,
  defaultValue,
  value,
}) => {
  const inputRef = React.useRef();
  const [focus, setFocus] = React.useState(false);
  const [localValues, setLocalValues] = React.useState([]);

  const _onChange = (value) => {
    const { viewValue, modelValue } = formatValue(value, inputType);
    setLocalValues({ viewValue, modelValue });
    onChange && onChange(modelValue);
  };
  const styles = combineStyles([defaultStyles]);

  React.useEffect(() => {
    setLocalValues(() => formatValue(defaultValue, inputType));
  }, [defaultValue]);

  return React.useMemo(() => {
    if (inputType == "date") {
      return (
        <input
          id="timepicker-wrap"
          type="datetime-local"
          value={localValues.viewValue || moment().format("YYYY-MM-DDThh:mm")}
          onChange={(e) => _onChange(e.target.value)}
          placeholder={placeholder}
          style={styles.timepicker}
          required
        />
      );
    }
    return (
      <View style={styles.container}>
        <input
          type={inputType}
          onChange={(e) => _onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          value={localValues.viewValue}
          defaultValue={defaultValue}
        />
      </View>
    );
  }, [defaultValue, localValues, focus, inputType, required, value]);
};
