import _ from "lodash";
import { StyleSheet, css } from "aphrodite";

export const combineStyles = (styles) => {
  return _.merge({}, ...styles);
};

export const toClassName = (style) => {
  let s = _.isArray(style) ? _.merge(..._.flattenDeep(style)) : style;
  s = StyleSheet.create({ style: s });
  return css(s.style);
};
