import { createTheme } from "@mui/material";
import { lightBlue, lightGreen } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
      light: lightBlue,
    },
    secondary: {
      main: green[500],
      light: lightGreen,
    },
  },
});
