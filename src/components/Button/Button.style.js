import * as S from "../../styles/consts";
import * as T from "../../styles/templates";

export const defaultStyles = {
  containers: {
    borderRadius: S.BORDER_RADIUS_BASELINE,
    ...T.FLEX_ROW_BETWEEN,
    ...T.COLUMN_CENTER,
    width: "fit-content",
  },
  content: T.BOLD,
};

export const sizeStyles = {
  m: {
    icon: S.FONT_M,
    containers: {
      height: S.ROW,
      ...T.PADDING_L(S.GRID_BASELINE),
      ...T.PADDING_R(S.GUTTER),
    },
    content: { fontSize: S.FONT_BASELINE },
  },
  l: {
    icon: S.FONT_L,
    containers: {
      height: S.ROW + S.GUTTER,
      ...T.PADDING_L(S.GUTTER),
      ...T.PADDING_R(S.ROW),
    },
    content: { fontSize: S.FONT_M },
  },
};

export const marginStyles = {
  m: {
    content: { marginLeft: S.GUTTER },
  },
  l: {
    content: { marginLeft: S.ROW },
  },
};
