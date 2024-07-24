import { Button, TextInput } from "@mantine/core";
import classes from "./styles.module.css";

function AddNewBook() {
  return (
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
  );
}

export default AddNewBook;
