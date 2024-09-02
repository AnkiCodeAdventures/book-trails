import "./App.css";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider, rem } from "@mantine/core";
import AddNewBook from "./components/AddNewBook/AddNewBook";
import NavBar from "./components/NavBar/NavBar";
import useBooks from "./hooks/useBooks";
import { ToastContainer } from "react-toastify";
import RenderBook from "./components/RenderBook/RenderBook";
import { ModalsProvider } from "@mantine/modals";

const theme = createTheme({
  white: "#F5F5F5",
  black: "#5b3e3c",
  fontFamily: "Poppins, sans-serif",
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(24),
  },

  lineHeights: {
    xs: "1.3",
    sm: "1.45",
    md: "1.55",
    lg: "1.65",
    xl: "1.85",
  },
  headings: {
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    textWrap: "pretty",
    sizes: {
      h1: {
        fontWeight: "400",
        fontSize: rem(72),
        lineHeight: "1.2",
      },
      h2: {
        fontWeight: "600",
        fontSize: rem(53),
        lineHeight: "1.2",
      },
      h3: {
        fontWeight: "600",
        fontSize: rem(20),
        lineHeight: "1.2",
      },
    },
  },
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
  const { books, addNewBook } = useBooks();
  return (
    <MantineProvider theme={theme}>
      <ModalsProvider>
        <NavBar />
        <AddNewBook addNewBook={addNewBook} />
        <div className="grid-container">
          {books.map((book) => (
            <div span={2} className="" key={book.id}>
              <RenderBook book={book} />
            </div>
          ))}
        </div>
        <ToastContainer />
      </ModalsProvider>
    </MantineProvider>
  );
}

export default App;
