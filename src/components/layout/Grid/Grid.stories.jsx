import React from "react";
import styled from "styled-components";
import Grid from ".";
import GridItem from "../GridItem";
import Container from "../Container";

export default {
  component: Grid,
  title: "Layout / Grid",
};

const Demo = styled.div`
  background: pink;
  text-align: center;
  padding: 8px 0;
`;

export const WithControls = ({
  hasGutter = true,
  hasVerticalGutter = true,
}) => (
  <Container>
    <Grid hasGutter={hasGutter} hasVerticalGutter={hasVerticalGutter}>
      <GridItem width={6}>
        <Demo>1/2</Demo>
      </GridItem>
      <GridItem width={6}>
        <Demo>1/2</Demo>
      </GridItem>
      <GridItem width={6}>
        <Demo>1/2</Demo>
      </GridItem>
      <GridItem width={6}>
        <Demo>1/2</Demo>
      </GridItem>
      <GridItem width={6}>
        <Demo>1/2</Demo>
      </GridItem>
      <GridItem width={6}>
        <Demo>1/2</Demo>
      </GridItem>
    </Grid>
  </Container>
);

WithControls.argTypes = {
  hasGutter: {
    control: { type: "boolean" },
  },
  hasVerticalGutter: {
    control: { type: "boolean" },
  },
};
