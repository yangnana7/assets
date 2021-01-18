import * as S from "../../styles/consts";
import * as T from "../../styles/templates";
import * as C from "../../styles/colors";

export const defaultStyles = {
  wrap: { ...T.FLEX_ROW_CENTER },
  select: {
    ...T.PADDING(S.GUTTER, S.GRID_BASELINE),
    fontSize: S.FONT_BASELINE,
    borderRadius: S.BORDER_RADIUS_BASELINE,
    backgroundColor: C.WHITE,
    borderColor: C.TRANSPARENT_BLACK_LIGHT,
    outline: "none",
    ":focus": {
      borderWidth: S.BORDER_BASELINE,
      borderColor: C.TRANSPARENT_BLACK_LIGHT,
    },
  },
  option: {
    ...T.PADDING(S.GUTTER, S.GRID_BASELINE),
  },
  required: {
    color: C.ERROR,
    fontSize: S.FONT_BASELINE,
    marginRight: S.GUTTER,
  },
};
