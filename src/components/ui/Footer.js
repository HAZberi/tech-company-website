import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden"
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import FooterAdornment from "../../svgToReact/FooterAdornment.js";
import MobileFooterAdornment from "../../svgToReact/MobileFooterAdornment.js";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.orange,
    width: "100%",
    overflowX: "hidden",
    zIndex: theme.zIndex.modal + 1,
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      height: "5em",
      overflowX: "visible"
    },
  },
  adornment: {
    width: "21em",
    verticalAlign: "bottom",
    overflowY: "visible",
    [theme.breakpoints.down("md")]: {
      width: "20em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  mainContainer: {
    position: "absolute",
    marginTop: "auto",
    [theme.breakpoints.down("md")]: {
      marginTop: "0.5rem",
      justifyContent: "flex-end",
      paddingRight: "12.5%",
    },
  },
  link: {
    ...theme.typography.link,
    opacity: 0.7,
    textDecoration: "none",
    cursor: "pointer",
    whiteSpace: "nowrap",
    "&:hover": {
      opacity: 1,
    },
  },
  icon: {
    width: "3.5rem",
    height: "3.5rem",
    [theme.breakpoints.down("sm")]: {
      width: "7rem",
      height: "7rem"
    },
    [theme.breakpoints.down("xs")]: {
      width: "6rem",
      height: "6rem"
    }
  },
  mediaIconsContainer: {
    position: "absolute",
    marginTop: "-3.5rem",
    right: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      marginTop: "-10.25rem",
      right: "0rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "-6.5rem",
    },
  }
}));

const Footer = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const medium = useMediaQuery(theme.breakpoints.down("md"));
  const smaller = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <footer className={classes.footer}>
      <Hidden smDown>
        <Grid
          container
          justify="center"
          className={classes.mainContainer}
          spacing={medium ? 5 : 10}
        >
          <Grid item>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                style={window.matchMedia('(max-width: 1050px)').matches ? {display: "none"} : {}}
                onClick={() => {
                  props.setValue(0);
                  props.setSelected(null);
                }}
                component={Link}
                to="/"
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelected(null);
                }}
                component={Link}
                to="/services"
              >
                Services
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelected(0);
                }}
                component={Link}
                to="/software"
              >
                Software Development
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelected(1);
                }}
                component={Link}
                to="/mobileapps"
              >
                App Development
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelected(2);
                }}
                component={Link}
                to="/websites"
              >
                Web Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(2);
                  props.setSelected(null);
                }}
                component={Link}
                to="/revolution"
              >
                Revolution
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(2);
                  props.setSelected(null);
                }}
                component={Link}
                to="/revolution"
              >
                Vision
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(2);
                  props.setSelected(null);
                }}
                component={Link}
                to="/revolution"
              >
                Technology
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(2);
                  props.setSelected(null);
                }}
                component={Link}
                to="/revolution"
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(3);
                  props.setSelected(null);
                }}
                component={Link}
                to="/about"
              >
                About Us
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(3);
                  props.setSelected(null);
                }}
                component={Link}
                to="/about"
              >
                History
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(3);
                  props.setSelected(null);
                }}
                component={Link}
                to="/about"
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(4);
                  props.setSelected(null);
                }}
                component={Link}
                to="/contact"
              >
                Contact Us
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(5);
                  props.setSelected(null);
                }}
                component={Link}
                to="/estimate"
              >
                Get Estimate
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      {smaller ? <MobileFooterAdornment className={classes.adornment} /> : <FooterAdornment className={classes.adornment} />}
      <Grid container justify="flex-end" spacing={smaller ? 7 : 2} className={classes.mediaIconsContainer}>
        <Grid item component={'a'} href="https://facebook.com" className={classes.icon}><img alt="facebook-icon" src={facebook}  rel="noopener noreferrer" target="_blank" /></Grid>
        <Grid item component={"a"} href="https://instagram.com" className={classes.icon}><img alt="facebook-icon" src={instagram} rel="noopener noreferrer" target="_blank" /></Grid>
        <Grid item component={"a"} href="https://twitter.com"  className={classes.icon}><img alt="facebook-icon" src={twitter} rel="noopener noreferrer" target="_blank" /></Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
