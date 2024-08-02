import { Button, TextInput } from "@mantine/core";
import classes from "./styles.module.css";

function SearchButton({ placeholder, label }) {
  return (
    <div className={classes.inputBoxContainer}>
      <TextInput
        placeholder={placeholder}
        variant="default"
        radius="md"
        classNames={{ input: classes.inputBox }}
        rightSection={
          <Button variant="filled" classNames={{ root: classes.button }}>
            {label}
          </Button>
        }
        rightSectionWidth={"fit-content"}
      ></TextInput>
    </div>
  );
}

export default SearchButton;
