import React from "react";
import styled from "styled-components";
import Container from ".";

export default {
  component: Container,
  title: "Layout / Container",
};

const Box = styled.div`
  background: pink;
  min-height: 400px;
`;

export const WithControls = ({ isFluid = false }) => {
  return (
    <Container isFluid={isFluid}>
      <Box />
    </Container>
  );
};

WithControls.argTypes = {
  isFluid: {
    control: { type: "boolean" },
  },
};
