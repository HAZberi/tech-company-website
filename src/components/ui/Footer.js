import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden"
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import FooterAdornment from "../../svgToReact/FooterAdornment.js";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.orange,
    width: "100%",
    zIndex: theme.zIndex.modal + 1,
    position: "relative",
  },
  adornment: {
    width: "20em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "18em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "12em",
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
    "&:hover": {
      opacity: 1,
    },
  },
  icon: {
    width: "4rem",
    height: "4rem",
  }
}));

const Footer = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const medium = useMediaQuery(theme.breakpoints.down("md"));
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
      <FooterAdornment className={classes.adornment} />
      <Grid container justify="flex-end" spacing={2}>
        <Grid item component={'a'} href="https://facebook.com" className={classes.icon}><img alt="facebook-icon" src={facebook}  rel="noopener noreferrer" target="_blank" /></Grid>
        <Grid item component={"a"} href="https://instagram.com" className={classes.icon}><img alt="facebook-icon" src={instagram} rel="noopener noreferrer" target="_blank" /></Grid>
        <Grid item component={"a"} href="https://twitter.com"  className={classes.icon}><img alt="facebook-icon" src={twitter} rel="noopener noreferrer" target="_blank" /></Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
