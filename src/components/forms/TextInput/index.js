import React from "react";
import styled, { css } from "styled-components";

const InputStyles = ({ theme }) => css`
  border: 1px solid ${theme.colors.neutral[400]};
  border-radius: ${theme.radii[0]};
  height: calc(${theme.verticalGrid} * 6);
  width: 100%;
  padding: 0 calc(${theme.verticalGrid} * 2);

  &:hover {
    border-color: ${theme.colors.neutral[600]};
  }

  &:focus {
    outline: 0;
    border: 2px solid ${theme.colors.primary[600]};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08),
      inset 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  }
`;

const ErrorStyles = ({ theme }) => css`
  border: 1px solid ${theme.colors.negative[500]};
  &:focus {
    outline: 0;
    border: 2px solid ${theme.colors.negative[500]};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
  }
`;

const StyledInput = styled.input`
  ${InputStyles}
  ${({ hasError }) => hasError && ErrorStyles}
`;

const TextInput = ({ hasError }) => {
  return <StyledInput type="text" hasError={hasError} />;
};

export default TextInput;
