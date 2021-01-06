import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/ui/Theme.js";

import Header from "./components/ui/Header.js";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        Hello
      </div>
    </ThemeProvider>
  );
};

export default App;
