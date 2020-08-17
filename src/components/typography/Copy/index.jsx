import React from "react";
import StyledCopy from "./Copy.styles";

const Copy = ({ children, isInline = false, variant = "medium" }) => {
  return (
    <StyledCopy as={isInline ? "span" : "p"} variant={variant}>
      {children}
    </StyledCopy>
  );
};

export default Copy;
