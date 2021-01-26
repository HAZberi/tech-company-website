import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom"
import footerAdornment from "../../assets/Footer Adornment.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.orange,
    width: "100%",
    zIndex: theme.zIndex.modal + 1,
    position: "relative"
  },
  adornment: {
    width: "20em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
        width: "18em"
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
    }
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container justify="center" className={classes.mainContainer} spacing={10}>
        <Grid item>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.link} component={Link} to="/">Home</Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.link} component={Link} to="/services">Services</Grid>
            <Grid item className={classes.link} component={Link} to="/software">Software Development</Grid>
            <Grid item className={classes.link} component={Link} to="/mobileapps">App Development</Grid>
            <Grid item className={classes.link} component={Link} to="/websites">Web Development</Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.link} component={Link} to="/revolution">Revolution</Grid>
            <Grid item className={classes.link} component={Link} to="/revolution">Vision</Grid>
            <Grid item className={classes.link} component={Link} to="/revolution">Technology</Grid>
            <Grid item className={classes.link} component={Link} to="/revolution">Process</Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.link} component={Link} to="/about">About Us</Grid>
            <Grid item className={classes.link} component={Link} to="/about">History</Grid>
            <Grid item className={classes.link} component={Link} to="/about">Team</Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.link} component={Link} to="/contact">Contact Us</Grid>
            <Grid item className={classes.link} component={Link} to="/estimate">Get Estimate</Grid>
          </Grid>
        </Grid>
      </Grid>
      <img
        src={footerAdornment}
        alt="decorative box"
        className={classes.adornment}
      />
    </footer>
  );
};

export default Footer;
