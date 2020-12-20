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

export default () => {
  const header = ["date", "trade", "price", "unit", "lot", "note", ""];
  const styles = combineStyles([defaultStyles]);
  const row = [
    <Text style={styles.dateColumn}>
      <Text style={styles.dateIcon}>
        <Icon icon="calendar" color="black" size={24} />
      </Text>
      <Text style={styles.date}>
        <Input type="datetime-local" required />
      </Text>
    </Text>,
    "type",
    <Input type="number" required />,
    <Input type="number" required />,
    <Input type="number" required />,
    <Input type="string" />,
  ];
  return React.useMemo(
    () => (
      <View>
        <Table header={header} border>
          <TableRow values={row} hover={false} />
        </Table>
        <View style={styles.save}>
          <Button
            backgroundColor="gray"
            size="l"
            color={"white"}
            icon="plus"
            onPress={() => console.log("add row")}
          />
          <Button
            size="l"
            backgroundColor={"blue"}
            color={"white"}
            content="Save"
            icon="save"
            onPress={() => console.log("value")}
          />
        </View>
      </View>
    ),
    [row]
  );
};
