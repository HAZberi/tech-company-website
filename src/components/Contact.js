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
        paddingLeft: "5em",
        paddingRight: "5em",
        marginBottom: "3em",
        marginTop: "2em",
        [theme.breakpoints.down("sm")]: {
          paddingLeft: "1.5em",
          paddingRight: "1.5em",
          marginTop: "1em",
          marginBottom: "1em",
          textAlign: "center",
        },
        [theme.breakpoints.down("md")]: {
          marginBottom: "1.5em",
        },
      },
}));

const Contact = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction="row">
      <Grid item container direction="column" lg={3}>
        <Grid item>
            <Typography varaint="h2" className={classes.heading}>Contact Us</Typography>
            <Typography variant="caption">We are waiting!</Typography>
        </Grid>
      </Grid>
      <Grid item container direction="column" lg={9}>
          <CallToAction setValue={props.setValue} setSelected={props.setSelected} />
      </Grid>
    </Grid>
  );
};

export default Contact;