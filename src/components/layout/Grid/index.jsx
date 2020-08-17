import React from "react";
import styled, { css } from "styled-components";
import { StyledGridItem } from "../GridItem/GridItem.styles";

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${({ hasGutter }) =>
    hasGutter &&
    css`
      margin-right: -15px;
      margin-left: -15px;

      > * {
        padding-right: 15px;
        padding-left: 15px;
      }
    `}

  ${({ hasVerticalGutter }) =>
    hasVerticalGutter &&
    css`
      margin-top: -16px;

      ${StyledGridItem} {
        margin-top: 16px;
      }
    `}
`;

const Grid = ({ hasGutter = true, hasVerticalGutter = true, children }) => {
  return (
    <StyledGrid hasGutter={hasGutter} hasVerticalGutter={hasVerticalGutter}>
      {children}
    </StyledGrid>
  );
};

export default Grid;
