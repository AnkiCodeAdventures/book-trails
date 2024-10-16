import { SimpleGrid } from "@mantine/core";
import RenderBook from "../RenderBook/RenderBook";
import classes from "./styles.module.css";

function RenderAllBooks({ books, deleteBook, fetchAllBooks }) {
  return (
    <SimpleGrid
      spacing="md"
      cols={{ base: 2, xs: 2, sm: 3, md: 4, lg: 5 }}
      className={classes.allBooks}
    >
      {books.map((book) => (
        <div key={book.id}>
          <RenderBook
            book={book}
            deleteBook={deleteBook}
            fetchAllBooks={fetchAllBooks}
          />
        </div>
      ))}
    </SimpleGrid>
  );
}

export default RenderAllBooks;
