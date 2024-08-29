import { Image, Paper, Text } from "@mantine/core";
import classes from "./styles.module.css";

function RenderBook({ book }) {
  return (
    <Paper className={classes.paper}>
      <Image src={book.cover_image_url} alt="cover-image" />
      <Text>{`${book.book_name} by ${book.book_author}`}</Text>
    </Paper>
  );
}

export default RenderBook;
