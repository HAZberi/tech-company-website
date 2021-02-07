import React from "react";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    statement: {
        fontStyle: "italic",
        fontWeight: 300,
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
}));

const About = (props) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Grid container direction="column">
            <Grid item className={classes.heading}>
                <Typography variant="h2" gutterBottom>About Us</Typography>
            </Grid>
            <Grid item container justify="center">
                <Typography variant="h4" align="center" className={classes.statement}>
                    Whether it be person, business to consumer, or an individual to their interests, technology is meant to bring us closer to what we care about in the best way possible. beri.dev will use that principle to provide fast, modern inexpensive and aesthetic software to the Midwest and beyond.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default About; 
