import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

import logo from "../../assets/logo.svg";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '-0.5em',
  },
  logo: {
    height: '3em'
  },
}));

const ElevationScroll = (props) => {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }


const Header = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="secondary">
          <Toolbar disableGutters={true} variant='dense'>
            <img src={logo} className={classes.logo} alt="company logo" />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
