import styled, { css } from "styled-components";

const BaseStyles = ({ theme }) => css`
  font-family: ${theme.type.fonts.copy};
  & + p {
    margin-top: 16px;
  }
`;

const SmallStyles = ({ theme }) => css`
  font-size: ${theme.type.copy.small.fontSize};
  line-height: ${theme.type.copy.small.lineHeight};
`;

const MediumStyles = ({ theme }) => css`
  font-size: ${theme.type.copy.medium.fontSize};
  line-height: ${theme.type.copy.medium.lineHeight};
`;

const LargeStyles = ({ theme }) => css`
  font-size: ${theme.type.copy.large.fontSize};
  line-height: ${theme.type.copy.large.lineHeight};
`;

export const getVariantStyles = (props) => {
  switch (props.variant) {
    case "small":
      return SmallStyles(props);
    case "medium":
      return MediumStyles(props);
    case "large":
      return LargeStyles(props);
    default:
      return MediumStyles(props);
  }
};

export default styled.span`
  ${(props) => BaseStyles(props)};
  ${getVariantStyles};
`;
