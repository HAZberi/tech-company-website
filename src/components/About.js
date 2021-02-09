import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CallToAction from "../components/ui/CallToAction.js";
import history from "../assets/history.svg";
import founder from "../assets/founder.jpg";

const useStyles = makeStyles((theme) => ({
  statement: {
    fontStyle: "italic",
    fontWeight: 400,
    fontSize: "1.5rem",
    maxWidth: "50em",
    lineHeight: 1.5,
  },
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
    maxWidth: "50em",
    marginLeft: "5em",
    [theme.breakpoints.down("lg")]: {
      maxWidth: "50%",
      marginLeft: "4em",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "80%",
      marginLeft: 0,
      marginTop: "2.5em",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "40rem",
      marginTop: "2.5rem",
      marginLeft: 0,
    },
  },
  teamCardContainer: {
    maxWidth: "30em",
    marginLeft: "2.5em",
    marginRight: "2.5em",
    [theme.breakpoints.down("lg")]: {
      maxWidth: "30%",
      marginLeft: "2em",
      marginRight: "2em",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "60%",
      marginLeft: 0,
      marginRight: 0,
      marginTop: "2.5em",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30rem",
      marginTop: "2.5rem",
      marginLeft: 0,
    },
  },
}));

const About = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const smaller = useMediaQuery(theme.breakpoints.down("sm"));
  const smallest = useMediaQuery(theme.breakpoints.down("xs"));
  const larger = useMediaQuery(theme.breakpoints.down("lg"));
  const medium = useMediaQuery(theme.breakpoints.down("md"));

  const historyJSX = (
    <Grid
      item
      align="center"
      style={{ maxWidth: smallest ? "80%" : "30em" }}
      lg
    >
        <img src={history} alt="an open book with a feather pen" style={{ maxWidth: smallest ? "80%" : "30em" }}/>
    </Grid>
  );
  return (
    <Grid container direction="column">
      <Grid item className={classes.heading}>
        <Typography variant="h2" gutterBottom>
          About Us
        </Typography>
      </Grid>
      <Grid item container justify="center" className={classes.rowContainer}>
        <Typography variant="h4" align="center" className={classes.statement}>
          Whether it be person, business to consumer, or an individual to their
          interests, technology is meant to bring us closer to what we care
          about in the best way possible. beri.dev will use that principle to
          provide fast, modern inexpensive and aesthetic software to the Prairies
          and beyond.
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
        className={classes.rowContainer}
      >
        {medium ? historyJSX : null}
        <Grid
          item
          container
          direction="column"
          alignItems={smaller ? "center" : "flex-start"}
          style={{
            marginLeft: 0,
            marginRight: medium ? 0 : larger ? "2.5em" : "5em",
          }}
          className={classes.itemContainer}
          lg
        >
          <Grid item align={smaller ? "center" : "left"}>
            <Typography variant="h4" gutterBottom>
              History
            </Typography>
          </Grid>
          <Grid item style={{ textAlign: smallest ? "center" : "justify" }}>
            <Typography variant="body1" paragraph>
              We’re the new kid on the block.
            </Typography>
            <Typography variant="body1" paragraph>
              Founded in 2019, we’re ready to get our hands on the world’s
              business problems.
            </Typography>
            <Typography variant="body1" paragraph>
              It all started with one question: Why aren’t all businesses using
              available technology? There are many different answers to that
              question: economic barriers, social barriers, educational
              barriers, and sometimes institutional barriers.
            </Typography>
            <Typography variant="body1" paragraph>
              We aim to be a powerful force in overcoming these obstacles.
              Recent developments in software engineering and computing power,
              compounded by the proliferation of smart phones, has opened up
              infinite worlds of possibility. Things that have always been done
              by hand can now be done digitally and automatically, and
              completely new methods of interaction are created daily. Taking
              full advantage of these advancements is the name of the game.
            </Typography>
            <Typography variant="body1" paragraph>
              All this change can be a lot to keep up with, and that’s where we
              come in.
            </Typography>
          </Grid>
        </Grid>
        {medium ? null : historyJSX}
      </Grid>
      <Grid item className={classes.heading} align="center">
        <Typography variant="h3">Team</Typography>
      </Grid>
      <Grid container direction="row" justify="space-around" className={classes.rowContainer}>
        <Grid item container direction="column" className={classes.teamCardContainer} lg>
          <Grid item align="center">
            <img src={founder} style={{maxWidth: "100%"}} alt="founder's headshot" />
          </Grid>
          <Grid item style={{marginTop: "1rem"}}>
            <Typography variant="h4">
              Hassaan Zuberi
            </Typography>
            <Typography variant="caption" gutterBottom>
              Founder
            </Typography>
          </Grid>
          <Grid item style={{maxWidth: "100%", marginTop: "1.5rem"}}>
            <Typography variant="body1" paragraph>
              I taught myself basic coding from a library book in third grade, and ever since then my passion has solely been set on learning — learning about computers, learning mathematics and philosophy, studying design, always just learning.
            </Typography>
            <Typography variant="body1" paragraph>
              Now I’m ready to apply everything I’ve learned, and to help others with the intuition I have developed.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container direction="column" className={classes.teamCardContainer} lg>
          <Grid item align="center">
            <img src={founder} style={{maxWidth: "100%"}} alt="founder's headshot" />
          </Grid>
          <Grid item style={{marginTop: "1rem"}}>
            <Typography variant="h4">
              Hassaan Zuberi
            </Typography>
            <Typography variant="caption" gutterBottom>
              Founder
            </Typography>
          </Grid>
          <Grid item style={{maxWidth: "100%", marginTop: "1.5rem"}}>
            <Typography variant="body1" paragraph>
              I taught myself basic coding from a library book in third grade, and ever since then my passion has solely been set on learning — learning about computers, learning mathematics and philosophy, studying design, always just learning.
            </Typography>
            <Typography variant="body1" paragraph>
              Now I’m ready to apply everything I’ve learned, and to help others with the intuition I have developed.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container direction="column" className={classes.teamCardContainer} lg>
          <Grid item align="center">
            <img src={founder} style={{maxWidth: "100%"}} alt="founder's headshot" />
          </Grid>
          <Grid item style={{marginTop: "1rem"}}>
            <Typography variant="h4">
              Hassaan Zuberi
            </Typography>
            <Typography variant="caption" gutterBottom>
              Founder
            </Typography>
          </Grid>
          <Grid item style={{maxWidth: "100%", marginTop: "1.5rem"}}>
            <Typography variant="body1" paragraph>
              I taught myself basic coding from a library book in third grade, and ever since then my passion has solely been set on learning — learning about computers, learning mathematics and philosophy, studying design, always just learning.
            </Typography>
            <Typography variant="body1" paragraph>
              Now I’m ready to apply everything I’ve learned, and to help others with the intuition I have developed.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* Call to Action Block */}
        {/* HINT: a background image can be set directly on the Grid Container
                as className Prop and then we dont need to set the inner container with
                absolute positioning
            */}
        <CallToAction
          setValue={props.setValue}
          setSelected={props.setSelected}
        />
      </Grid>
    </Grid>
  );
};

export default About;
