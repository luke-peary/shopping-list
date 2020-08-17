import React from "react";
import Label from ".";

export default {
  component: Label,
  title: "Forms / Label",
};

export const WithControls = ({ text = "Use controls to change this text" }) => {
  return <Label text={text} />;
};

WithControls.argTypes = {
  text: {
    control: { type: "text" },
  },
};
