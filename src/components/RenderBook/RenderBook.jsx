import { ActionIcon, Image, Modal, Paper, Tabs, Text } from "@mantine/core";
import classes from "./styles.module.css";
import { useDisclosure } from "@mantine/hooks";
import { IconTrashFilled } from "@tabler/icons-react";
import { useState } from "react";

function RenderBook({ book, deleteBook, fetchAllBooks }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <Paper className={classes.paper} onClick={open}>
        <Image
          src={book.cover_image_url}
          alt="cover-image"
          className={classes.cover}
        />
        <Text
          className={classes.caption}
        >{`${book.book_name} by ${book.book_author}`}</Text>
        <ActionIcon
          variant="transparent"
          aria-label="delete-action"
          className={classes.deleteButton}
          disabled={isLoading ? true : null}
          onClick={async (event) => {
            event.stopPropagation();
            setIsLoading(true);
            await deleteBook(book.id);
            await fetchAllBooks();
            setIsLoading(false);
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
        <Tabs
          defaultValue="first-sentence"
          styles={{
            panel: {
              padding: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <Tabs.List>
            <Tabs.Tab value="first-sentence">
              <Text>Opening Lines</Text>
            </Tabs.Tab>
            <Tabs.Tab value="characters">
              <Text>Beloved Characters</Text>
            </Tabs.Tab>
            <Tabs.Tab value="place">
              <Text>Explore</Text>
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="first-sentence">{book.first_sentence}</Tabs.Panel>
          <Tabs.Panel value="characters" className={classes.list}>
            {book.book_character.map((character) => {
              return <Text key={book.id}>{character}</Text>;
            })}
          </Tabs.Panel>
          <Tabs.Panel value="place" className={classes.list}>
            {" "}
            {book.book_place.map((place, index) => {
              return <p key={index}>{place}</p>;
            })}
          </Tabs.Panel>
        </Tabs>
      </Modal>
    </div>
  );
}

export default RenderBook;
