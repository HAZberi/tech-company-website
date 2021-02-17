import React from "react";
import Lottie from "react-lottie";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";

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

import estimateAnimation from "../animations/estimateAnimation/data.json";

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

    icon: {
        height: "10em",
        width: "10em",
    },
    question: {
        marginTop: "2em",
        marginBottom: "2em",
        [theme.breakpoints.down("md")]: {
            marginBottom: "1.5em",
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: "1em",
            marginBottom: "1em",
        },
    }
}));

const Estimate = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const smaller = useMediaQuery(theme.breakpoints.down("sm"));
    const smallest = useMediaQuery(theme.breakpoints.down("xs"));


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: estimateAnimation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        }
    };

    return (
        <Grid container direction="row">
            <Grid item container direction="column" md>
                <Grid item className={classes.heading}>
                    <Typography variant="h2">
                        Estimate
                    </Typography>
                </Grid>
                <Grid item style={{marginBottom: smaller ? 0 : "5em", height: smallest ? "10em" : smaller ? "17.5em" : "auto", marginRight: smaller ? "0" : "7.5em", maxWidth: smaller ? "100%" : "40em",}}>
                    <Lottie options={defaultOptions} height="100%" width="100%" />
                </Grid>
            </Grid>
            <Grid item container direction="column" md>
                <Grid item>
                    <Typography variant="h4" align="center" className={classes.question} gutterBottom>
                        Which service are you interested in?
                    </Typography>
                </Grid>
                <Grid item container>
                    <Grid item container alignItems="center" direction="column" sm>
                        <Grid item>
                            <img src={software} alt="three floating screens" className={classes.icon}/>
                        </Grid>
                        <Grid item style={{maxWidth: "10em", marginTop: "0.75em"}}>
                            <Typography variant="h6" align="center">
                                Software Development
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container alignItems="center" direction="column" sm>
                        <Grid item>
                            <img src={mobile} alt="phones and tablet ouline" className={classes.icon}/>
                        </Grid>
                        <Grid item style={{maxWidth: "10em", marginTop: "0.75em"}}>
                            <Typography variant="h6" align="center">
                                App Development
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container alignItems="center" direction="column" sm>
                        <Grid item>
                            <img src={website} alt="a monitor screen" className={classes.icon}/>
                        </Grid>
                        <Grid item style={{maxWidth: "10em", marginTop: "0.75em"}}>
                            <Typography variant="h6" align="center">
                                Webiste Development
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default Estimate;