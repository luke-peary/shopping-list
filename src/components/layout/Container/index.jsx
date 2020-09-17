import React from "react";
import styled, { css } from "styled-components";
import { mediaMap, media } from "../../../utils/mixins";

const StyledContainer = styled.div`
  width: 100%;
  padding: 0 24px;
  margin: 0 auto;

  ${media("md")`
    padding: 0;
  `}

  ${({ isFluid, theme }) => {
    const containerType = isFluid ? "fluid" : "fixed";

    return css`
      ${mediaMap(theme.container[containerType], (value) => {
        return css`
          width: ${value};
        `;
      })}
    `;
  }}
`;

const Container = ({ children, isFluid }) => {
  return <StyledContainer isFluid={isFluid}>{children}</StyledContainer>;
};

export default Container;
