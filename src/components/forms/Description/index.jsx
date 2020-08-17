import React from "react";
import styled from "styled-components";

const StyledDescription = styled.span`
  display: block;
`;

const Description = ({ text }) => {
  return <StyledDescription>{text}</StyledDescription>;
};

export default Description;
