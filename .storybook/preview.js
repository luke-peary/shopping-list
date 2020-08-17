import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../src/components/GlobalStyles";
import Container from "../src/components/layout/Container";
import theme from "../src/theme";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Story />
      </Container>
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
