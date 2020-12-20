import React from "react";
import { combineStyles } from "../../styles/combine-styles";
import Text from "../Text/Text";
import View from "../View/View";
import { defaultStyles } from "./Input.style";

export default ({
  onChange,
  placeholder,
  defaultValue,
  value,
  type,
  required,
}) => {
  const styles = combineStyles([defaultStyles]);
  return React.useMemo(
    () => (
      <View style={styles.container}>
        {required && <Text style={styles.required} />}
        <input
          onChange={onChange}
          placeholder={placeholder}
          defaultValue={defaultValue}
          required={required}
          value={value}
          type={type}
        />
      </View>
    ),
    [type, placeholder, defaultValue, value, required]
  );
};
