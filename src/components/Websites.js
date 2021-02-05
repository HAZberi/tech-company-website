import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import CallToAction from "./ui/CallToAction";
import analyticsGraph from "../assets/analytics.svg";
import ecommerceWorld from "../assets/ecommerce.svg";
import seo from "../assets/seo.svg";
import outreach from "../assets/outreach.svg";

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
    maxWidth: "30em",
    marginLeft: "2.5em",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "40rem",
      marginTop: "2.5rem",
      marginLeft: 0,
    },
  },
}));

const Websites = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const medium = useMediaQuery(theme.breakpoints.down("md"));
  const smaller = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        justify={medium ? "space-around" : "center"}
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
              to="/mobileapps"
              onClick={() => {
                props.setValue(1);
                props.setSelected(1);
              }}
            >
              <img src={backArrow} alt="Back to Mobile App Development Page" />
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
              Webiste Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Having a website is a necessity in today’s business world. They
              give you one central, public location to let people know who you
              are, what you do, and why you’re the best at it.
            </Typography>
            <Typography variant="body1" paragraph>
              From simply having your hours posted to having a full fledged
              online store, making yourself as accessible as possible to users
              online drives growth and enables you to reach new customers.
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
              to="/services"
              onClick={() => {
                props.setValue(1);
                props.setSelected(null);
              }}
            >
              <img src={forwardArrow} alt="Forward to Services Page" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        justify={smaller ? "center" : "flex-start"}
        className={classes.rowContainer}
      >
        <Grid item>
          <img
            src={analyticsGraph}
            style={{ maxWidth: medium ? 255 : "100%" }}
            alt="graph with magnifying glass"
          />
        </Grid>
        <Grid item className={classes.itemContainer}>
          <Grid container direction="column">
            <Grid item align={smaller ? "center" : "left"}>
              <Typography variant="h4" gutterBottom>
                Analytics
              </Typography>
            </Grid>
            <Grid item align={smaller ? "center" : "left"}>
              <Typography variant="body1" paragraph>
                Knowledge is power, and data is 21st Century gold. Analyzing
                this data can reveal hidden patterns and trends in your
                business, empowering you to make smarter decisions with
                measurable effects.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        justify={smaller ? "center" : "flex-end"}
        className={classes.rowContainer}
      >
        <Grid item>
          <img
            src={ecommerceWorld}
            style={{ maxWidth: medium ? 255 : "100%" }}
            alt="graph with magnifying glass"
          />
        </Grid>
        <Grid item className={classes.itemContainer}>
          <Grid container direction="column">
            <Grid item align={smaller ? "center" : "left"}>
              <Typography variant="h4" gutterBottom>
                E-Commerce
              </Typography>
            </Grid>
            <Grid item align={smaller ? "center" : "left"}>
              <Typography variant="body1" paragraph>
                It’s no secret that people like to shop online.
              </Typography>
              <Typography variant="body1" paragraph>
                In 2017 over $2.3 trillion was spent in e-commerce, and it’s
                time for your slice of that pie.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        justify={smaller ? "center" : "flex-start"}
        className={classes.rowContainer}
      >
        <Grid item>
          <img
            src={outreach}
            style={{ maxWidth: medium ? 255 : "100%" }}
            alt="graph with magnifying glass"
          />
        </Grid>
        <Grid item className={classes.itemContainer}>
          <Grid container direction="column">
            <Grid item align={smaller ? "center" : "left"}>
              <Typography variant="h4" gutterBottom>
                Outreach
              </Typography>
            </Grid>
            <Grid item align={smaller ? "center" : "left"}>
              <Typography variant="body1" paragraph>
                Draw people in with a dazzling website. Showing off your
                products online is a great way to help customers decide what’s
                right for them before visiting in person.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        justify={smaller ? "center" : "flex-end"}
        className={classes.rowContainer}
      >
        <Grid item>
          <img
            src={seo}
            style={{ maxWidth: medium ? 255 : "100%" }}
            alt="graph with magnifying glass"
          />
        </Grid>
        <Grid item className={classes.itemContainer}>
          <Grid container direction="column">
            <Grid item align={smaller ? "center" : "left"}>
              <Typography variant="h4" gutterBottom>
                Search Engine
                <br />
                Optimization
              </Typography>
            </Grid>
            <Grid item align={smaller ? "center" : "left"}>
              <Typography variant="body1" paragraph>
                How often have you ever been to the second page of Google
                results?
              </Typography>
              <Typography variant="body1" paragraph>
                If you’re like us, probably never.
              </Typography>
              <Typography variant="body1" paragraph>
                Customers don’t go there either, so we make sure your website is
                designed to end up on top.
              </Typography>
            </Grid>
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

export default Websites;
