import React from "react";
import Button from ".";

export default {
  component: Button,
  title: "Actions / Button",
};

export const Text = ({ variant, children }) => (
  <Button variant={variant}>{children}</Button>
);

Text.args = { variant: "primary", children: "Click Me" };
Text.argTypes = {
  variant: {
    control: { type: "inline-radio", options: ["primary", "secondary"] },
  },
};
