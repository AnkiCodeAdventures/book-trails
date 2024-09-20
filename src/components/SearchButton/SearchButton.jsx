import { Button, TextInput } from "@mantine/core";
import classes from "./styles.module.css";
import { useState } from "react";
import { toast } from "react-toastify";

function SearchButton({ placeholder, label, addNewBook }) {
  const [text, setText] = useState("");
  const [isPending, setIsPending] = useState(false);

  function handleAddNewBook() {
    setIsPending(true);
    toast.promise(
      async () => {
        try {
          return await addNewBook(text);
        } finally {
          setIsPending(false);
        }
      },
      {
        pending: "Adding your book...",
        success: "Book added successfully!",
        error: "Book not found in our collection. Please try another title.",
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
            disabled={isPending ? true : false}
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
