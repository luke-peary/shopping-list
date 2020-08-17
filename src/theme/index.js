import type from "./type";
import buttons from "./buttons";
import colors from "./colors";

const breakpoints = {
  xs: 0,
  sm: 416,
  md: 792,
  lg: 1024,
  xl: 1440,
};

const container = {
  fixed: {
    xs: "100%",
    sm: "100%",
    md: "780px",
    lg: "960px",
    xl: "1200px",
  },
  fluid: {
    xs: "100%",
    sm: "100%",
    md: "80%",
    lg: "60%",
    xl: "70%",
  },
};

const radii = ["8px", "16px", "24px"];

const space = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 40,
};

const verticalGrid = "8px";

const theme = {
  colors,
  radii,
  breakpoints,
  container,
  buttons,
  space,
  verticalGrid,
  type,
};

export default theme;
