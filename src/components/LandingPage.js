import React from "react";
import Lottie from "react-lottie";
import {makeStyles} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import animationData from "../animations/landinganimation/data.js";
import ButtonArrow from "./ui/ButtonArrow";

const useStyles =  makeStyles(theme => ({

}));

const LandingPage = () => {
    const classes = useStyles();
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return (
        <Grid container direction="column">
          <Grid item>
            <Grid container direction="row">
              <Grid item>
                <div>Bringing West Coast Technology<br />to the Canadian Prairies</div>
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
              <Grid item>
                <Lottie options={defaultOptions} height={"100%"} width={"100%"}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    );
}

export default LandingPage;