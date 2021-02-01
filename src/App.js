import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/Theme.js";

import Header from "./components/ui/Header.js";
import Footer from "./components/ui/Footer.js";
import LandingPage from "./components/LandingPage.js";
import Services from "./components/Services.js";
import Software from "./components/Software.js";
const App = () => {
  const [value, setValue] = useState(0);
  const [selected, setSelected] = useState(null);
  return (
    <ThemeProvider theme={theme}>
      <div>
        <BrowserRouter>
          <Header
            value={value}
            setValue={setValue}
            selected={selected}
            setSelected={setSelected}
          />
          <Switch>
            {
              
                /* if we need to passdown props to a component within a route tag
                We should use render prop function to do so. See below using diff */
              
            }
            <Route
              exact
              path="/"
              render={(props) => (
                <LandingPage
                  {...props}
                  setValue={setValue}
                  setSelected={setSelected}
                />
              )}
            />
            <Route
              exact
              path="/services"
              render={(props) => (
                <Services
                  {...props}
                  setValue={setValue}
                  setSelected={setSelected}
                />
              )}
            />
            <Route
              exact
              path="/software"
              render={(props) => (
                <Software
                  {...props}
                  setValue={setValue}
                  setSelected={setSelected}
                />
              )}
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
              component={() => <div>Get your Estimate</div>}
            />
          </Switch>
          <Footer setValue={setValue} setSelected={setSelected} />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
