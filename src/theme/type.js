const fontSizes = [
  "1.5rem", // 0
  "1.7rem", // 1
  "1.9rem", // 2
  "2.1rem", // 3
  "2.3rem", // 4
  "2.4rem", // 5
  "2.7rem", // 6
  "3.0rem", // 7
  "4.0rem", // 8
  "7.2rem", // 9
];

const lineHeights = [
  "2.0rem", // 0
  "2.4rem", // 1
  "2.8rem", // 2
  "3.2rem", // 3
  "3.6rem", // 4
  "4.0rem", // 5
  "4.8rem", // 6
  "7.2rem", // 7
];

const letterSpacings = ["-0.2", "-0.6", "-2"];

// Font Size Aliases - Example only
fontSizes.xsmall = fontSizes[1];
fontSizes.small = fontSizes[3];
fontSizes.medium = fontSizes[4];
fontSizes.large = fontSizes[7];
fontSizes.xlarge = fontSizes[9];

const fonts = {
  heading: "Khula",
  copy: "Lato",
};

const copy = {
  small: {
    fontSize: fontSizes[0],
    lineHeight: lineHeights[0],
  },
  medium: {
    fontSize: fontSizes[1],
    lineHeight: lineHeights[1],
  },
  large: {
    fontSize: fontSizes[2],
    lineHeight: lineHeights[2],
  },
};

const type = {
  fontSizes,
  fonts,
  lineHeights,
  letterSpacings,
  copy,
};

export default type;
