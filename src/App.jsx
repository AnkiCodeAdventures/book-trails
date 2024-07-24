import "./App.css";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import AddNewBook from "./components/AddNewBook/AddNewBook";
import NavBar from "./components/NavBar/NavBar";

const theme = createTheme({});

function App() {
  return (
    <MantineProvider theme={theme}>
      <NavBar />
      <AddNewBook />
    </MantineProvider>
  );
}

export default App;
