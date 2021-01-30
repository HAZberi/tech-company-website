import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery"
import ButtonArrow from "./ButtonArrow";

import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";

const useStyles = makeStyles((theme) => ({
  learnOutlineButton: {
    ...theme.typography.learnButton,
    borderColor: theme.palette.common.orange,
    borderWidth: 3,
    height: "35px",
    opacity: 0.8,
    marginRight: 0,
    marginLeft: 0,
  },
  estimateOutlineButton: {
    ...theme.typography.learnButton,
    borderColor: theme.palette.common.hoverBlue,
    borderWidth: 3,
    height: "35px",
    opacity: 0.9,
    marginRight: 0,
    marginLeft: 0,
    marginTop: "15px",
    "&:hover": {
        backgroundColor: theme.palette.common.hoverBlue,
        color: "white",
      },
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
}));

const CallToAction = () => {
  const classes = useStyles();
  const theme = useTheme();
  const smaller = useMediaQuery(theme.breakpoints.down("sm"));


  return (
    <Grid container style={{height: smaller ? "85em" : "60em"}} alignItems="start">
      <Grid item container style={{position: "absolute", marginLeft: smaller ? 0 : "5em", marginTop: smaller ? "5em" : "7.5em", textAlign: smaller ? "center" : "inherit"}}>
        <Grid sm container direction="column">
          <Grid item>
            <Typography variant="h2" gutterBottom>
              Simple Software.
              <br />
              Revolutionary Results.
            </Typography>
            <Typography variant="subtitle1" style={{fontWeight: 500, color: "#383838"}} gutterBottom>
              Take advantage of the 21st Century.
            </Typography>
          </Grid>
          <Grid item style={{marginTop: smaller ? "4em" : 0}}>
            <Button variant="outlined" className={classes.learnOutlineButton}>
              Learn More
              <ButtonArrow width={25} height={18} fill="black" />
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" className={classes.estimateOutlineButton}>
              Get Estimate
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
