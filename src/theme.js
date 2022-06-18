import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    primary: {
      // light: "#001E3C",
      // main: "#0A1929",
      // main: "#070535",
      // light: "#454468",

      main: "#181919",
      medium: "#212125",
      faint: "#333333",
    },
    secondary: {
      //   main: "#11cb5f",
      // main: "#30B043",
      // light: "#3FCA54",
      // main: "#5E7334",
      // main: "rgb(193,252,86)",

      main: "#91DD03",
    },
    text: {
      primary: "#fff",
      secondary: "#91DD03",
    },
    // components: {
    //   MuiDrawer: {
    //     styleOverrides: {
    //       // Name of the slot
    //       Paper: {
    //         // Some CSS
    //         backgroundColor: "#000",
    //         color: "white",
    //       },
    //     },
    //   },
    // },
  },
});
