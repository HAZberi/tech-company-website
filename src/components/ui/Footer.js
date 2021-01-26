import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import FooterAdornment from "../../svgToReact/FooterAdornment.js";

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
}));

const Footer = (props) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid
        container
        justify="center"
        className={classes.mainContainer}
        spacing={10}
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
      <FooterAdornment className={classes.adornment} />
    </footer>
  );
};

export default Footer;
