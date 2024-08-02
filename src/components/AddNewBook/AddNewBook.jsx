import { Card, Image, Text, Title } from "@mantine/core";
import classes from "./styles.module.css";
import SearchButton from "../SearchButton/SearchButton";

function AddNewBook() {
  return (
    <div>
      <Title order={1}>Favorite Books Repository</Title>

      <Text size="lg">
        Add your favorite books and explore the mystical land of literature with
        hobbits, elves, wizards, dragons, gnomes, pixies and many more awaiting
        you . . .
      </Text>
      <Card
        shadow="sm"
        radius="md"
        withBorder
        classNames={{ root: classes.card }}
      >
        <Card.Section>
          <div className={classes.imageContainer}>
            <Image src="/src/assets/book_image.jpg" alt="book image" />
          </div>
          <SearchButton
            placeholder="Add your favorite book here"
            label="Add Book"
          />
        </Card.Section>
      </Card>
    </div>
  );
}

export default AddNewBook;
