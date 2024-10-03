import "./App.css";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider, rem } from "@mantine/core";
import AddNewBook from "./components/AddNewBook/AddNewBook";
import NavBar from "./components/NavBar/NavBar";
import useBooks from "./hooks/useBooks";
import { ToastContainer } from "react-toastify";
import { ModalsProvider } from "@mantine/modals";
import RenderAllBooks from "./components/RenderAllBooks/RenderAllBooks";

const theme = createTheme({
  white: "#F5F5F5",
  black: "#5b3e3c",
  fontFamily: "Poppins, sans-serif",
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(21),
    xl: rem(24),
  },

  lineHeights: {
    xs: "1.5",
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
    xs: "422px",
    sm: "620px",
    md: "745px",
    lg: "967px",
  },
});

function App() {
  const { books, addNewBook, deleteBook, fetchAllBooks } = useBooks();
  return (
    <MantineProvider theme={theme}>
      <ModalsProvider>
        <NavBar />
        <AddNewBook addNewBook={addNewBook} />
        <RenderAllBooks
          books={books}
          deleteBook={deleteBook}
          fetchAllBooks={fetchAllBooks}
        />
        <ToastContainer />
      </ModalsProvider>
    </MantineProvider>
  );
}

export default App;
