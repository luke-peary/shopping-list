import React from "react";
import Heading from ".";

export default {
  component: Heading,
  title: "Typography / Heading",
};

export const WithControls = ({
  variant = "title",
  children = "Use controls to edit this heading",
}) => (
  <Heading as="h1" variant={variant}>
    {children}
  </Heading>
);

WithControls.argTypes = {
  variant: {
    control: { type: "select", options: ["title", "large", "medium", "small"] },
  },
  children: {
    control: { type: "text" },
  },
};

export const AllVariants = () => (
  <>
    <Heading as="h1" variant="title">
      Title
    </Heading>
    <Heading as="h2" variant="large">
      Heading Large
    </Heading>
    <Heading as="h3" variant="medium">
      Heading Medium
    </Heading>
    <Heading as="h4" variant="small">
      Heading Small
    </Heading>
  </>
);

AllVariants.parameters = {
  controls: { hideNoControlsWarning: true },
};
