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
}));

const MobileApps = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const smaller = useMediaQuery(theme.breakpoints.down("sm"));
  //const smallest = useMediaQuery(theme.breakpoints.down("xs"));
  const medium = useMediaQuery(theme.breakpoints.down("md"));

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
                Whether you want an app for your customers, employees, or yourself, we can build cross-platform native solutions for any part of your business process. This opens you up to a whole new world of possibilities by taking advantage of phone features like the camera, GPS, push notifications, and more.
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
              <img src={forwardArrow} alt="Forward to Website Development Page" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default MobileApps;
