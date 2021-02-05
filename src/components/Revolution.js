import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import vision from "../assets/vision.svg";

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

const Revolution = () => {
  const classes = useStyles();
  const theme = useTheme();
  const medium = useMediaQuery(theme.breakpoints.down("md"));
  const smaller = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h2" gutterBottom>
          The Revolution
        </Typography>
      </Grid>
      <Grid container direction="row">
        <Grid item>
          <img src={vision} alt="Alberta Vision background" />
        </Grid>
        <Grid item container direction="column">
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Vision
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph></Typography>
            <Typography variant="body1" paragraph></Typography>
            <Typography variant="body1" paragraph></Typography>
            <Typography variant="body1" paragraph></Typography>
            <Typography variant="body1" paragraph></Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Revolution;