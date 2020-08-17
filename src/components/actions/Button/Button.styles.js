import styled, { css } from "styled-components";
import UnstyledButton from "../UnstyledButton";
import { media } from "../../../utils/mixins";

export const BaseStyles = css`
  font-family: "Lato";
  padding: 6px 30px;
  display: inline-block;
  border-radius: ${({ theme }) => theme.radii[0]};
  border-width: 2px;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    cursor: not-allowed;
  }

  ${media("md")`
    width: auto;
  `}
`;

const PrimaryStyles = ({ theme }) => {
  const {
    buttons: { primary },
  } = theme;

  return css`
    color: ${primary.color};
    background-color: ${primary.backgroundColor};
    border-color: ${primary.borderColor};
    &:hover {
      color: ${primary.hover.color};
      background-color: ${primary.hover.backgroundColor};
      border-color: ${primary.hover.borderColor};
    }
    &:focus {
      border-color: ${primary.focus.color};
    }
    &:disabled {
      color: ${primary.disabled.color};
      background-color: ${primary.disabled.backgroundColor};
      border-color: ${primary.disabled.borderColor};
    }
  `;
};

const SecondaryStyles = ({ theme }) => {
  const {
    buttons: { secondary },
  } = theme;

  return css`
    color: ${secondary.color};
    background-color: ${secondary.backgroundColor};
    border-color: ${secondary.borderColor};
    &:hover {
      color: ${secondary.hover.color};
      background-color: ${secondary.hover.backgroundColor};
      border-color: ${secondary.hover.borderColor};
    }
    &:focus {
      border-color: ${secondary.focus.color};
    }
    &:disabled {
      color: ${secondary.disabled.color};
      background-color: ${secondary.disabled.backgroundColor};
      border-color: ${secondary.disabled.borderColor};
    }
  `;
};

export const getVariantStyles = (props) => {
  switch (props.variant) {
    case "secondary":
      return SecondaryStyles(props);
    case "primary":
    default:
      return PrimaryStyles(props);
  }
};

export default styled(UnstyledButton)`
  ${BaseStyles};
  ${getVariantStyles};
`;
