import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/ui/Theme.js";

import Header from "./components/ui/Header.js";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={() => <div>Home</div>} />
            <Route
              exact
              path="/services"
              component={() => <div>Services</div>}
            />
            <Route
              exact
              path="/software"
              component={() => <div>Custom Software Developement</div>}
            />
            <Route
              exact
              path="/mobileapps"
              component={() => <div>Mobile App Development</div>}
            />
            <Route
              exact
              path="/websites"
              component={() => <div>Web Development</div>}
            />
            <Route
              exact
              path="/revolution"
              component={() => <div>The Revolution</div>}
            />
            <Route exact path="/about" component={() => <div>About us</div>} />
            <Route
              exact
              path="/contact"
              component={() => <div>Contact us</div>}
            />
            <Route
              exact
              path="/estimate"
              component={() => <div>Get you Estimate</div>}
            />
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
