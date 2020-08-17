import React from "react";
import Error from ".";

export default {
  component: Error,
  title: "Forms / Error",
};

export const WithControls = ({
  message = "Use controls to change this text",
}) => {
  return <Error message={message} />;
};

WithControls.argTypes = {
  message: {
    control: { type: "text" },
  },
};
