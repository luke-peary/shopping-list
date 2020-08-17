import React from "react";
import StyledButton from "./Button.styles";

const Button = ({ children, variant, ...otherProps }) => {
  return (
    <StyledButton variant={variant} {...otherProps}>
      {children}
    </StyledButton>
  );
};

export default Button;
