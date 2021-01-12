import { createMuiTheme } from "@material-ui/core/styles";

const blue = "#166EE9";
const orange = "#E99116";
const hoverBlue = "#0050C0"

const theme = createMuiTheme({
  palette: {
    common: {
      blue: `${blue}`,
      orange: `${orange}`,
      hoverBlue: `${hoverBlue}`,
    },
    type: "light",
    primary: {
      main: `${orange}`,
    },
    secondary: {
      main: `${blue}`,
    },
  },
  typography: {
    tab: {
        textTransform: 'none',
        fontWeight: 700,
        fontFamily: 'Raleway',
        fontSize: '0.8rem',
    },
    estimate: {
        textTransform: 'none',
        fontSize: '0.8rem',  
    }
  },
});

export default theme;
