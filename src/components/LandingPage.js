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
    marginLeft: "5%"
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
    backgroundColor: theme.palette.common.orange,
    color: "black",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "0.5rem",
    textTransform: "none",
    borderRadius: "30px",
    fontFamily: "Roboto",
    height: "45px",
    fontSize: "1rem",
    fontWeight: "bold",
    opacity: 0.85,
    "&:hover": {
      backgroundColor: theme.palette.common.orange,
      opacity: 1,
    }
  },
  mainContainer: {
    marginTop: "4em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "1em",
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
        <Grid item>
          <Grid container justify="flex-end" alignItems="center">
            <Grid item sm>
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
            <Grid item sm className={classes.animation}>
              <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingPage;
