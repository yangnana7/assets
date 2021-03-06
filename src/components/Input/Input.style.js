import * as S from "../../styles/consts";
import * as T from "../../styles/templates";
import * as C from "../../styles/colors";

export const defaultStyles = {
  container: { ...T.FLEX_ROW },
  required: {
    color: C.RED,
    fontSize: S.FONT_BASELINE,
    marginRight: S.GUTTER,
  },
  requiredInfo: {
    color: C.RED,
    fontSize: S.FONT_S,
    ...T.BOLD,
    marginLeft: "auto",
  },
};
