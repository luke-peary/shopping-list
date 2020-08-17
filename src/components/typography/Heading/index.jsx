import React from "react";
import StyledHeading from "./Heading.styles";

const Heading = ({ children, variant, as }) => {
  return (
    <StyledHeading as={as} variant={variant}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
