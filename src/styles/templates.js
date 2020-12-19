import * as C from "./colors";
import * as S from "./consts";

export const FULL = {
  width: "100%",
  height: "100%",
};

export const ROUND = {
  borderRadius: "50%",
};
export const FONT_BASIC = {
  fontSize: S.FONT_BASELINE,
};
export const BOLD = {
  fontWeight: "bold",
};
export const HIDDEN = {
  overflow: "hidden",
};
export const TEXT_CENTER_L = {
  alignVertical: "center",
};
export const TEXT_CENTER_R = {
  textAlign: "center",
};
export const SHADOW_XS = {
  boxShadow: "0px 0px 5px 0px rgba(0,0,0,.1)",
};
export const SHADOW_S = {
  boxShadow: "0 1px 1px rgba(0,0,0,.2)",
};
export const SHADOW_M = {
  boxShadow: "0 2px 4px 0px rgba(0, 0, 0, 0.2)",
};
export const SHADOW_L = {
  boxShadow: "1px 2px 6px -1px rgba(0,0,0,.3)",
};
export const SAMPLE_FONT = {
  fontSize: 12,
  fontWeight: "bold",
  color: C.GRAY,
  marginTop: 12,
  wordBreak: "break-all",
};
export const ABSOLUTE = {
  position: "absolute",
};
export const ABSOLUTE_FULL = {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};
export const FIXED = {
  position: "fixed",
};
export const FIXED_FULL = {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 999,
};
export const FLEX_COLUMN = {
  flexDirection: "column",
};
export const FLEX_ROW = {
  flexDirection: "row",
};
export const ROW_CENTER = {
  justifyContent: "center",
};
export const COLUMN_CENTER = {
  alignItems: "center",
};
export const COLUMN_BETWEEN = {
  justifyContent: "space-between",
};
export const FLEX_ROW_WRAP = {
  flexDirection: "row",
  flexWrap: "wrap",
};
export const FLEX_ROW_CENTER = {
  flexDirection: "row",
  alignItems: "center",
};

export const FLEX_CENTER = {
  alignItems: "center",
  justifyContent: "center",
};

export const FLEX_ROW_BETWEEN = {
  flexDirection: "row",
  justifyContent: "space-between",
};
export const FLEX_ROW_AROUND = {
  flexDirection: "row",
  justifyContent: "space-around",
};

export function PADDING(row, line) {
  return {
    paddingLeft: row,
    paddingRight: row,
    paddingTop: line,
    paddingBottom: line,
  };
}
export function PADDING_ALL(top, right, bottom, left) {
  return {
    paddingTop: top,
    paddingRight: right,
    paddingBottom: bottom,
    paddingLeft: left,
  };
}
export function MARGIN(row, line) {
  return {
    marginLeft: row,
    marginRight: row,
    marginTop: line,
    marginBottom: line,
  };
}
export function PADDING_R(row) {
  return {
    paddingLeft: row,
    paddingRight: row,
  };
}
export function PADDING_L(line) {
  return {
    paddingTop: line,
    paddingBottom: line,
  };
}
export function MARGIN_R(row) {
  return {
    marginLeft: row,
    marginRight: row,
  };
}
export function MARGIN_L(line) {
  return {
    marginTop: line,
    marginBottom: line,
  };
}
export function MARGIN_ALL(top, right, bottom, left) {
  return {
    marginTop: top,
    marginRight: right,
    marginBottom: bottom,
    marginLeft: left,
  };
}
export function ABSOLUTE_ALL(top, right, bottom, left) {
  return {
    position: "absolute",
    top: top,
    right: right,
    bottom: bottom,
    left: left,
  };
}

export const PLACEHOLDER = (style) => ({
  "::placeholder": style,
  ":-ms-input-placeholder": style,
  "::-ms-input-placeholder": style,
});

export const LIST_COLUMN_WIDTH = (gutter, column) =>
  (document.body.clientWidth - gutter) / column;

export const LIST_COLUMN_GUTTER = (gutter, column) => {
  const _gutter = gutter * (column * 2);
  return _gutter + (_gutter / (column * 2)) * 2;
};
