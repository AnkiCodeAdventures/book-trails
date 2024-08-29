import { Button, TextInput } from "@mantine/core";
import classes from "./styles.module.css";
import { useState } from "react";

function SearchButton({ placeholder, label, addNewBook }) {
  const [text, setText] = useState("");

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
            onClick={async () => {
              await addNewBook(text);
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
