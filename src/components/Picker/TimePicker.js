import React from "react";
import Icon from "../Icon/Icon";
import { defaultStyles } from "./TimePicker.style";
import View from "../View/View";
import Text from "../Text/Text";
import { toClassName, combineStyles } from "../../styles/combine-styles";
import * as moment from "moment";

export default ({ onChange }) => {
  const inputRef = React.useRef();
  const Now = moment().format("YYYY-MM-DDThh:mm");
  const [localValue, setLocalValues] = React.useState(Now);

  const _onChange = (value) => {
    setLocalValues(value);
    onChange && onChange(value);
  };
  const styles = combineStyles([defaultStyles]);

  return React.useMemo(
    () => (
      <View style={styles.wrap}>
        <View style={styles.input}>
          <View style={styles.pickerIcon}>
            <Icon size={30} icon="calendar" color="white" />
          </View>
          <input
            id="timepicker-wrap"
            type="datetime-local"
            value={localValue}
            onChange={(e) => _onChange(e.target.value)}
            required
          />
        </View>
        <Text style={styles.time}>{moment(localValue).format("LL LT")}</Text>
      </View>
    ),
    [localValue]
  );
};
