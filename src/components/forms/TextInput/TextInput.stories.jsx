import React from "react";
import TextInput from ".";

export default {
  component: TextInput,
  title: "Forms / TextInput",
};

export const WithControls = ({ hasError = false }) => {
  return <TextInput hasError={hasError} />;
};

WithControls.argTypes = {
  hasError: {
    control: { type: "boolean" },
  },
};
