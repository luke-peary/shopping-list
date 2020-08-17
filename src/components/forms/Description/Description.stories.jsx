import React from "react";
import Description from ".";

export default {
  component: Description,
  title: "Forms / Description",
};

export const WithControls = ({ text = "Use controls to change this text" }) => {
  return <Description text={text} />;
};

WithControls.argTypes = {
  text: {
    control: { type: "text" },
  },
};
