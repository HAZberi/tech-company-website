import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";

import logo from "../../assets/logo.svg";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "-0.5em",
  },
  logoContainer: {
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
    borderRadius: "30px",
    marginLeft: "20px",
    marginRight: "20px",
  },
  menu: {
    backgroundColor: theme.palette.common.orange,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
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
};

const Header = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleMouseOver = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  };

  const handleMouseOverMenu = (e) => {
    setOpen(true);
  };

  const handleClickMenu = (e, i) => {
    setSelected(i);
  };

  const menuOptions = [
    {
      name: "Software Development",
      link: "/software",
    },
    {
      name: "App Development",
      link: "/mobileapps",
    },
    {
      name: "Web Development",
      link: "/websites",
    },
  ];
  const handleChange = (e, value) => setValue(value);
  const handleCompanyLogo = () => setValue(0);

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (value !== 0) setValue(0);
        break;
      case "/services":
        if (value !== 1) setValue(1);
        break;
      case "/software":
        if (value !== 1) {
          setValue(1);
          setSelected(0);
        }
        break;
      case "/mobileapps":
        if (value !== 1) {
          setValue(1);
          setSelected(1);
        }
        break;
      case "/websites":
        if (value !== 1) {
          setValue(1);
          setSelected(2);
        }
        break;
      case "/revolution":
        if (value !== 2) setValue(2);
        break;
      case "/about":
        if (value !== 3) setValue(3);
        break;
      case "/contact":
        if (value !== 4) setValue(4);
        break;
      default:
        break;
    }
  }, [value]);
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters={true} variant="dense">
            <Button
              disableRipple
              className={classes.logoContainer}
              component={Link}
              to="/"
              onClick={handleCompanyLogo}
            >
              <img src={logo} className={classes.logo} alt="company logo" />
            </Button>
            <Tabs
              className={classes.tabContainer}
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
            >
              <Tab
                label="Home"
                className={classes.tab}
                component={Link}
                to="/"
              />
              <Tab
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? "true" : undefined}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleClose}
                label="Services"
                className={classes.tab}
                component={Link}
                to="/services"
              />
              <Tab
                label="The Revolution"
                className={classes.tab}
                component={Link}
                to="/revolution"
              />
              <Tab
                label="About Us"
                className={classes.tab}
                component={Link}
                to="/about"
              />
              <Tab
                label="Contact Us"
                className={classes.tab}
                component={Link}
                to="/contact"
              />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Get Estimate
            </Button>

            <Popper
              open={open}
              anchorEl={anchorEl}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper elevation={0} classes={{ root: classes.menu }}>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        onMouseLeave={handleClose}
                        onMouseOver={handleMouseOverMenu}
                        autoFocusItem={false}
                        id="menu-list-grow"
                        onKeyDown={handleListKeyDown}
                      >
                        {menuOptions.map((option, i) => (
                          <MenuItem
                            key={i}
                            classes={{ root: classes.menuItem }}
                            component={Link}
                            to={option.link}
                            onClick={(e) => {
                              handleClickMenu(e, i);
                              handleClose();
                              setValue(1);
                            }}
                            selected={i === selected}
                          >
                            {option.name}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
