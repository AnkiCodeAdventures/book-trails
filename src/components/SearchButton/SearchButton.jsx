import { Button, TextInput } from "@mantine/core";
import classes from "./styles.module.css";
import { useState } from "react";
import { toast } from "react-toastify";

function SearchButton({ placeholder, label, addNewBook }) {
  const [text, setText] = useState("");

  function handleAddNewBook() {
    toast.promise(
      () => {
        return addNewBook(text);
      },
      {
        pending: "thamba thamba",
        success: "yohooo",
        error: "No book found, try again",
      }
    );
  }

  return (
    <div className={classes.inputBoxContainer}>
      <TextInput
        placeholder={placeholder}
        variant="default"
        radius="md"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
        classNames={{ input: classes.inputBox }}
        rightSection={
          <Button
            variant="filled"
            classNames={{ root: classes.button }}
            onClick={handleAddNewBook}
          >
            {label}
          </Button>
        }
        rightSectionWidth={"fit-content"}
      ></TextInput>
    </div>
  );
}

export default SearchButton;
