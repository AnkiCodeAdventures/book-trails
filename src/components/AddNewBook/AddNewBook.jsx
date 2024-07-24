import { Button, Card, Image, TextInput } from "@mantine/core";
import classes from "./styles.module.css";

function AddNewBook() {
  return (
    <div>
      <h1 className={classes.heading}>Favorite Books Repository</h1>
      <p className={classes.text}>
        Add your favorite books and see their beloved characters and much
        more...
      </p>
      <Card
        shadow="sm"
        radius="md"
        withBorder
        classNames={{ root: classes.card }}
      >
        <Card.Section>
          <div className={classes.imageContainer}>
            <Image
              src="/src/assets/image_processing20210113-1839-3w0a2e.jpg"
              alt="book image"
            />
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
