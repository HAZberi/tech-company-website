import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ButtonArrow";

import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";

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
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
}));

const CallToAction = () => {
  const classes = useStyles();

  return (
    <Grid container style={{height: "50em"}} alignItems="center">
      <Grid item style={{position: "absolute"}}>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
              Simple Software.
              <br />
              Revolutionary Results.
            </Typography>
            <Typography variant="subtitle1">
              Take advantage of the 21st Century.
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="outlined" className={classes.learnOutlineButton}>
              Learn More
              <ButtonArrow width={25} height={18} fill="black" />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.background} />
    </Grid>
  );
};

export default CallToAction;
