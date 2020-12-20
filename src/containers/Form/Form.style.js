import * as S from "../../styles/consts";
import * as T from "../../styles/templates";

export const defaultStyles = {
  save: { flex: 1, ...T.FLEX_ROW_BETWEEN, marginTop: S.ROW },
  dateColumn: { width: 40, ...T.FLEX_CENTER },
  date: { opacity: 1, width: 40, height: "100%" },
  dateIcon: { ...T.ABSOLUTE_FULL, ...T.FLEX_CENTER, zIndex: -1 },
};
