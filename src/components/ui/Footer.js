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
        <Grid item className={classes.link}>
          Home
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
