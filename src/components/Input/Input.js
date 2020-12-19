import React from "react";
import { combineStyles } from "../../styles/combine-styles";
import { defaultStyles } from "./Input.style";

export default ({
  onChange,
  placeholder,
  defaultValue,
  value,
  type,
  required,
}) => {
  return React.useMemo(
    () => (
      <input
        onChange={onChange}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
        value={value}
        type={type}
      />
    ),
    [type, placeholder, defaultValue, value, required]
  );
};
