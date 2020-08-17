import { css } from "styled-components";
import { createBreakpoint } from "styled-components-breakpoint";
import { isUndefined, isNull, isObject } from "./value";
import theme from "../theme";

const breakpoint = createBreakpoint(theme.breakpoints);

export const media = breakpoint;
export const BREAKPOINTS = theme.breakpoints;

export const mediaMap = (values, callback) => {
  if (isUndefined(values) || isNull(values)) {
    return;
  }

  const results = [];

  if (isObject(values)) {
    Object.keys(values).forEach((key) => {
      const value = values[key];

      if (!isUndefined(value) && !isNull(value) && key in BREAKPOINTS) {
        results.push(media(key)`${callback(value, key)}`);
      }
    });
  } else {
    results.push(callback(values));
  }

  if (results.length === 0) {
    return;
  }

  return css`
    ${results}
  `;
};
