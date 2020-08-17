import colors from "./colors";
// Button Styles

const buttons = {
  primary: {
    color: colors.white,
    backgroundColor: colors.primary[600],
    borderColor: colors.primary[600],
    hover: {
      color: colors.white,
      backgroundColor: colors.secondary[600],
      borderColor: colors.secondary[600],
    },
    focus: {
      borderColor: colors.secondary[700],
    },
    disabled: {
      color: colors.neutral[500],
      backgroundColor: colors.neutral[100],
      borderColor: colors.neutral[100],
    },
  },
  secondary: {
    color: colors.neutral[800],
    backgroundColor: colors.neutral[100],
    borderColor: colors.neutral[100],
    hover: {
      color: colors.black,
      backgroundColor: colors.neutral[200],
      borderColor: colors.neutral[200],
    },
    focus: {
      borderColor: colors.primary[600],
    },
    disabled: {
      color: colors.neutral[500],
      backgroundColor: colors.neutral[100],
      borderColor: colors.neutral[100],
    },
  },
};

export default buttons;
