import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CallToAction from "./ui/CallToAction";
import technologyAnimation from "../animations/technologyAnimation/data.json";
import consultation from "../assets/consultationIcon.svg";
import vision from "../assets/vision.svg";
import mockup from "../assets/mockupIcon.svg";
import review from "../assets/reviewIcon.svg";
import design from "../assets/designIcon.svg";
import build from "../assets/buildIcon.svg";
import launch from "../assets/launchIcon.svg";
import maintain from "../assets/maintainIcon.svg";
import iterate from "../assets/iterateIcon.svg";

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
  processRowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    paddingBottom: "10em",
    paddingTop: "3em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  imgContainer: {
    maxWidth: "50em",
    [theme.breakpoints.down("xl")]: {
      textAlign: "right",
    },
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "80%",
    },
  },
  launchImgContainer: {
    maxWidth: "50em",
    [theme.breakpoints.down("xl")]: {
      textAlign: "right",
    },
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      paddingLeft: "15em",
      paddingRight: "15em",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "80%",
      paddingLeft: 0,
      paddingRight: 0,
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
}));

const Revolution = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const medium = useMediaQuery(theme.breakpoints.down("md"));
  const larger = useMediaQuery(theme.breakpoints.down("lg"));
  const smaller = useMediaQuery(theme.breakpoints.down("sm"));
  const smallest = useMediaQuery(theme.breakpoints.down("xs"));

  const technologyAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: technologyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const technologyAnimationJSX = (
    <Grid
      item
      align="center"
      style={{ maxWidth: smallest ? "80%" : "30em" }}
      lg
    >
      <Lottie
        style={{ maxWidth: smallest ? "80%" : "30em" }}
        options={technologyAnimationOptions}
      />
    </Grid>
  );
  return (
    <Grid container direction="column">
      <Grid item className={classes.heading}>
        <Typography variant="h2" gutterBottom>
          The Revolution
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
        className={classes.rowContainer}
      >
        <Grid
          item
          align="center"
          style={{ maxWidth: smallest ? "80%" : "30em" }}
          lg
        >
          <img
            style={{ maxWidth: smallest ? "80%" : "30em" }}
            src={vision}
            alt="Alberta Vision background"
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems={smaller ? "center" : "flex-start"}
          className={classes.itemContainer}
          lg
        >
          <Grid item align={smaller ? "center" : "left"}>
            <Typography variant="h4" gutterBottom>
              Vision
            </Typography>
          </Grid>
          <Grid item style={{ textAlign: smallest ? "center" : "justify" }}>
            <Typography variant="body1" paragraph>
              The rise of computers, and subsequently the Internet, has
              completely altered every aspect of human life. This has increased
              our comfort, broadened our connections, and reshaped how we view
              the world.
            </Typography>
            <Typography variant="body1" paragraph>
              What once was confined to huge rooms and teams of engineers now
              resides in every single one of our hands. Harnessing this
              unlimited potential by using it to solve problems and better lives
              is at the heart of everything we do.
            </Typography>
            <Typography variant="body1" paragraph>
              We want to help businesses capitalize on the latest and greatest
              technology. The best way to predict the future is to be the one
              building it, and we want to help guide the world into this next
              chapter of technological expansion, exploration, and innovation.
            </Typography>
            <Typography variant="body1" paragraph>
              By holding ourselves to rigorous standards and pristine quality,
              we can ensure you have the absolute best tools necessary to thrive
              in this new frontier.
            </Typography>
            <Typography variant="body1" paragraph>
              We see a future where every individual has personalized software
              custom tailored to their lifestyle, culture, and interests,
              helping them overcome life’s obstacles. Each project is a step
              towards that goal.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
        className={classes.rowContainer}
      >
        {medium ? technologyAnimationJSX : null}
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
              Technology
            </Typography>
          </Grid>
          <Grid item style={{ textAlign: smallest ? "center" : "justify" }}>
            <Typography variant="body1" paragraph>
              In 2013, Facebook invented a new way of building websites. This
              new system, React.js, completely revolutionizes the process and
              practice of website development.
            </Typography>
            <Typography variant="body1" paragraph>
              Instead of chaining together long individual pages, like
              traditional websites, React websites are built with little chunks
              of code called components. These components are faster, easier to
              maintain, and are easily reused and customized, each serving a
              singular purpose.
            </Typography>
            <Typography variant="body1" paragraph>
              Two years later they shocked the world by releasing a similar
              system, React Native, for producing iOS and Android apps. Instead
              of having to master two completely separate development platforms,
              you can leverage the knowledge you already possessed from building
              websites and reapply it directly! This was a huge leap forward.
            </Typography>
            <Typography variant="body1" paragraph>
              This technology is now being used by companies like AirBnB,
              Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when
              Facebook purchased Instagram large portions of it were even
              rebuilt using React.
            </Typography>
            <Typography variant="body1" paragraph>
              Developers have since built on top of these systems by automating
              project setup and deployment, allowing creators to focus as much
              as possible on their work itself.
            </Typography>
            <Typography variant="body1" paragraph>
              These technical advancements translate into savings by
              significantly reducing the workload and streamlining the workflow
              for developing new pieces of software, while also lowering the
              barrier to entry for mobile app development.
            </Typography>
            <Typography variant="body1" paragraph>
              This puts personalization in your pocket — faster, better, and
              more affordable than ever before.
            </Typography>
          </Grid>
        </Grid>
        {medium ? null : technologyAnimationJSX}
      </Grid>
      <Grid item className={classes.heading} align="center">
        <Typography variant="h3">Process</Typography>
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
        className={classes.processRowContainer}
        style={{ backgroundColor: "#B3B3B3" }}
      >
        <Grid item className={classes.imgContainer} lg>
          <img
            style={{ maxWidth: smallest ? "80%" : "50em" }}
            src={consultation}
            alt="handshake"
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems={smaller ? "center" : "flex-start"}
          className={classes.itemContainer}
          lg
        >
          <Grid item align={smaller ? "center" : "left"}>
            <Typography variant="h4" gutterBottom>
              Consultation
            </Typography>
          </Grid>
          <Grid item style={{ textAlign: smallest ? "center" : "justify" }}>
            <Typography variant="body1" style={{ color: "#f8f8f3" }} paragraph>
              Our process begins the moment you realize you need a piece of
              technology for your business. Whether you already have an idea for
              where to start and what to do, or if you just know you want to
              step things up, our initial consultation will help you examine
              your business holistically to find the best solutions.
            </Typography>
            <Typography variant="body1" style={{ color: "#fff" }} paragraph>
              Detailed notes will be taken on your requirements and constraints,
              while taking care to identify other potential areas for
              consideration.
            </Typography>
            <Typography variant="body1" style={{ color: "#fff" }} paragraph>
              Cutting-edge advancements in machine learning like object
              detection and natural language processing allow computers to do
              things previously unimaginable, and our expertise and intuition
              will help usher you into this new future of possibilities.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
        className={classes.processRowContainer}
        style={{ backgroundColor: "#ff7373" }}
      >
        <Grid item className={classes.imgContainer} lg>
          <img
            style={{ maxWidth: smallest ? "80%" : "80%" }}
            src={mockup}
            alt="monitor with website mockup"
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems={smaller ? "center" : "flex-start"}
          className={classes.itemContainer}
          lg
        >
          <Grid item align={smaller ? "center" : "left"}>
            <Typography variant="h4" gutterBottom>
              Mockup
            </Typography>
          </Grid>
          <Grid item style={{ textAlign: smallest ? "center" : "justify" }}>
            <Typography variant="body1" style={{ color: "#f8f8f3" }} paragraph>
              After we settle on the best path forward and decide on a solution
              to pursue, details like the cost and timeline will be finalized.
            </Typography>
            <Typography variant="body1" style={{ color: "#fff" }} paragraph>
              Then it’s time for us to start on your minimum viable product.
              That’s just a fancy term for a mockup, which doesn’t include
              colors, images, or any other polished design elements, but
              captures the essential layout structure and functionality.
            </Typography>
            <Typography variant="body1" style={{ color: "#fff" }} paragraph>
              This helps us understand and refine the solution itself before
              getting distracted by specifics and looks.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
        className={classes.processRowContainer}
        style={{ backgroundColor: "#39B54A" }}
      >
        <Grid item className={classes.imgContainer} lg>
          <img
            style={{ maxWidth: smallest ? "80%" : "80%" }}
            src={review}
            alt="magnifying glass"
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems={smaller ? "center" : "flex-start"}
          className={classes.itemContainer}
          lg
        >
          <Grid item align={smaller ? "center" : "left"}>
            <Typography variant="h4" gutterBottom>
              Review
            </Typography>
          </Grid>
          <Grid item style={{ textAlign: smallest ? "center" : "justify" }}>
            <Typography variant="body1" style={{ color: "#f8f8f3" }} paragraph>
              Before moving any farther we come back to you with our progress.
              This gives you the freedom to discuss any changes you may want or
              any ideas you may have come up with before any heavy lifting has
              been done.
            </Typography>
            <Typography variant="body1" style={{ color: "#fff" }} paragraph>
              We give you an interactive demonstration of the mockups,
              thoroughly explaining the thought process that went into each
              screen and every anticipated feature.
            </Typography>
            <Typography variant="body1" style={{ color: "#fff" }} paragraph>
              Once you’re completely satisfied with the vision for our solution
              we get down to the nitty gritty, fine-details of design.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
        className={classes.processRowContainer}
        style={{ backgroundColor: "#A67C52" }}
      >
        <Grid item className={classes.imgContainer} lg>
          <img
            style={{ maxWidth: smallest ? "80%" : "80%" }}
            src={design}
            alt="paint brush leaving a stroke of paint"
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems={smaller ? "center" : "flex-start"}
          className={classes.itemContainer}
          lg
        >
          <Grid item align={smaller ? "center" : "left"}>
            <Typography variant="h4" gutterBottom>
              Design
            </Typography>
          </Grid>
          <Grid item style={{ textAlign: smallest ? "center" : "justify" }}>
            <Typography variant="body1" style={{ color: "#f8f8f3" }} paragraph>
              Using the mockups and notes taken during the consultation as
              guides, we will start ironing out what the final product will look
              like. This also involves using any brand material like fonts,
              colors, and logos to extend the experience you’re already familiar
              with.
            </Typography>
            <Typography variant="body1" style={{ color: "#fff" }} paragraph>
              No aspect is superfluous, and care will be taken with every
              decision.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
        className={classes.processRowContainer}
        style={{ backgroundColor: "#39B54A" }}
      >
        <Grid item className={classes.imgContainer} lg>
          <img
            style={{ maxWidth: smallest ? "80%" : "80%" }}
            src={review}
            alt="magnifying glass"
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems={smaller ? "center" : "flex-start"}
          className={classes.itemContainer}
          lg
        >
          <Grid item align={smaller ? "center" : "left"}>
            <Typography variant="h4" gutterBottom>
              Review
            </Typography>
          </Grid>
          <Grid item style={{ textAlign: smallest ? "center" : "justify" }}>
            <Typography variant="body1" style={{ color: "#f8f8f3" }} paragraph>
              A second round of review is essential to our goal of creating
              exactly what you want, exactly how you want it.
            </Typography>
            <Typography variant="body1" style={{ color: "#fff" }} paragraph>
              This time we’ll be going over the finalized designs in another
              fully interactive demonstration. Again this gives you an
              opportunity to tweak things and make sure we get everything right
              the first time.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
        className={classes.processRowContainer}
        style={{ backgroundColor: "#FBB03B" }}
      >
        <Grid item className={classes.imgContainer} lg>
          <img
            style={{ maxWidth: smallest ? "80%" : "80%" }}
            src={build}
            alt="a crane machine wtih a building under construction"
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems={smaller ? "center" : "flex-start"}
          className={classes.itemContainer}
          lg
        >
          <Grid item align={smaller ? "center" : "left"}>
            <Typography variant="h4" gutterBottom>
              Build
            </Typography>
          </Grid>
          <Grid item style={{ textAlign: smallest ? "center" : "justify" }}>
            <Typography variant="body1" style={{ color: "#f5f5f5" }} paragraph>
              Here’s where we get down to business.
            </Typography>
            <Typography variant="body1" style={{ color: "#fff" }} paragraph>
              Engineering begins after your approval on the final designs. We
              start by scaffolding out the project on a high level, prioritizing
              some areas over others.
            </Typography>
            <Typography variant="body1" style={{ color: "#fff" }} paragraph>
              Each area is then developed in order of importance until ready to
              be connected to the next piece.
            </Typography>
            <Typography variant="body1" style={{ color: "#fff" }} paragraph>
              Typically the backend, behind the scenes operations are completed
              first. Once all the services are in place we can then create the
              front end, user side of things.
            </Typography>
            <Typography variant="body1" style={{ color: "#fff" }} paragraph>
              Finishing the application doesn’t mean we’re done though, because
              we use extensive testing to guarantee compatibility with all
              intended devices.
            </Typography>
            <Typography variant="body1" style={{ color: "#fff" }} paragraph>
              Only after our rigorous examinations will we accept a product as
              finished, then pushing it through the production pipeline. This
              produces an optimized, compressed, consumer version of the code
              and assets ready for deployment.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
        className={classes.processRowContainer}
        style={{ backgroundColor: "#C1272D" }}
      >
        <Grid item className={classes.launchImgContainer} lg>
          <img
            style={{ maxWidth: smallest ? "80%" : "80%" }}
            src={launch}
            alt="rocket on a launch pad"
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems={smaller ? "center" : "flex-start"}
          className={classes.itemContainer}
          lg
        >
          <Grid item align={smaller ? "center" : "left"}>
            <Typography variant="h4" gutterBottom>
              Launch
            </Typography>
          </Grid>
          <Grid item style={{ textAlign: smallest ? "center" : "justify" }}>
            <Typography variant="body1" style={{ color: "#f8f8f3" }} paragraph>
              The moment we’ve all been waiting for.
            </Typography>
            <Typography variant="body1" style={{ color: "#fff" }} paragraph>
              When construction comes to a close you’re the first one to know.
              We’ll give our final demonstration to show off your shiny new
              software in the wild so you know exactly how it will look to your
              users.
            </Typography>
            <Typography variant="body1" style={{ color: "#fff" }} paragraph>
              When you say the word, we press the button and launch your project
              out to the public. We’re there to ensure everything goes to plan
              so you can start reaping the rewards of your technological
              investment immediately.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
        className={classes.processRowContainer}
        style={{ backgroundColor: "#8E45CE" }}
      >
        <Grid item className={classes.imgContainer} lg>
          <img
            style={{ maxWidth: smallest ? "80%" : "80%" }}
            src={maintain}
            alt="a wrench and some screws"
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems={smaller ? "center" : "flex-start"}
          className={classes.itemContainer}
          lg
        >
          <Grid item align={smaller ? "center" : "left"}>
            <Typography variant="h4" gutterBottom>
              Maintain
            </Typography>
          </Grid>
          <Grid item style={{ textAlign: smallest ? "center" : "justify" }}>
            <Typography variant="body1" style={{ color: "#f8f8f3" }} paragraph>
              Our work doesn’t end there.
            </Typography>
            <Typography variant="body1" style={{ color: "#fff" }} paragraph>
              After a successful launch we keep in close contact to listen to
              feedback and hear how the project is being received.
            </Typography>
            <Typography variant="body1" style={{ color: "#fff" }} paragraph>
              From there on out we make sure your application is kept up to date
              and taking advantage of the best features and practices available.
              When new developments arise or new techniques are discovered in
              future projects, we will implement those advancements in your
              project as part of our routine maintenance.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
        className={classes.processRowContainer}
        style={{ backgroundColor: "#29ABE2" }}
      >
        <Grid item className={classes.imgContainer} lg>
          <img
            style={{ maxWidth: smallest ? "80%" : "80%" }}
            src={iterate}
            alt="falling dominos"
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems={smaller ? "center" : "flex-start"}
          className={classes.itemContainer}
          lg
        >
          <Grid item align={smaller ? "center" : "left"}>
            <Typography variant="h4" gutterBottom>
              Iterate
            </Typography>
          </Grid>
          <Grid item style={{ textAlign: smallest ? "center" : "justify" }}>
            <Typography variant="body1" style={{ color: "#f8f8f3" }} paragraph>
              The cycle repeats whenever you come up with a new idea for
              extending your current project, or come up with a brand new system
              entirely.
            </Typography>
            <Typography variant="body1" style={{ color: "#fff" }} paragraph>
              By planning for future features and changes we can build and
              evolve your application over time. As new use cases and customer
              needs develop we can respond with continuous integration of new
              content.
            </Typography>
            <Typography variant="body1" style={{ color: "#fff" }} paragraph>
              Our iterative process will keep you current and competitive,
              allowing you to quickly implement changes instead of waiting
              months for a single update.
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

export default Revolution;
