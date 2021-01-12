import React, { useState, useEffect, useMemo } from "react";
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
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import logo from "../../assets/logo.svg";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    //toolbar minimum height
    ...theme.mixins.toolbar,
    marginBottom: "1em",
    [theme.breakpoints.down("sm")]: {
      marginBottom: 0,
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "-0.5em",
    },
  },
  logoContainer: {
    padding: 0,
  },
  logo: {
    height: "5.5em",
    [theme.breakpoints.down("sm")]: {
      height: "4.5em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "3.5em",
    },
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
    marginTop: "7px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
    padding: 0,
    marginRight: "0.75em",
    [theme.breakpoints.down("xs")]: {
      marginRight: "0.5em",
    },
  },
  drawerIcon: {
    height: "1.75em",
    width: "1.75em",
    [theme.breakpoints.down("xs")]: {
      height: "1.5em",
      width: "1.5em",
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerItemSelected: {
    opacity: 1,
  },
  drawerItemEstimate: {
    ...theme.typography.tab,
    backgroundColor: theme.palette.common.blue,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.common.hoverBlue,
    },
  },
  drawerItemEstimateSelected: {
    backgroundColor: theme.palette.common.hoverBlue,
    opacity: 1,
    "&:hover": {
      backgroundColor: theme.palette.common.hoverBlue,
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
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

const menuOptions = [
  {
    name: "Software Development",
    link: "/software",
    activeTabIndex: 1,
    activeMenuIndex: 0,
  },
  {
    name: "App Development",
    link: "/mobileapps",
    activeTabIndex: 1,
    activeMenuIndex: 1,
  },
  {
    name: "Web Development",
    link: "/websites",
    activeTabIndex: 1,
    activeMenuIndex: 2,
  },
];

const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const smaller = useMediaQuery(theme.breakpoints.down("sm"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selected, setSelected] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleMouseOver = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
    if (window.location.pathname === "/services") setSelected(null);
  };

  const handleClose = (e) => {
    setOpenMenu(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenMenu(false);
    }
  };

  const handleMouseOverMenu = (e) => {
    setOpenMenu(true);
  };

  const handleClickMenu = (e, i) => {
    setSelected(i);
  };

  const handleCompanyLogo = () => setValue(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const routes = useMemo(
    () => [
      { label: "Home", link: "/", activeTabIndex: 0 },
      {
        label: "Services",
        link: "/services",
        activeTabIndex: 1,
        ariaOwns: anchorEl ? "simple-menu" : undefined,
        ariahaspopup: anchorEl ? "true" : undefined,
        mouseover: (event) => handleMouseOver(event),
        mouseleave: (event) => handleClose(event),
      },
      { label: "Revolution", link: "/revolution", activeTabIndex: 2 },
      { label: "About Us", link: "/about", activeTabIndex: 3 },
      { label: "Contact Us", link: "/contact", activeTabIndex: 4 },
    ],
    [anchorEl]
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        anchor="right"
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              key={route.activeTabIndex}
              classes={{
                selected: classes.drawerItemSelected,
                root: classes.drawerItem,
              }}
              divider
              button
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeTabIndex);
              }}
              component={Link}
              to={route.link}
              selected={value === route.activeTabIndex}
            >
              <ListItemText disableTypography>{route.label}</ListItemText>
            </ListItem>
          ))}
          <ListItem
            classes={{ root: classes.drawerItemEstimate }}
            className={
              value === 5
                ? classes.drawerItemEstimateSelected
                : classes.drawerItemEstimate
            }
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            component={Link}
            to="/estimate"
            selected={false}
          >
            <ListItemText disableTypography>Get Estimate</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.drawerIconContainer}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  const tabs = (
    <React.Fragment>
      <Tabs
        className={classes.tabContainer}
        value={value <= 4 ? value : false}
        onChange={handleChange}
        indicatorColor="primary"
      >
        {routes.map((route) => (
          <Tab
            key={route.activeTabIndex}
            label={route.label}
            className={classes.tab}
            component={Link}
            to={route.link}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariahaspopup}
            onMouseOver={route.mouseover}
            onMouseLeave={route.mouseleave}
          />
        ))}
      </Tabs>
      <Button
        onClick={() => setValue(5)}
        component={Link}
        to="/estimate"
        variant="contained"
        color="secondary"
        className={classes.button}
      >
        Get Estimate
      </Button>

      <Popper
        open={openMenu}
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
                      classes={{
                        root: classes.menuItem,
                        selected: classes.drawerItemSelected,
                      }}
                      component={Link}
                      to={option.link}
                      onClick={(e) => {
                        handleClickMenu(e, i);
                        handleClose();
                        setValue(1);
                      }}
                      selected={i === selected && value === 1}
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
    </React.Fragment>
  );

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeTabIndex) {
            setValue(route.activeTabIndex);
            if (
              route.activeMenuIndex >= 0 &&
              selected !== route.activeMenuIndex
            ) {
              setSelected(route.activeMenuIndex);
            } else {
              setSelected(null);
            }
          }
          break;
        default:
          break;
      }
    });
    if (window.location.pathname === "/estimate") setValue(5);
  }, [value, selected, routes]);
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary" className={classes.appbar}>
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
            {smaller ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
