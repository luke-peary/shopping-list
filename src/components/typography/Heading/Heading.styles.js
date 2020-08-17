import styled, { css } from "styled-components";
import { media } from "../../../utils/mixins";

const BaseStyles = ({ theme }) => css`
  font-family: ${theme.type.fonts.heading};
  display: block;
`;

const VariantStyles = ({ variant, theme }) => {
  const { fontSizes, lineHeights } = theme.type;

  if (variant === "small") {
    return css`
      font-size: ${fontSizes[3]};
      line-height: ${lineHeights[2]};
      ${media("md")`
        font-size: ${fontSizes[5]};
        line-height: ${lineHeights[3]};
      `}
    `;
  }

  if (variant === "large") {
    return css`
      font-size: ${fontSizes[6]};
      line-height: ${lineHeights[3]};
      ${media("md")`
        font-size: ${fontSizes[8]};
        line-height: ${lineHeights[6]};
      `}
    `;
  }

  if (variant === "title") {
    return css`
      font-size: ${fontSizes[8]};
      line-height: ${lineHeights[5]};
      ${media("md")`
        font-size: ${fontSizes[9]};
        line-height: ${lineHeights[7]};
      `}
    `;
  }

  return css`
    font-size: ${fontSizes[4]};
    line-height: ${lineHeights[2]};
    ${media("md")`
        font-size: ${fontSizes[7]};
        line-height: ${lineHeights[4]};
    `}
  `;
};

export default styled.div`
  ${(props) => BaseStyles(props)}
  ${(props) => VariantStyles(props)}
`;
