import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyles from "./components/GlobalStyles";
import Heading from "./components/Heading";
import Text from "./components/Text";
import Button from "./components/Button";
import Container from "./components/Container";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Heading>Some Heading</Heading>

        <Text>Some Text</Text>

        <Button variant="primary">A button</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
