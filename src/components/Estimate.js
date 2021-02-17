import React from "react";
import Lottie from "react-lottie";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import check from "../assets/check.svg";
import send from "../assets/send.svg";
import software from "../assets/software.svg";
import mobile from "../assets/mobile.svg";
import website from "../assets/website.svg";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import backArrowDisabled from "../assets/backArrowDisabled.svg";
import forwardArrowDisabled from "../assets/forwardArrowDisabled.svg";
import camera from "../assets/camera.svg";
import upload from "../assets/upload.svg";
import person from "../assets/person.svg";
import persons from "../assets/persons.svg";
import people from "../assets/people.svg";
import info from "../assets/info.svg";
import bell from "../assets/bell.svg";
import users from "../assets/users.svg";
import iphone from "../assets/iphone.svg";
import gps from "../assets/gps.svg";
import customized from "../assets/customized.svg";
import data from "../assets/data.svg";

import estimateAnimationData from "../animations/estimateAnimation/data.json";

const useStyles = makeStyles(theme => ({
    heading: {
        paddingLeft: "5em",
        paddingRight: "5em",
        marginBottom: "3em",
        marginTop: "2em",
        [theme.breakpoints.down("sm")]: {
          paddingLeft: "1.5em",
          paddingRight: "1.5em",
          marginTop: "1em",
          marginBottom: "1em",
          textAlign: "center",
        },
        [theme.breakpoints.down("md")]: {
          marginBottom: "1.5em",
        },
      },
}));

const Estimate = (props) => {
    const classes = useStyles();
    const theme = useTheme();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: estimateAnimationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        }
    };

    return (
        <Grid container direction="row">
            <Grid item container direction="column">
                <Grid item className={classes.heading}>
                    <Typography variant="h2" gutterBottom>
                        Estimate
                    </Typography>
                </Grid>
                <Grid item>
                    <Lottie options={defaultOptions}/>
                </Grid>
            </Grid>
            <Grid item container direction="column">

            </Grid>
        </Grid>
    )
};

export default Estimate;