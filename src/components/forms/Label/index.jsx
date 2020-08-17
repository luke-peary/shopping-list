import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.neutral[800]};
`;

const Label = ({ text }) => {
  return <StyledLabel>{text}</StyledLabel>;
};

export default Label;
