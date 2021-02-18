import React, { useState } from "react";
import Lottie from "react-lottie";
import { cloneDeep } from "lodash";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

//import check from "../assets/check.svg";
//import send from "../assets/send.svg";
import software from "../assets/software.svg";
import mobile from "../assets/mobile.svg";
import website from "../assets/website.svg";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import backArrowDisabled from "../assets/backArrowDisabled.svg";
import forwardArrowDisabled from "../assets/forwardArrowDisabled.svg";
import camera from "../assets/camera.svg";
import upload from "../assets/upload.svg";
import person from "../assets/person.svg";
import persons from "../assets/persons.svg";
import people from "../assets/people.svg";
import info from "../assets/info.svg";
import bell from "../assets/bell.svg";
import users from "../assets/users.svg";
import iphone from "../assets/iphone.svg";
import gps from "../assets/gps.svg";
import customized from "../assets/customized.svg";
import data from "../assets/data.svg";
import android from "../assets/android.svg";
import biometrics from "../assets/biometrics.svg";
import globe from "../assets/globe.svg";

import estimateAnimation from "../animations/estimateAnimation/data.json";

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

  icon: {
    height: "10em",
    width: "10em",
  },
  question: {
    marginTop: "5em",
    marginBottom: "2em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "1.5em",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "1em",
      marginBottom: "1em",
    },
  },
  estimate: {
    ...theme.typography.estimate,
    borderRadius: "30px",
    marginLeft: "20px",
    marginRight: "20px",
    height: "45px",
    width: "250px",
    marginTop: "0.5rem",
    fontSize: "1.35rem",
  },
  arrowIcons: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  estimateModalHeading: {
    paddingLeft: "2em",
    paddingRight: "2em",
    marginTop: "2em",
    paddingTop: 0,
    paddingBottom: 0,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      marginLeft: "2em",
      marginRight: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginLeft: 0,
      marginRight: 0,
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.orange}`,
    marginTop: "4em",
    borderRadius: "5px",
  },
}));

const defaultQuestions = [
  {
    id: 1,
    title: "Which service are you interested in?",
    subtitle: null,
    active: true,
    options: [
      {
        id: 1,
        title: "Software Development",
        subtitle: null,
        icon: software,
        iconAlt: "three floating screens",
        selected: false,
        cost: 0,
      },
      {
        id: 2,
        title: "App Development",
        subtitle: null,
        icon: mobile,
        iconAlt: "phones and tablet ouline",
        selected: false,
        cost: 0,
      },
      {
        id: 3,
        title: "Website Development",
        subtitle: null,
        icon: website,
        iconAlt: "a computer screen outline",
        selected: false,
        cost: 0,
      },
    ],
  },
];

const softwareQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: "Which platforms do you need supported?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Web Application",
        subtitle: null,
        icon: website,
        iconAlt: "computer outline",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "iOS Application",
        subtitle: null,
        icon: iphone,
        iconAlt: "outline of iphone",
        selected: false,
        cost: 100,
      },
      {
        id: 3,
        title: "Android Application",
        subtitle: null,
        icon: android,
        iconAlt: "outlines of android phone",
        selected: false,
        cost: 100,
      },
    ],
    active: true,
  },
  {
    id: 3,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Photo/Video",
        subtitle: null,
        icon: camera,
        iconAlt: "camera outline",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "GPS",
        subtitle: null,
        icon: gps,
        iconAlt: "gps pin",
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "File Transfer",
        subtitle: null,
        icon: upload,
        iconAlt: "outline of cloud with arrow pointing up",
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 4,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Users Authentication",
        subtitle: null,
        icon: users,
        iconAlt: "outline of a person with a plus sign",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Biometrics",
        subtitle: null,
        icon: biometrics,
        iconAlt: "fingerprint",
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "Push Notifications",
        subtitle: null,
        icon: bell,
        iconAlt: "outline of a bell",
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 5,
    title: "What type of custom features do you expect to need?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Low Complexity",
        subtitle: "(Informational)",
        icon: info,
        iconAlt: "'i' inside a circle",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Medium Complexity",
        subtitle: "(Interactive, Customizable, Realtime)",
        icon: customized,
        iconAlt: "two toggle switches",
        selected: false,
        cost: 50,
      },
      {
        id: 3,
        title: "High Complexity",
        subtitle: "(Data Modeling and Computation)",
        icon: data,
        iconAlt: "outline of line graph",
        selected: false,
        cost: 100,
      },
    ],
    active: false,
  },
  {
    id: 6,
    title: "How many users do you expect?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "0-10",
        subtitle: null,
        icon: person,
        iconAlt: "person outline",
        selected: false,
        cost: 1,
      },
      {
        id: 2,
        title: "10-100",
        subtitle: null,
        icon: persons,
        iconAlt: "outline of two people",
        selected: false,
        cost: 1.25,
      },
      {
        id: 3,
        title: "100+",
        subtitle: null,
        icon: people,
        iconAlt: "outline of three people",
        selected: false,
        cost: 1.5,
      },
    ],
    active: false,
  },
];

const websiteQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: "Which type of website are you wanting?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Basic",
        subtitle: "(Informational)",
        icon: info,
        iconAlt: "person outline",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "Interactive",
        subtitle: "(Users, API's, Messaging)",
        icon: customized,
        iconAlt: "outline of two people",
        selected: false,
        cost: 200,
      },
      {
        id: 3,
        title: "E-Commerce",
        subtitle: "(Sales)",
        icon: globe,
        iconAlt: "outline of three people",
        selected: false,
        cost: 250,
      },
    ],
    active: true,
  },
];

const Estimate = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const smaller = useMediaQuery(theme.breakpoints.down("sm"));
  const medium = useMediaQuery(theme.breakpoints.down("md"));
  const smallest = useMediaQuery(theme.breakpoints.down("xs"));

  const [questions, setQuestions] = useState(defaultQuestions);

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [nameHelperText, setNameHelperText] = useState("");
  const [email, setEmail] = useState("");
  const [emailHelperText, setEmailHelperText] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneHelperText, setPhoneHelperText] = useState("");
  const [message, setMessage] = useState("");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const nextQuestion = () => {
    //creating a deep copy of state Questions to keep the state immutable
    const updatedQuestions = cloneDeep(questions);
    //filtering out the currently active question
    const activeQuestion = updatedQuestions.filter(
      (question) => question.active
    );
    //Getting index of active question
    const activeQuestionIndex = activeQuestion[0].id - 1;
    //Getting next question index
    const nextQuestionIndex = activeQuestionIndex + 1;
    //setting active question to false
    updatedQuestions[activeQuestionIndex] = {
      ...activeQuestion[0],
      active: false,
    };
    //setting next question to true
    updatedQuestions[nextQuestionIndex] = {
      ...updatedQuestions[nextQuestionIndex],
      active: true,
    };
    //Finally Update the question structure in state
    setQuestions(updatedQuestions);
  };

  const nextQuestionDisabled = () => {
    //Filter out the currently active question
    const activeQuestion = questions.filter((question) => question.active);
    //Check if active question id is the last id in the questions array and return true
    if (activeQuestion[0].id === questions[questions.length - 1].id)
      return true;
    //Under all other circumstances we need to enable question navigation
    return false;
  };

  const previousQuestion = () => {
    //creating a deep copy of state Questions to keep the state immutable
    const updatedQuestions = cloneDeep(questions);
    //filtering out the currently active question
    let activeQuestion = updatedQuestions.filter((question) => question.active);
    //Getting index of active question
    const activeQuestionIndex = activeQuestion[0].id - 1;
    //Getting next question index
    const previousQuestionIndex = activeQuestionIndex - 1;
    //setting active question to false
    updatedQuestions[activeQuestionIndex] = {
      ...activeQuestion[0],
      active: false,
    };
    //setting next question to true
    updatedQuestions[previousQuestionIndex] = {
      ...updatedQuestions[previousQuestionIndex],
      active: true,
    };
    //Finally Update the question structure in state
    setQuestions(updatedQuestions);

    //if we need to restrict user to select only one type of service
    //its kind of a reset function for question
    //Without this block of code user can still go back n forth between questions even after going back to first question
    // activeQuestion = updatedQuestions.filter(
    //   (question) => question.active
    // );
    // if(activeQuestion[0].title === 'Which service are you interested in?'){
    //   setQuestions(defaultQuestions);
    // }
  };

  const previousQuestionDisabled = () => {
    //Filter out the currently active question
    const activeQuestion = questions.filter((question) => question.active);
    //Check if active question id is the first id in the questions array and return true
    if (activeQuestion[0].id === questions[0].id) return true;
    //Under all other circumstances we need to enable question navigation
    return false;
  };

  const handleOptionSelection = (id) => {
    //creating a deep copy of state Questions to keep the state immutable
    const updatedQuestions = cloneDeep(questions);
    //filtering out the active question
    const activeQuestion = updatedQuestions.filter(
      (question) => question.active
    );
    //Getting the index of currently active question
    const activeQuestionIndex = activeQuestion[0].id - 1;
    //Getting the selected option from currently active question using the option id input parameter
    const selectedOption =
      updatedQuestions[activeQuestionIndex].options[id - 1];
    //Getting the previous selected option from currently active question and filter for any other options seleted
    const previouslySelectedOption = activeQuestion[0].options.filter(
      (option) => option.selected
    );
    //switch over active question subtitle to find whether single or multiple questions needed to be selected.
    switch (activeQuestion[0].subtitle) {
      //The case where only one option can be seleted at a time
      case "Select one.":
        //Check if there is any already or previously selected option exist
        //if condition is true => toggle the previously selected option
        if (previouslySelectedOption[0])
          previouslySelectedOption[0].selected = !previouslySelectedOption[0]
            .selected;
        //if there is no previously selected option then Toggle the options currently selected property
        selectedOption.selected = !selectedOption.selected;
        break;
      default:
        //In all other cases user can select multiple options, so toggle selection
        selectedOption.selected = !selectedOption.selected;
        break;
    }
    //switch over selected option title to find which set of questions should be shown to the user
    switch (selectedOption.title) {
      //if selected option title matches the swtich case => question state is updated to show relevant questions
      case "Software Development":
        setQuestions(softwareQuestions);
        break;
      case "App Development":
        setQuestions(softwareQuestions);
        break;
      case "Website Development":
        setQuestions(websiteQuestions);
        break;
      default:
        //if selected option title doesnt match any switch case then we will simply update the question
        setQuestions(updatedQuestions);
        break;
    }
  };

  const onFieldInputChange = (event) => {
    let valid;
    switch (event.target.id) {
      case "name":
        setName(event.target.value);
        if (event.target.value !== "") {
          valid = /^[a-z ,.'-]+$/i.test(event.target.value);
          if (!valid) {
            setNameHelperText(
              `Cannot include numbers, brackets and special characters`
            );
          } else {
            setNameHelperText("");
          }
        } else {
          setNameHelperText("");
        }
        break;
      case "email":
        setEmail(event.target.value);
        if (event.target.value !== "") {
          valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
            event.target.value
          );
          if (!valid) {
            setEmailHelperText("Invalid email.");
          } else {
            setEmailHelperText("");
          }
        } else {
          setEmailHelperText("");
        }

        break;
      case "phone":
        setPhone(event.target.value);
        if (event.target.value !== "") {
          valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
            event.target.value
          );
          if (!valid) {
            setPhoneHelperText("Invalid Phone Number");
          } else {
            setPhoneHelperText("");
          }
        } else {
          setPhoneHelperText("");
        }
        break;
      default:
        break;
    }
  };

  return (
    <Grid container direction="row">
      <Grid item container direction="column" md>
        <Grid item className={classes.heading}>
          <Typography variant="h2">Estimate</Typography>
        </Grid>
        <Grid
          item
          style={{
            marginTop: smaller ? 0 : medium ? "9em" : "7em",
            marginBottom: smaller ? 0 : "5em",
            height: smallest ? "10em" : smaller ? "17.5em" : "auto",
            marginRight: smaller ? "0" : "7.5em",
            maxWidth: smaller ? "100%" : "40em",
          }}
        >
          <Lottie options={defaultOptions} height="100%" width="100%" />
        </Grid>
      </Grid>
      <Grid item container direction="column" md>
        {questions
          .filter((question) => question.active)
          .map((question, index) => (
            <React.Fragment key={index}>
              <Grid item className={classes.question}>
                <Typography variant="h4" align="center">
                  {question.title}
                </Typography>
                <Typography variant="subtitle1" align="center" gutterBottom>
                  {question.subtitle}
                </Typography>
              </Grid>
              <Grid item container>
                {question.options.map((option, i) => (
                  <React.Fragment key={i}>
                    <Grid
                      item
                      container
                      alignItems="center"
                      //here we converted regular button component to display data in a grid !important styling
                      style={{
                        marginTop: smallest && i !== 0 ? "4em" : "2em",
                        textTransform: "none",
                        display: "grid",
                        backgroundColor: option.selected
                          ? theme.palette.common.orange
                          : null,
                        borderRadius: 0,
                      }}
                      component={Button}
                      onClick={() => handleOptionSelection(option.id)}
                      direction="column"
                      sm
                    >
                      <Grid item>
                        <img
                          src={option.icon}
                          alt={option.iconAlt}
                          className={classes.icon}
                        />
                      </Grid>
                      <Grid
                        item
                        style={{ maxWidth: "10em", marginTop: "0.5em" }}
                      >
                        <Typography variant="h6" align="center">
                          {option.title}
                        </Typography>
                        <Typography variant="caption" align="center">
                          {option.subtitle}
                        </Typography>
                      </Grid>
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </React.Fragment>
          ))}
        <Grid
          container
          direction="row"
          justify="space-around"
          style={{ marginTop: "3em", marginBottom: "2.5em" }}
        >
          <Grid item>
            <IconButton
              className={classes.arrowIcons}
              onClick={previousQuestion}
              disabled={previousQuestionDisabled()}
            >
              <img
                src={previousQuestionDisabled() ? backArrowDisabled : backArrow}
                alt="Previous question"
              />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              className={classes.arrowIcons}
              onClick={nextQuestion}
              disabled={nextQuestionDisabled()}
            >
              <img
                src={
                  nextQuestionDisabled() ? forwardArrowDisabled : forwardArrow
                }
                alt="Next question"
              />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item align="center" style={{ marginTop: "3em" }}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.estimate}
            onClick={() => {
              setOpen(true);
            }}
          >
            Get Estimate
          </Button>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="estimate-modal-title"
        fullScreen={smallest ? true : false}
        style={{ zIndex: 1302 }}
      >
        <DialogTitle
          id="estimate-modal-title"
          className={classes.estimateModalHeading}
          disableTypography
        >
          <Typography variant="h4">Estimate</Typography>
        </DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item container direction="column">
              <Grid item style={{ width: "100%", marginTop: "0.5em" }}>
                <TextField
                  label="Name"
                  id="name"
                  error={nameHelperText.length !== 0}
                  helperText={nameHelperText}
                  value={name}
                  onChange={onFieldInputChange}
                  fullWidth
                />
              </Grid>
              <Grid item style={{ width: "100%", marginTop: "0.5em" }}>
                <TextField
                  label="Email"
                  id="email"
                  error={emailHelperText.length !== 0}
                  helperText={emailHelperText}
                  value={email}
                  onChange={onFieldInputChange}
                  fullWidth
                />
              </Grid>
              <Grid item style={{ width: "100%", marginTop: "0.5em" }}>
                <TextField
                  label="Phone"
                  id="phone"
                  error={phoneHelperText.length !== 0}
                  helperText={phoneHelperText}
                  value={phone}
                  onChange={onFieldInputChange}
                  fullWidth
                />
              </Grid>
              <Grid item style={{ width: "100%" }}>
                <TextField
                  InputProps={{ disableUnderline: true }}
                  id="message"
                  rows={6}
                  value={message}
                  className={classes.message}
                  style={{ marginTop: "2em" }}
                  onChange={(e) => setMessage(e.target.value)}
                  multiline
                  fullWidth
                />
              </Grid>
              <Grid item style={{ maxWidth: "30em", marginTop: "1.5em"}}>
                <Typography variant="body1" paragraph>We can create this digital solution for an estimated</Typography>
                <Typography variant="body1" paragraph>Fill out your name, phone number and email to place your request, and we'll get back to you with details moving forward and a final price.</Typography>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

export default Estimate;
