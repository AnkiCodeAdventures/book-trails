import "./App.css";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({});

function App() {
  return <MantineProvider theme={theme}>{}</MantineProvider>;
}

export default App;
