import * as S from "../../styles/consts";
import * as T from "../../styles/templates";
import * as C from "../../styles/colors";

export const defaultStyles = {
  table: {
    padding: S.ROW,
  },
  header: {
    ...T.FLEX_ROW_CENTER,
    borderBottom: `${S.BORDER_M}px ${C.TEXT_GRAY} solid`,
    ...T.PADDING_L(S.GUTTER),
  },
  column: { flex: 1, ...T.PADDING_R(S.GUTTER) },
  row: {
    ...T.PADDING_L(S.GUTTER),
    ...T.FLEX_ROW_CENTER,
    ":hover": { backgroundColor: C.TRANSPARENT_BLACK_BRIGHT },
    borderBottom: `${S.BORDER_BASELINE}px ${C.TRANSPARENT_BLACK_LIGHT} solid`,
  },
  text: { fontSize: S.FONT_BASELINE },
};

export const borderStyles = {
  table: { border: `${S.BORDER_M}px ${C.BLACK} solid` },
};
