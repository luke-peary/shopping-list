import React from "react";
import Fieldset from ".";
import Grid from "../../layout/Grid";
import GridItem from "../../layout/GridItem";

export default {
  component: Fieldset,
  title: "Forms / Fieldset",
};

export const WithControls = ({
  label = "Label",
  description = "Description",
  hasError = true,
  errorMessage = "Error message",
  inputType = "text",
}) => {
  return (
    <Grid>
      <GridItem width={4}>
        <Fieldset
          label={label}
          description={description}
          inputType={inputType}
          hasError={hasError}
          errorMessage={errorMessage}
        />
      </GridItem>
    </Grid>
  );
};

WithControls.argTypes = {
  label: {
    control: { type: "text" },
  },
  description: {
    control: { type: "text" },
  },
  inputType: {
    control: { type: "select", options: ["text", "number"] },
  },
  hasError: {
    control: { type: "boolean" },
  },
  errorMessage: {
    control: { type: "text" },
  },
};
