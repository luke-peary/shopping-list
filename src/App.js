import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyles from "./components/GlobalStyles";
import ShoppingList from "./pages/ShoppingList";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ShoppingList />
    </ThemeProvider>
  );
}

export default App;
