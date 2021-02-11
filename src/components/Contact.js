import React, { useState } from "react";
//import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CallToAction from "../components/ui/CallToAction.js";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import paperAirplane from "../assets/send.svg";

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
  },
  sendMessageButton: {
    ...theme.typography.learnButton,
    backgroundColor: theme.palette.common.orange,
    height: "45px",
    opacity: 0.85,
    borderRadius: "2.5px",
  },
}));

const Contact = (props) => {
  const classes = useStyles();
  //const theme = useTheme();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Grid container direction="row">
      <Grid item container direction="column" md={4}>
        <Grid item className={classes.heading}>
          <Typography variant="h2" style={{ lineHeight: 1 }}>
            Contact Us
          </Typography>
          <Typography variant="body1">We are Waiting.</Typography>
        </Grid>
        <Grid item container alignItems="center" justify="center">
          <Grid item>
            <img
              src={phoneIcon}
              alt="phone icon"
              style={{ marginRight: "0.5em", verticalAlign: "baseline" }}
            />
          </Grid>
          <Grid item>
            <Typography variant="body1" style={{ fontSize: "1rem" }}>
              (555) 555-5555
            </Typography>
          </Grid>
        </Grid>
        <Grid item container alignItems="center" justify="center">
          <Grid item>
            <img
              src={emailIcon}
              alt="phone icon"
              style={{ marginRight: "0.5em", verticalAlign: "middle" }}
            />
          </Grid>
          <Grid item>
            <Typography variant="body1" style={{ fontSize: "1rem" }}>
              hassaan.zuberi@ucalgary.ca
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item>
            <TextField
              label="Name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Phone"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item>
          <TextField
            id="message"
            rows={10}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            multiline
          />
        </Grid>
        <Grid item>
          <Button className={classes.sendMessageButton} variant="contained">
            Send Message
            <img
              style={{ marginLeft: 5 }}
              src={paperAirplane}
              alt="paper airplane icon"
            />
          </Button>
        </Grid>
      </Grid>
      <Grid item container direction="column" md={8}>
        <CallToAction
          setValue={props.setValue}
          setSelected={props.setSelected}
        />
      </Grid>
    </Grid>
  );
};

export default Contact;
