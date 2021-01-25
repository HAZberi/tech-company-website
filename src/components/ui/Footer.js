import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import footerAdornment from "../../assets/Footer Adornment.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.orange,
    width: "100%",
  },
  adornment: {
    width: "20em",
    verticalAlign: "bottom",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <img
        src={footerAdornment}
        alt="decorative box"
        className={classes.adornment}
      />
    </footer>
  );
};

export default Footer;
