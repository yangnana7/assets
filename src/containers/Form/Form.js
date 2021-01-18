import React from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import View from "../../components/View/View";
import TableRow from "../../components/Table/TableRow";
import Table from "../../components/Table/Table";
import { defaultStyles } from "./Form.style";
import { combineStyles } from "../../styles/combine-styles";
import Icon from "../../components/Icon/Icon";
import Text from "../../components/Text/Text";
import _ from "lodash";
import TimePicker from "../../components/Picker/TimePicker";
import SelectPicker from "../../components/Picker/SelectPicker";

export default () => {
  const [localValue, onChange] = React.useState([]);
  const [tables, setTable] = React.useState([]);

  const header = ["date", "trade", "price", "unit", "lot", "note", ""];
  const options = [
    { key: "buy", label: "buy" },
    { key: "sell", label: "sell" },
  ];
  const styles = combineStyles([defaultStyles]);

  //const _onChange = (key, value) => {
  //  onChange((localValue) => ({
  //    ...localValue,
  //    key: key,
  //    value: value,
  //  }));
  //};

  //const row = [
  //  <Text style={styles.dateColumn}>
  //    <Text style={styles.date}>
  //      <TimePicker onChange={(v) => _onChange("date", v)} />
  //    </Text>
  //  </Text>,
  //  <SelectPicker options={options} name="trade" />,
  //  //<Input inputType="number" required onChange={(v) => _onChange("lot", v)} />,
  //  //<Input inputType="string" onChange={(v) => _onChange("info", v)} />,
  //];

  //const setTableItems = (value) => {
  //  setTable(_.concat(tables, value));
  //  console.log(tables);
  //};
  //return React.useMemo(
  //  () => (
  //    <View>
  //      <Table header={header} border>
  //        <TableRow values={row} hover={false} />
  //      </Table>
  //      <View style={styles.save}>
  //        <Button backgroundColor="gray" size="l" color={"white"} icon="plus" />
  //        <Button
  //          size="l"
  //          backgroundColor={"blue"}
  //          color={"white"}
  //          content="Save"
  //          icon="save"
  //          onPress={() => setTableItems(localValue)}
  //        />
  //      </View>
  //      <View style={{ marginTop: 100 }}>
  //        <Button
  //          icon="delete"
  //          backgroundColor="red"
  //          size="l"
  //          color="white"
  //          onPress={() => localStorage.clear()}
  //        />
  //      </View>
  //    </View>
  //  ),

  return React.useMemo(
    () => (
      <Input
        inputType="float"
        required
        defaultValue={0.01}
        placeholder={0.01}
        onChange={(e) => console.log(e)}
      />
    ),
    []
  );
};
