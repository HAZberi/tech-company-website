import React from "react";
import Lottie from "react-lottie";
import { makeStyles } from "@material-ui/core/styles";
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
  }
}));

const LandingPage = () => {
  const classes = useStyles();
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
      <Grid container direction="column">
        <Grid item>
          <Grid container justify="flex-end" alignItems="center">
            <Grid item sm>
              <Typography variant="h2" align="center">
                Bringing West Coast Technology
                <br />
                to the Canadian Prairies
              </Typography>
              <Grid container>
                <Grid item>
                  <Button variant="contained">Get Estimate</Button>
                </Grid>
                <Grid item>
                  <Button variant="contained">
                    Learn More
                    <ButtonArrow width={25} height={18} fill="orange" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm xs className={classes.animation}>
              <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingPage;
