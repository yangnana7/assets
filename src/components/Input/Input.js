import React from "react";
import Icon from "../Icon/Icon";
import { defaultStyles } from "./Input.style";
import View from "../View/View";
import Text from "../Text/Text";
import { toClassName, combineStyles } from "../../styles/combine-styles";
import _ from "lodash";

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

  if (type == "float" && _.toString(value).substr(value.length - 1) == ".") {
    viewValue = viewValue + ".";
  }

  return {
    viewValue,
    modelValue,
  };
};

export default ({
  inputType,
  placeholder,
  required,
  onChange,
  defaultValue = "",
  requiredInfo,
  secureTextEntry = false,
}) => {
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

  const type = secureTextEntry ? "password" : inputType;

  return React.useMemo(
    () => (
      <React.Fragment>
        <View style={styles.container}>
          {required && <Text style={styles.required}>*</Text>}
          <input
            type={type}
            onChange={(e) => _onChange(e.target.value)}
            placeholder={placeholder}
            required={required}
            value={localValues.viewValue}
          />
        </View>
        {required && requiredInfo && (
          <Text style={styles.requiredInfo}>need value !</Text>
        )}
      </React.Fragment>
    ),
    [defaultValue, localValues, inputType, required, requiredInfo]
  );
};
