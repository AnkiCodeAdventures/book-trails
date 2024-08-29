import { Card, Flex, Group, Image, Paper, Text, Title } from "@mantine/core";
import classes from "./styles.module.css";
import SearchButton from "../SearchButton/SearchButton";

function AddNewBook({ books, addNewBook }) {
  return (
    <div>
      <Paper shadow="sm" radius="md" className={classes.paper} p="xl">
        <div className={classes.searchBoxContainer}>
          <div className={classes.contentContainer}>
            <div className={classes.subContainer}>
              <Title order={2}>Favorite Books Repository</Title>
              <Text size="md">
                Add your favorite books and explore the mystical land of
                literature with hobbits, elves, wizards, dragons, gnomes, pixies
                and many more awaiting you . . .
              </Text>
              <SearchButton
                placeholder="Add your favorite book here"
                label="Add Book"
                addNewBook={addNewBook}
              />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <img src="/src/assets/file.png" className={classes.image} />
          </div>
        </div>
      </Paper>
      {books.map((book) => {
        return (
          <Card key={book.id} withBorder shadow="sm" padding="xl">
            <Flex direction="row" wrap="nowrap" justify="center" gap="10px">
              <Text>{book.book_name}</Text>
              <Text>by</Text>
              <Text>{book.book_author}</Text>
            </Flex>
            <Flex direction="flex" justify="center" gap="xl">
              <Text>{book.first_sentence}</Text>

              <Card.Section>
                <Image
                  src={book.cover_image_url}
                  alt="cover-image"
                  h={260}
                  w={"auto"}
                />
              </Card.Section>
            </Flex>
            <Group>
              {book.book_character.map((character, index) => {
                return <p key={index}>{character}</p>;
              })}
            </Group>
            <Group>
              {book.book_place.map((place, index) => {
                return <p key={index}>{place}</p>;
              })}
            </Group>
          </Card>
        );
      })}
    </div>
  );
}

export default AddNewBook;
