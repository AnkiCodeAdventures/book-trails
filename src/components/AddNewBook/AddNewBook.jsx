import { Button, Card, Image, Text, TextInput, Title } from "@mantine/core";
import classes from "./styles.module.css";

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
          <div className={classes.inputBoxContainer}>
            <TextInput
              placeholder="Add your favorite book here..."
              variant="default"
              radius="md"
              classNames={{ input: classes.inputBox }}
              rightSection={
                <Button variant="filled" classNames={{ root: classes.button }}>
                  Add Book
                </Button>
              }
              rightSectionWidth={"fit-content"}
            ></TextInput>
          </div>
        </Card.Section>
      </Card>
    </div>
  );
}

export default AddNewBook;
