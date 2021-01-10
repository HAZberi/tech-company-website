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
    opacity: 0.6,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.blue,
    opacity: 1,
    color:'white',
    "&:hover": {
      backgroundColor: theme.palette.common.hoverBlue,
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
    setAnchorEl(null);
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
        <List disablePadding>
          <ListItem
            className={classes.drawerItem}
            divider
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to="/"
          >
            <ListItemText disableTypography>Home</ListItemText>
          </ListItem>
          <ListItem
            className={classes.drawerItem}
            divider
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to="/services"
          >
            <ListItemText disableTypography>Services</ListItemText>
          </ListItem>
          <ListItem
            className={classes.drawerItem}
            divider
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to="/revolution"
          >
            <ListItemText disableTypography>The Revolution</ListItemText>
          </ListItem>
          <ListItem
            className={classes.drawerItem}
            divider
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to="/about"
          >
            <ListItemText disableTypography>About Us</ListItemText>
          </ListItem>
          <ListItem
            className={[classes.drawerItemEstimate, classes.drawerItem]}
            divider
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to="/estimate"
          >
            <ListItemText disableTypography>
              Get Estimate
            </ListItemText>
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
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
      >
        <Tab label="Home" className={classes.tab} component={Link} to="/" />
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
      <Button onClick={()=>setValue(null)} component={Link} to="/estimate" variant="contained" color="secondary" className={classes.button}>
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
                      classes={{ root: classes.menuItem }}
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
    switch (window.location.pathname) {
      case "/":
        if (value !== 0) setValue(0);
        break;
      case "/services":
        if (value !== 1) setValue(1);
        else setSelected(null);
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
      case "/estimate": 
        if (value !== null) setValue(null);
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
            {smaller ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
