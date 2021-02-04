import React from "react";
import {Link} from "react-router-dom";
import Lottie from "react-lottie"
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";

const useStyles = makeStyles(theme => ({

}));

const MobileApps = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const smaller = useMediaQuery(theme.breakpoints.down("sm"));
    const smallest = useMediaQuery(theme.breakpoints.down("xs"));
    const medium = useMediaQuery(theme.breakpoints.down("md"));
    
    return (
        <Grid container direction="column">
            Mobile development page contents will go in here......
        </Grid>
    )
}

export default MobileApps;