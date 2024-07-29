import "./App.css";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider, rem } from "@mantine/core";
import AddNewBook from "./components/AddNewBook/AddNewBook";
import NavBar from "./components/NavBar/NavBar";

const theme = createTheme({
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(20),
  },
  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.55", //md default value
    lg: "1.6",
    xl: "1.65",
  },
  headings: {
    //properties for all headings
    fontFamily: "Roboto",
    fontWeight: "400",
    textWrap: "pretty",

    sizes: {
      h1: {
        fontWeight: "100",
        fontSize: rem(36),
        lineHeight: "1.4",
      },
    },
  },
  // colors: open color
  primaryColor: "orange",
  primaryShade: 6,
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
  },
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <NavBar />
      <AddNewBook />
    </MantineProvider>
  );
}

export default App;
