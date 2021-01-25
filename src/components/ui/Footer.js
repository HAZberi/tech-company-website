import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles( theme => ({
    footer: {
        backgroundColor: theme.palette.common.orange,
        width: "100%",
    }
}));

const Footer = () => {
    const classes = useStyles();

    return <footer className={classes.footer}>The Footer will go here</footer>
}

export default Footer;