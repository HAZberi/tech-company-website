import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import lightbulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopwatch from "../assets/stopwatch.svg";
import documentsAnimation from "../animations/documentsAnimation/data.js";
import scaleAnimation from "../animations/scaleAnimation/data.json";
import automationAnimation from "../animations/automationAnimation/data.json";
import uxAnimation from "../animations/uxAnimation/data.js";
import rootTree from "../assets/root.svg";

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
  mainContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    paddingTop: "2em",
    paddingBottom: "10em",
  },
  itemContainer: {
    maxWidth: "40em",
  },
}));

const Software = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  //const smaller = useMediaQuery(theme.breakpoints.down("sm"));
  const medium = useMediaQuery(theme.breakpoints.down("md"));
  const documentsAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const scaleAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const automationAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const uxAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item container direction="row" justify="space-around">
        <Grid
          item
          className={classes.arrowContainer}
          style={{
            marginRight: medium ? "1rem" : "2.5em",
            marginLeft: medium ? "1rem" : "-2.5em",
          }}
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
            <img src={backArrow} alt="Back to Services Page" />
          </IconButton>
        </Grid>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2" gutterBottom>
              Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Whether we’re replacing old software or inventing new solutions,
              our experts are here to help your business tackle technology.
            </Typography>
            <Typography variant="body1" paragraph>
              Using regular commercial software leaves you with a lot of stuff
              you don’t need, without some of the stuff you do need, and
              ultimately controls the way you work. Without using any software
              at all you risk falling behind competitors and missing out on huge
              savings from increased efficiency.
            </Typography>
            <Typography variant="body1" paragraph>
              Our custom solutions are designed from the ground up with your
              needs, wants, and goals at the core. This collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options.
            </Typography>
            <Typography variant="body1" paragraph>
              We create exactly what you want, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.arrowContainer}>
          <IconButton
            className={classes.arrowIcons}
            component={Link}
            to="/mobileapps"
            onClick={() => {
              props.setValue(1);
              props.setSelected(1);
            }}
          >
            <img src={forwardArrow} alt="Forward to App Development Page" />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="center"
        style={{ marginTop: "10em", marginBottom: "10em" }}
      >
        <Grid
          item
          container
          md
          direction="column"
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <img src={stopwatch} alt="stopWatch icon" />
          </Grid>
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          md
          direction="column"
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <img src={lightbulb} alt="lightbulb icon" />
          </Grid>
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          md
          direction="column"
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <img src={cash} alt="cash icon" />
          </Grid>
          <Grid item>
            <Typography variant="h4">Save Money</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction="row" justify="space-around">
        <Grid item container className={classes.itemContainer} md>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4">Digital Documents & Data</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>
              <Typography variant="body1" paragraph>
                Billions are spent annually on the purchasing, printing, and
                distribution of paper. On top of the massive environmental
                impact this has, it causes harm to your bottom line as well.
              </Typography>
              <Typography variant="body1" paragraph>
                By utilizing digital forms and documents you can remove these
                obsolete expenses, accelerate your communication, and help the
                Earth.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={documentsAnimationOptions}
              style={{ maxWidth: 275, maxHeight: 275, minHeight: 250 }}
            />
          </Grid>
        </Grid>
        <Grid item container className={classes.itemContainer} md>
          <Grid item md>
            <Lottie
              options={scaleAnimationOptions}
              style={{ maxWidth: 280, maxHeight: 260 }}
            />
          </Grid>
          <Grid item container align="right" direction="column" md>
            <Grid item>
              <Typography variant="h4">Scale</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Whether you’re a large brand, just getting started, or taking
                off right now, our application architecture ensures pain-free
                growth and reliability.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction="row" style={{marginTop: "10em", marginBottom: "15em"}}>
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <img
              src={rootTree}
              alt="a tree with roots"
              height="400em"
              width="400"
            />
          </Grid>
          <Grid item>
            <Typography variant="h4" align="center" gutterBottom>
              Root-Cause Analysis
            </Typography>
          </Grid>
          <Grid item className={classes.heading} align="center">
            <Typography variant="body1" gutterBottom>
              Many problems are merely symptoms of larger, underlying issues.
            </Typography>
            <Typography variant="body1" gutterBottom>
              We can help you thoroughly examine all areas of your business to
              develop a holistic plan for the most effective implementation of
              technology.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction="row" justify="space-around">
        <Grid item container className={classes.itemContainer} md>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4">Automation</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Why waste time when you don’t have to?
              </Typography>
              <Typography variant="body1" paragraph>
                We can help you identify processes with time or event based
                actions which can now easily be automated.
              </Typography>
              <Typography variant="body1" paragraph>
                Increasing efficiency increases profits, leaving you more time
                to focus on your business, not busywork.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={automationAnimationOptions}
              style={{ maxWidth: 280, maxHeight: 290}}
            />
          </Grid>
        </Grid>
        <Grid item container className={classes.itemContainer} md>
          <Grid item md>
            <Lottie
              options={uxAnimationOptions}
              style={{ maxWidth: 155, maxHeight: 310 }}
            />
          </Grid>
          <Grid item container align="right" direction="column" md>
            <Grid item>
              <Typography variant="h4">User Experience Design</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                A good design that isn’t usable isn’t a good design.
              </Typography>
              <Typography variant="body1" paragraph>
                So why are so many pieces of software complicated, confusing,
                and frustrating?
              </Typography>
              <Typography variant="body1" paragraph>
                By prioritizing users and the real ways they interact with
                technology we’re able to develop unique, personable experiences
                that solve problems rather than create new ones.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Software;
