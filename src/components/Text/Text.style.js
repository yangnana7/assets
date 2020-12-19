import * as T from "../../styles/templates";
export const defaultStyles = {
  text: {
    display: "flex",
    ...T.FLEX_ROW,
    ...T.HIDDEN,
  },
  span: {
    display: "-webkit-box",
    wordBreak: "break-all",
    textOverflow: "ellipsis",
    whiteSpace: "pre-wrap",
    fontFamily: `"Montserrat", "varela_roundregular", "Whitney", "Helvetica Neue",
    "Helvetica", "Segoe UI", "Microsoft YaHei", "微软雅黑", "Meiryo UI",
    "MaterialCommunityIcons", "Arial", "sans-serif"`,
  },
};
