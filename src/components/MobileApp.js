import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import CallToAction from "./ui/CallToAction";
import integrationAnimation from "../animations/integrationAnimation/data.json";
import knife from "../assets/swissKnife.svg";
import extendingAccess from "../assets/extendAccess.svg";
import engagement from "../assets/increaseEngagement.svg";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "60em",
    [theme.breakpoints.down("md")]: {
      maxWidth: "45em",
    },
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  arrowIcons: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    marginBottom: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  itemContainer: {
    maxWidth: "50em",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "40rem",
    },
  },
}));

const MobileApps = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const smaller = useMediaQuery(theme.breakpoints.down("sm"));
  const smallest = useMediaQuery(theme.breakpoints.down("xs"));
  const medium = useMediaQuery(theme.breakpoints.down("md"));

  const integrationAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const integrationAnimationJSX = (
    <Grid
      item
      style={{
        marginBottom: smaller ? "2rem" : 0,
        marginTop: smaller ? "2rem" : 0,
      }}
      md
    >
      <Lottie
        options={integrationAnimationOptions}
        style={{ maxWidth: 250, maxHeight: 350 }}
      />
    </Grid>
  );

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        justify={medium ? "space-around" : "center"}
        className={classes.rowContainer}
        style={{
          marginTop: medium ? "1rem" : "2rem",
        }}
      >
        <Hidden smDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{
              marginRight: medium ? "1rem" : "2.5em",
              marginLeft: medium ? "-1.5rem" : "-2.5em",
            }}
          >
            <IconButton
              className={classes.arrowIcons}
              component={Link}
              to="/software"
              onClick={() => {
                props.setValue(1);
                props.setSelected(0);
              }}
            >
              <img src={backArrow} alt="Back to Software Development Page" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography
              variant="h2"
              align={smaller ? "center" : "left"}
              gutterBottom
            >
              Mobile App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Mobile apps allow you to take your tools on the go.
            </Typography>
            <Typography variant="body1" paragraph>
              Whether you want an app for your customers, employees, or
              yourself, we can build cross-platform native solutions for any
              part of your business process. This opens you up to a whole new
              world of possibilities by taking advantage of phone features like
              the camera, GPS, push notifications, and more.
            </Typography>
            <Typography variant="body1" paragraph>
              Convenience. Connection.
            </Typography>
          </Grid>
        </Grid>
        <Hidden smDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: medium ? "-1.5rem" : 0 }}
          >
            <IconButton
              className={classes.arrowIcons}
              component={Link}
              to="/websites"
              onClick={() => {
                props.setValue(1);
                props.setSelected(2);
              }}
            >
              <img
                src={forwardArrow}
                alt="Forward to Website Development Page"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={smaller ? "column" : "row"}
        alignItems={smaller ? "center" : "flex-start"}
        className={classes.rowContainer}
      >
        {/* md lg or sm on grid containers mean items will share space at corresponding screen size or up */}
        <Grid
          item
          container
          direction="column"
          className={classes.itemContainer}
          md
        >
          <Grid item align={smaller ? "center" : "left"}>
            <Typography variant="h4" gutterBottom>
              Intergration
            </Typography>
          </Grid>
          <Grid item align={smaller ? "center" : "left"}>
            <Typography variant="body1">
              Our technology enables an innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place.
            </Typography>
            <Typography variant="body1">
              This allows you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
        </Grid>
        {integrationAnimationJSX}
        <Grid
          item
          container
          direction="column"
          className={classes.itemContainer}
          md
        >
          <Grid item align={smaller ? "center" : "right"}>
            <Typography variant="h4" gutterBottom>
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item align={smaller ? "center" : "right"}>
            <Typography variant="body1">
              Our cutting-edge development process allows us to create apps for
              iPhone, Android, and tablets — all at the same time.
            </Typography>
            <Typography variant="body1">
              This significantly reduces costs and creates a more unified brand
              experience across all devices.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={smaller ? "column" : "row"}
        alignItems={smaller ? "center" : undefined}
        justify="space-around"
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          md
          direction="column"
          alignItems="center"
          style={{ maxWidth: smaller ? "100%" : "30em" }}
        >
          <Grid item align="center">
            <Typography variant="h4">Extend Functionality</Typography>
          </Grid>
          <Grid item style={{ marginTop: "2em" }}>
            <img
              style={{ maxWidth: 200 }}
              src={knife}
              alt="army swiss knife  icon"
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          md
          direction="column"
          alignItems="center"
          style={{
            maxWidth: smaller ? "100%" : "30em",
            marginLeft: medium ? smaller ? 0 : "2em" : 0,
            marginRight: medium ? smaller ? 0 : "2em" : 0,
            marginTop: smaller ? "7em" : 0,
            marginBottom: smaller ? "7em" : 0,
          }}
        >
          <Grid item align="center">
            <Typography variant="h4">Extend Access</Typography>
          </Grid>
          <Grid item style={{ marginTop: "2em" }}>
            <img
              style={{ maxWidth: smallest ? 250 : 300 }}
              src={extendingAccess}
              alt="extending form options"/>
          </Grid>
        </Grid>
        <Grid
          item
          container
          md
          direction="column"
          alignItems="center"
          style={{ maxWidth: smaller ? "100%" : "30em" }}
        >
          <Grid item align="center">
            <Typography variant="h4">Increase Engagement</Typography>
          </Grid>
          <Grid item style={{ marginTop: "2em" }}>
            <img
              style={{ maxWidth: 180 }}
              src={engagement}
              alt="notification on folder icon"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* Call to Action Block */}
        {/* HINT: a background image can be set directly on the Grid Container
            as className Prop and then we dont need to set the inner container with
            absolute positioning
          */}
        <CallToAction
          setValue={props.setValue}
          setSelected={props.setSelected}
        />
      </Grid>
    </Grid>
  );
};

export default MobileApps;
