import { Button, TextInput } from "@mantine/core";
import classes from "./styles.module.css";
import { useState } from "react";
import useBooks from "../../hooks/useBooks";

function SearchButton({ placeholder, label }) {
  const [text, setText] = useState("");
  const { addNewBook } = useBooks();

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
            onClick={() => {
              console.log("button clicked");
              addNewBook(text);
            }}
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
