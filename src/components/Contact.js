import React, {useState} from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CallToAction from "../components/ui/CallToAction.js";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";

const useStyles = makeStyles((theme) => ({
    heading: {
        paddingLeft: "2em",
        paddingRight: "2em",
        marginBottom: "1em",
        marginTop: "1em",
        textAlign: "center",
        [theme.breakpoints.down("sm")]: {
          paddingLeft: "1.5em",
          paddingRight: "1.5em",
        },
      },
    itemContainer: {
        textAlign: "center",
    }
}));

const Contact = (props) => {
  const classes = useStyles();
  //const theme = useTheme();

  return (
    <Grid container direction="row">
      <Grid item container direction="column" md={4}>
        <Grid item className={classes.heading}>
            <Typography variant="h2" style={{lineHeight: 1}}>Contact Us</Typography>
            <Typography variant="body1">We are Waiting.</Typography>
        </Grid>
        <Grid item container alignItems="center" justify="center">
            <Grid item>
                <img src={phoneIcon} alt="phone icon" style={{marginRight: "0.5em", verticalAlign: "baseline"}}/>
            </Grid>
            <Grid item>
                <Typography variant="body1" style={{fontSize: "1rem"}}>(555) 555-5555</Typography>
            </Grid>
        </Grid>
        <Grid item container alignItems="center" justify="center">
            <Grid item>
                <img src={emailIcon} alt="phone icon" style={{marginRight: "0.5em", verticalAlign: "middle"}}/>
            </Grid>
            <Grid item>
                <Typography variant="body1" style={{fontSize: "1rem"}}>hassaan.zuberi@ucalgary.ca</Typography>
            </Grid>
        </Grid>
        <Grid item container>
            <Grid item>
                <TextField label="Name" id="name" />
            </Grid>
            <Grid item>
                <TextField label="Email" id="email" />
            </Grid>
            <Grid item>
                <TextField label="Phone" id="phone" />
            </Grid>
        </Grid>
      </Grid>
      <Grid item container direction="column" md={8}>
          <CallToAction setValue={props.setValue} setSelected={props.setSelected} />
      </Grid>
    </Grid>
  );
};

export default Contact;