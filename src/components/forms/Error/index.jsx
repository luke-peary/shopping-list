import React from "react";
import styled from "styled-components";

const StyledError = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.negative[600]};
`;

const Error = ({ message }) => {
  return <StyledError>{message}</StyledError>;
};

export default Error;
