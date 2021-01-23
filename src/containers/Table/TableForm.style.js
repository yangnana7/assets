import * as S from "../../styles/consts";
import * as T from "../../styles/templates";

export const defaultStyles = {
  container: {
    ...T.FLEX_ROW_BETWEEN,
    border: "2px black solid",
    padding: S.ROW,
  },
  save: {},
  row: { ...T.FLEX_ROW_BETWEEN, marginTop: S.ROW },
  buttonGroup: { marginTop: S.COLUMN },
  dateColumn: { ...T.FLEX_CENTER },
  date: { opacity: 1, height: "100%" },
  dateIcon: { ...T.ABSOLUTE_FULL, ...T.FLEX_CENTER, zIndex: -1 },
};
