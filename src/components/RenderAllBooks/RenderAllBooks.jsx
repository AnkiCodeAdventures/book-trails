import { Flex } from "@mantine/core";
import RenderBook from "../RenderBook/RenderBook";

function RenderAllBooks({ books }) {
  return (
    <Flex wrap={"wrap"} justify={"space-between"} gap={"2rem"}>
      {books.map((book) => (
        <div key={book.id}>
          <RenderBook book={book} />
        </div>
      ))}
    </Flex>
  );
}

export default RenderAllBooks;
