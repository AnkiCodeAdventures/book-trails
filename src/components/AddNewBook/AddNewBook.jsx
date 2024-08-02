import { Paper, Text, Title } from "@mantine/core";
import classes from "./styles.module.css";
import SearchButton from "../SearchButton/SearchButton";

function AddNewBook() {
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
              />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <img src="/src/assets/file.png" className={classes.image} />
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default AddNewBook;
