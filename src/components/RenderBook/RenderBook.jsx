import { ActionIcon, Image, Modal, Paper, Tabs, Text } from "@mantine/core";
import classes from "./styles.module.css";
import { useDisclosure } from "@mantine/hooks";
import { IconTrashFilled } from "@tabler/icons-react";
import { useState } from "react";
import { toast } from "react-toastify";

function RenderBook({ book, deleteBook, fetchAllBooks }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleDelete(event) {
    event.stopPropagation();
    setIsLoading(true);
    toast.promise(
      async () => {
        await deleteBook(book.id);
        await fetchAllBooks();
        setIsLoading(false);
      },
      {
        pending: "Deleting book...",
        success: "Book deleted successfully 👌",
        error: "Book could not be deleted, try again",
      }
    );
  }

  return (
    <div>
      <Paper className={classes.paper} onClick={open}>
        <Image
          src={book.coverImageUrl}
          alt="cover-image"
          className={classes.cover}
          fallbackSrc="assets/pexels-photo-8142723.webp"
        />
        <Text
          className={classes.caption}
        >{`${book.bookName} by ${book.bookAuthor}`}</Text>
        <ActionIcon
          variant="transparent"
          aria-label="delete-action"
          className={classes.deleteButton}
          disabled={isLoading ? true : null}
          onClick={(event) => {
            handleDelete(event);
          }}
        >
          <IconTrashFilled className={classes.delete}></IconTrashFilled>
        </ActionIcon>
      </Paper>
      <Modal
        opened={opened}
        onClose={close}
        centered
        size="40%"
        withCloseButton={false}
        styles={{
          body: { minHeight: "400px" },
        }}
      >
        <Text>{book.about}</Text>
      </Modal>
    </div>
  );
}

export default RenderBook;
