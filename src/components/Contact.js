import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CallToAction from "../components/ui/CallToAction.js";

const useStyles = makeStyles((theme) => ({
    heading: {
        paddingLeft: "2em",
        paddingRight: "2em",
        marginBottom: "1em",
        marginTop: "1em",
        [theme.breakpoints.down("md")]: {
          paddingLeft: "1.5em",
          paddingRight: "1.5em",
          textAlign: "center",
        },
      },
}));

const Contact = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction="row">
      <Grid item container direction="column" lg={4}>
        <Grid item className={classes.heading}>
            <Typography variant="h2">Contact Us</Typography>
            <Typography variant="caption">We are Waiting!</Typography>
        </Grid>
      </Grid>
      <Grid item container direction="column" lg={8}>
          <CallToAction setValue={props.setValue} setSelected={props.setSelected} />
      </Grid>
    </Grid>
  );
};

export default Contact;