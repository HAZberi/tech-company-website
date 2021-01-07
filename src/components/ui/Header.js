import React, { useState, useEffect, useRef } from "react";
import {Link} from 'react-router-dom';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from "@material-ui/styles";

import logo from "../../assets/logo.svg";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "-0.5em",
  },
  logoContainer : {
      padding: 0,
  },
  logo: {
    height: "4em",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "20px",
  },
  button: {
      ...theme.typography.estimate,
      borderRadius: '30px',
      marginLeft: '20px',
      marginRight: '20px',
  }
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
};

const Header = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleMouseOver = (e) => {
      setAnchorEl(e.currentTarget);
      setOpen(true);
  }

  const handleClose = (e) => {
      setAnchorEl(false);
      setOpen(false);
  }
  const handleChange = (e, value) => setValue(value);
    const handleCompanyLogo = () => setValue(0);

  useEffect(()=>{
    if(window.location.pathname === '/' && value !== 0) setValue(0);
    if(window.location.pathname === '/services' && value !== 1) setValue(1);
    if(window.location.pathname === '/revolution' && value !== 2) setValue(2);
    if(window.location.pathname === '/about' && value !== 3) setValue(3);
    if(window.location.pathname === '/contact' && value !== 4) setValue(4);
  },[value])
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters={true} variant="dense">
              <Button disableRipple className={classes.logoContainer} component={Link} to='/' onClick={handleCompanyLogo}>
                  <img src={logo} className={classes.logo} alt="company logo" />
              </Button>
            <Tabs
              className={classes.tabContainer}
              value={value}
              onChange={handleChange}
              indicatorColor='primary'
            >
              <Tab label="Home" className={classes.tab} component={Link} to="/"/>
              <Tab 
                aria-owns={anchorEl ? 'simple-menu' : undefined}
                aria-haspopup={anchorEl ? 'true' : undefined}
                onMouseOver={handleMouseOver}
                label="Services" 
                className={classes.tab} 
                component={Link} 
                to="/services"
            />
              <Tab label="The Revolution" className={classes.tab} component={Link} to="/revolution"/>
              <Tab label="About Us" className={classes.tab} component={Link} to="/about"/>
              <Tab label="Contact Us" className={classes.tab} component={Link} to="/contact"/>
            </Tabs>
            <Button 
                variant="contained" 
                color="secondary"
                className={classes.button}
            >
                Get Estimate</Button>
            <Menu
                onClose={handleClose}
                id='simple-menu'
                anchorEl={anchorEl}
                open={open}
                MenuListProps={{onMouseLeave: handleClose}}
            >
                    <MenuItem onClick={handleClose} component={Link} to="/customsoftware">Custom Software Development</MenuItem>   
                    <MenuItem onClick={handleClose} component={Link} to="/mobileapps">Mobile App Development</MenuItem>   
                    <MenuItem onClick={handleClose} component={Link} to="/websites">Website Developement</MenuItem>   
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
