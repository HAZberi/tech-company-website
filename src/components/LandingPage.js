import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import animationData from "../animations/landinganimation/data.js";
import ButtonArrow from "./ui/ButtonArrow";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "5%",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "30em",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      maxWidth: "40em",
    }
  },
  estimate: {
    ...theme.typography.estimate,
    borderRadius: "30px",
    marginLeft: "20px",
    marginRight: "20px",
    height: "45px",
    marginTop: "0.5rem",
  },
  buttonContainer: {
    marginTop: "0.5rem",
  },
  learnHeroButton: {
    ...theme.typography.learnButton,
    backgroundColor: theme.palette.common.orange,
    height: "45px",
    opacity: 0.85,
  },
  learnOutlineButton: {
    ...theme.typography.learnButton,
    borderColor: theme.palette.common.orange,
    borderWidth: 3,
    height: "35px",
    opacity: 0.7,

  },
  mainContainer: {
    marginTop: "4em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "1.5em",
    }
  }, 
  heroTextContainer: {
    minWidth: "22.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    }
  }
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme =  useTheme();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div style={{marginBottom: "1500px"}}>
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid item>{/* ------- Hero Block --------- */}
          <Grid container justify="flex-end" alignItems="center">
            <Grid item sm className={classes.heroTextContainer}>
              <Typography variant="h2" align="center">
                Bringing West Coast Technology
                <br />
                to the Canadian Prairies
              </Typography>
              <Grid container justify="center" className={classes.buttonContainer}>
                <Grid item>
                  <Button color="secondary" variant="contained" className={classes.estimate}>Get Estimate</Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" className={classes.learnHeroButton}>
                    Learn More
                    <ButtonArrow width={25} height={18} fill="black" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm xs className={classes.animation}>
              <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>{/* ------ Services Block ------- */}
          <Grid container>
            <Grid item>
              <Typography variant="h4">Software Development</Typography>
              <Typography variant="subtitle1">Save Time. Save Energy. Save Money.</Typography>
              <Typography variant="subtitle1">Complete Digital Solutions, from investigation to <span>celebration.</span></Typography>
              <Button variant="outlined" className={classes.learnOutlineButton}>
                    Learn More
                    <ButtonArrow width={25} height={18} fill="black" />
                  </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingPage;
