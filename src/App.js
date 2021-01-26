import React , {useState} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/Theme.js";

import Header from "./components/ui/Header.js";
import Footer from "./components/ui/Footer.js";
const App = () => {
  const [value, setValue] = useState(0);
  const [selected, setSelected] = useState(null);
  return (
    <ThemeProvider theme={theme}>
      <div>
        <BrowserRouter>
          <Header value={value} setValue={setValue} selected={selected} setSelected={setSelected}/>
          <Switch>
            <Route exact path="/" component={() => <div style={{marginBottom: "2000px"}}>Home</div>} />
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
              component={() => <div>Get your Estimate</div>}
            />
          </Switch>
          <Footer value={value} setValue={setValue} selected={selected} setSelected={setSelected}/>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
