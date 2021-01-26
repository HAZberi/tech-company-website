import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
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
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMore from "@material-ui/icons/ExpandMore";

import logo from "../../assets/logo.svg";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    //toolbar minimum height
    ...theme.mixins.toolbar,
    marginBottom: "1.75em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "0.2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0.2em",
    },
  },
  logoContainer: {
    padding: 0,
  },
  logo: {
    height: "6.5em",
    [theme.breakpoints.down("md")]: {
      height: "4.9em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "4em",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 9,
    marginLeft: "15px",
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.25em",
      marginLeft: "30px",
    },
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "30px",
    marginLeft: "15px",
    marginRight: "15px",
    padding: "0.6em",
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.25em",
      marginLeft: "30px",
      marginRight: "20px",
    },
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
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  drawerItemEstimateSelected: {
    backgroundColor: theme.palette.secondary.dark,
    opacity: 1,
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
  accordian: {
    backgroundColor: theme.palette.common.orange,
    "&.Mui-expanded": {
      margin: 0,
      borderBottom: 0,
    },
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    "&::before": {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
  },
  accordianMenuDetail: {
    padding: 0,
    backgroundColor: theme.palette.primary.light,
  },
  accordianSerivcesLink: {
    color: "inherit",
    textDecoration: "none",
  },
  accordianSummary: {
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.08)",
    },
  },
  accordianSummarySelected: {
    backgroundColor: "rgba(0, 0, 0, 0.08)",
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

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const [openDrawer, setOpenDrawer] = useState(false);
  const [openDrawerMenu, setOpenDrawerMenu] = useState(false);

  const handleMouseOver = useCallback((e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
    if (window.location.pathname === "/services") props.setSelected(null);
  },[props]);

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
    props.setSelected(i);
  };

  const handleCompanyLogo = () => props.setValue(0);
  const handleChange = (e, newValue) => {
    props.setValue(newValue);
  };

  const closeDrawerAll = () => {
    setOpenDrawer(false);
    setOpenDrawerMenu(false);
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
    [anchorEl, handleMouseOver]
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
          {routes.map((route) =>
            route.label === "Services" ? (
              <Accordion
                classes={{ root: classes.accordian }}
                elevation={0}
                key={route.activeTabIndex}
                expanded={openDrawerMenu}
                onChange={() => {
                  setOpenDrawerMenu(!openDrawerMenu);
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore color="secondary" />}
                  aria-label="Expand"
                  aria-controls="services-list-expand"
                  id="list-of-services"
                  className={
                    props.value === 1
                      ? classes.accordianSummarySelected
                      : classes.accordianSummary
                  }
                >
                  <ListItemText
                    disableTypography
                    classes={{ root: classes.drawerItem }}
                    className={
                      route.activeTabIndex === props.value
                        ? classes.drawerItemSelected
                        : classes.drawerItem
                    }
                    onClick={(e) => {
                      e.stopPropagation();
                      closeDrawerAll();
                      props.setSelected(null);
                      props.setValue(route.activeTabIndex);
                    }}
                  >
                    <Link
                      to={route.link}
                      className={classes.accordianSerivcesLink}
                    >
                      {route.label}
                    </Link>
                  </ListItemText>
                </AccordionSummary>
                <AccordionDetails className={classes.accordianMenuDetail}>
                  <List disablePadding>
                    {menuOptions.map((route) => (
                      <ListItem
                        key={route.activeMenuIndex}
                        classes={{
                          selected: classes.drawerItemSelected,
                          root: classes.drawerItem,
                        }}
                        divider
                        button
                        onClick={() => {
                          closeDrawerAll();
                          props.setSelected(route.activeMenuIndex);
                          props.setValue(route.activeTabIndex);
                        }}
                        component={Link}
                        to={route.link}
                        selected={
                          props.selected === route.activeMenuIndex &&
                          props.value === route.activeTabIndex
                        }
                      >
                        <ListItemText disableTypography>
                          {route.name}
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            ) : (
              <ListItem
                key={route.activeTabIndex}
                classes={{
                  selected: classes.drawerItemSelected,
                  root: classes.drawerItem,
                }}
                divider
                button
                onClick={() => {
                  closeDrawerAll();
                  props.setValue(route.activeTabIndex);
                  props.setSelected(null);
                }}
                component={Link}
                to={route.link}
                selected={props.value === route.activeTabIndex}
              >
                <ListItemText disableTypography>{route.label}</ListItemText>
              </ListItem>
            )
          )}
          <ListItem
            classes={{ root: classes.drawerItemEstimate }}
            className={
              props.value === routes.length
                ? classes.drawerItemEstimateSelected
                : classes.drawerItemEstimate
            }
            divider
            button
            onClick={() => {
              closeDrawerAll();
              props.setSelected(null);
              props.setValue(routes.length);
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
        onClick={() => {
          setOpenDrawer(!openDrawer);
          setOpenDrawerMenu(false);
        }}
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
        value={props.value <= routes.length - 1 ? props.value : false}
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
        onClick={() => props.setValue(5)}
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
                        props.setValue(1);
                      }}
                      selected={i === props.selected && props.value === 1}
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
          if (props.value !== route.activeTabIndex) {
            props.setValue(route.activeTabIndex);
            if (
              route.activeMenuIndex >= 0 &&
              props.selected !== route.activeMenuIndex
            ) {
              props.setSelected(route.activeMenuIndex);
            } else {
              props.setSelected(null);
            }
          }
          break;
        default:
          break;
      }
    });
    if (window.location.pathname === "/estimate") props.setValue(5);
  }, [props.value, props.selected, routes, props]);
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary" className={classes.appbar}>
          <Toolbar disableGutters={true}>
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
