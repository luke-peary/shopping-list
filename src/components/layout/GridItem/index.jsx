import React from "react";
import { StyledGridItem } from "./GridItem.styles";

const GridItem = ({ width, push, pull, children }) => {
  return (
    <StyledGridItem width={width} push={push} pull={pull}>
      {children}
    </StyledGridItem>
  );
};

export default GridItem;
