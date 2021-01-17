import * as S from "../../styles/consts";
import * as T from "../../styles/templates";
import * as C from "../../styles/colors";

export const defaultStyles = {
  wrap: { ...T.FLEX_ROW, ...T.COLUMN_CENTER },
  input: {},
  pickerIcon: {
    backgroundColor: C.SECONDARY,
    borderRadius: S.BORDER_RADIUS_BASELINE,
    ...T.FLEX_CENTER,
    padding: S.GRID_BASELINE,
  },
  time: { marginLeft: S.GUTTER },
};
