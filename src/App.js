import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/Theme.js";
import ScrollToTop from "./scripts/ScrollToTop.js";

import Header from "./components/ui/Header.js";
import Footer from "./components/ui/Footer.js";
import LandingPage from "./components/LandingPage.js";
import Services from "./components/Services.js";
import Software from "./components/Software.js";
import MobileApp from "./components/MobileApp.js";
import Websites from "./components/Websites.js";
import Revolution from "./components/Revolution.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Estimate from "./components/Estimate.js";

const App = () => {
  const [value, setValue] = useState(0);
  const [selected, setSelected] = useState(null);
  return (
    <ThemeProvider theme={theme}>
      <div>
        <BrowserRouter>
          <ScrollToTop />
          <Header
            value={value}
            setValue={setValue}
            selected={selected}
            setSelected={setSelected}
          />
          <Switch>
            {/* if we need to passdown props to a component within a route tag
                We should use render prop function to do so. See below using diff 
                See Default Examples when setting up router the first time
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
                */}
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
              render={(props) => (
                <MobileApp
                  {...props}
                  setValue={setValue}
                  setSelected={setSelected}
                />
              )}
            />
            <Route
              exact
              path="/websites"
              render={(props) => (
                <Websites
                  {...props}
                  setValue={setValue}
                  setSelected={setSelected}
                />
              )}
            />
            <Route
              exact
              path="/revolution"
              render={(props) => (
                <Revolution
                  {...props}
                  setValue={setValue}
                  setSelected={setSelected}
                />
              )}
            />
            <Route
              exact
              path="/about"
              render={(props) => (
                <About
                  {...props}
                  setValue={setValue}
                  setSelected={setSelected}
                />
              )}
            />
            <Route
              exact
              path="/contact"
              render={(props) => (
                <Contact
                  {...props}
                  setValue={setValue}
                  setSelected={setSelected}
                />
              )}
            />
            <Route
              exact
              path="/estimate"
              render={(props) => (
                <Estimate
                  {...props}
                  setValue={setValue}
                  setSelected={setSelected}
                />
              )}
            />
          </Switch>
          <Footer setValue={setValue} setSelected={setSelected} />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
