import React from "react";
import styled from "styled-components";
import Label from "../Label";
import TextInput from "../TextInput";
import Description from "../Description";
import Error from "../Error";

const StyledFieldset = styled.fieldset`
  border: 0;
  * + * {
    margin-top: 0.8rem;
  }
`;

const Fieldset = ({
  label,
  description,
  hasError,
  errorMessage,
  inputType,
}) => {
  return (
    <StyledFieldset>
      <Label text={label} />
      <TextInput hasError={hasError} type={inputType} />
      {description && <Description text={description} />}
      {hasError && <Error message={errorMessage} />}
    </StyledFieldset>
  );
};

export default Fieldset;
