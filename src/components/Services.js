import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ButtonArrow from "./ui/ButtonArrow";
import softwareIcon from "../assets/Custom Software Icon.svg";
import appsIcon from "../assets/mobile.svg";
import webIcon from "../assets/website.svg";

const useStyles = makeStyles((theme) => ({
  learnOutlineButton: {
    ...theme.typography.learnButton,
    borderColor: theme.palette.common.orange,
    borderWidth: 3,
    height: "35px",
    opacity: 0.7,
    marginRight: 0,
    marginLeft: 0,
  },
  subtitle: {
    marginBottom: "2.5rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1em",
    },
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  serviceIcon: {
    minWidth: "15em",
    marginLeft: "2em",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0.5em",
      maxWidth: "5em",
      marginLeft: 0,
    },
  },
  webDevContainer: {
    marginTop: "10em",
    marginBottom: "10em",
    [theme.breakpoints.down("lg")]: {
      marginTop: "8em",
      marginBottom: "8em",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "6em",
      marginBottom: "6em",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "3em",
      marginBottom: "3em",
      padding: "20px",
    },
  },
  devContainer: {
    marginTop: "10em",
    [theme.breakpoints.down("lg")]: {
      marginTop: "8em",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "6em",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "3em",
      padding: "20px",
    },
  },
  appDevDescription: {
    width: "40em",
    [theme.breakpoints.down("lg")]: {
        width: "32em",
      },
    [theme.breakpoints.down("md")]: {
        maxWidth: "25em",
      },
    [theme.breakpoints.down("sm")]: {
        width: "40em",
        maxWidth: "40em",
        padding: "20px",
      },
    [theme.breakpoints.down("xs")]: {
        width: "auto",
        padding: "20px",
    },
  },
  serviceLabelContainer : {
    [theme.breakpoints.down("sm")]: {
        width: "auto",
        padding: "20px",
    },
  }
}));

const Services = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const smaller = useMediaQuery(theme.breakpoints.down("sm"));

  const softwareIconJSX = (
    <Grid container justify={smaller ? "center" : undefined} >
      <Grid item className={classes.serviceIcon}>
        <img src={softwareIcon} alt="Software Icon" />
      </Grid>
    </Grid>
  );
  const websiteIconJSX = (
    <Grid container justify={smaller ? "center" : undefined} style={{marginRight: smaller ? 0 : "5em",}}>
      <Grid item className={classes.serviceIcon}>
        <img src={webIcon} alt="Software Icon" />
      </Grid>
    </Grid>
  );
  const mobileIconJSX = (
    <Grid container justify={smaller ? "center" : undefined}>
      <Grid
        item
        className={classes.serviceIcon}
        style={{ marginRight: smaller ? 0 : "5em" }}
      >
        <img src={appsIcon} alt="Mobile Icon" />
      </Grid>
    </Grid>
  );

  return (
    <Grid container direction="column">
        <Grid item container className={classes.serviceLabelContainer} justify={smaller ? "center" : "flex-start"} style={{paddingLeft: smaller ? "20px" : "5em", marginTop: "2em"}}>
            <Typography variant="h2">Services</Typography>
        </Grid>
      <Grid item>
        {/* ------ App Block ------- */}
        <Grid
          container
          direction="row"
          className={classes.devContainer}
          justify={smaller ? "center" : "flex-end"}
        >
          <Grid item className={classes.appDevDescription} style={{ textAlign: smaller ? "center" : undefined }}>
            {smaller ? mobileIconJSX : ""}
            <Typography variant="h4">Mobile App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography
              variant="subtitle1"
            >
              Integrate your web experience or create a standalone app with
              either iOS or Android platforms.
            </Typography>
            <Button
              component={Link}
              to="/mobileapps"
              onClick={() => {
                props.setValue(1);
                props.setSelected(1);
              }}
              variant="outlined"
              className={classes.learnOutlineButton}
            >
              Learn More
              <ButtonArrow width={25} height={18} fill="black" />
            </Button>
          </Grid>
          <Grid item>{smaller ? "" : mobileIconJSX}</Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* ------ Software Block ------- */}
        <Grid
          container
          direction="row"
          className={classes.devContainer}
          justify={smaller ? "center" : undefined}
        >
          <Grid
            item
            className={classes.appDevDescription}
            style={{
              marginLeft: smaller ? 0 : "5em",
              textAlign: smaller ? "center" : undefined,
            }}
          >
            {smaller ? softwareIconJSX : ""}
            <Typography variant="h4">Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Time. Save Energy. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <span>celebration.</span>
            </Typography>
            <Button
              component={Link}
              to="/software"
              onClick={() => {
                props.setValue(1);
                props.setSelected(0);
              }}
              variant="outlined"
              className={classes.learnOutlineButton}
            >
              Learn More
              <ButtonArrow width={25} height={18} fill="black" />
            </Button>
          </Grid>
          <Grid item>{smaller ? "" : softwareIconJSX}</Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* ------ Website Block ------- */}
        <Grid
          container
          direction="row"
          className={classes.webDevContainer}
          justify={smaller ? "center" : "flex-end"}
        >
          <Grid
            item
            className={classes.appDevDescription}
            style={{
              textAlign: smaller ? "center" : undefined,
            }}
          >
            {smaller ? websiteIconJSX : ""}
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Discover More. Reach More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button
              component={Link}
              to="/websites"
              onClick={() => {
                props.setValue(1);
                props.setSelected(2);
              }}
              variant="outlined"
              className={classes.learnOutlineButton}
            >
              Learn More
              <ButtonArrow width={25} height={18} fill="black" />
            </Button>
          </Grid>
          <Grid item>{smaller ? "" : websiteIconJSX}</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
