import { Flex } from "@mantine/core";
import RenderBook from "../RenderBook/RenderBook";
import classes from "./styles.module.css";

function RenderAllBooks({ books, deleteBook, fetchAllBooks }) {
  return (
    <Flex
      wrap={"wrap"}
      justify={"space-between"}
      gap={"2rem"}
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
    </Flex>
  );
}

export default RenderAllBooks;
