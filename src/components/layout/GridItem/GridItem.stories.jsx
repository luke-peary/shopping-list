import React from "react";
import Grid from "../Grid";
import GridItem from ".";
import styled from "styled-components";

export default {
  component: GridItem,
  title: "Layout / GridItem",
};

const Demo = styled.div`
  background: pink;
  text-align: center;
  padding: 8px 0;
`;

export const WithControls = () => {
  return (
    <>
      <Grid hasGutter hasVerticalGutter>
        <GridItem width={6}>
          <Demo>1/2</Demo>
        </GridItem>
        <GridItem width={6}>
          <Demo>1/2</Demo>
        </GridItem>

        <GridItem width={4}>
          <Demo>1/3</Demo>
        </GridItem>
        <GridItem width={4}>
          <Demo>1/3</Demo>
        </GridItem>
        <GridItem width={4}>
          <Demo>1/3</Demo>
        </GridItem>

        <GridItem width={3}>
          <Demo>1/4</Demo>
        </GridItem>
        <GridItem width={3}>
          <Demo>1/4</Demo>
        </GridItem>
        <GridItem width={3}>
          <Demo>1/4</Demo>
        </GridItem>
        <GridItem width={3}>
          <Demo>1/4</Demo>
        </GridItem>
      </Grid>
    </>
  );
};
