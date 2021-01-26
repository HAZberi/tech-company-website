import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
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
  },
  link: {
    ...theme.typography.link,
    opacity: 0.7,
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
      <Grid container justify="center" className={classes.mainContainer}>
        <Grid item>
          <Grid container direction="column">
            <Grid item className={classes.link}>Home</Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item className={classes.link}>Services</Grid>
            <Grid item className={classes.link}>Software Development</Grid>
            <Grid item className={classes.link}>App Development</Grid>
            <Grid item className={classes.link}>Web Development</Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item className={classes.link}>Revolution</Grid>
            <Grid item className={classes.link}>Vision</Grid>
            <Grid item className={classes.link}>Technology</Grid>
            <Grid item className={classes.link}>Process</Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item className={classes.link}>About Us</Grid>
            <Grid item className={classes.link}>History</Grid>
            <Grid item className={classes.link}>Team</Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item className={classes.link}>Contact Us</Grid>
            <Grid item className={classes.link}>Get Estimate</Grid>
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
