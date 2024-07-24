import "./App.css";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import AddNewBook from "./components/AddNewBook/AddNewBook";

const theme = createTheme({});

function App() {
  return (
    <MantineProvider theme={theme}>
      <AddNewBook />
    </MantineProvider>
  );
}

export default App;
