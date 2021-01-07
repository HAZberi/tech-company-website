import { createMuiTheme } from "@material-ui/core/styles";

const blue = "#166EE9";
const orange = "#E99116";

const theme = createMuiTheme({
  palette: {
    common: {
      blue: `${blue}`,
      orange: `${orange}`,
    },
    type: "light",
    primary: {
      main: `${blue}`,
    },
    secondary: {
      main: `${orange}`,
    },
  },
  typography: {
    h3: {
      fontWeight: 300,
    },
  },
});

export default theme;
