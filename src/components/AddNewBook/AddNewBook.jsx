import { Paper, Text, Title } from "@mantine/core";
import classes from "./styles.module.css";
import SearchButton from "../SearchButton/SearchButton";

function AddNewBook({ addNewBook }) {
  return (
    <div>
      <Paper radius="md" className={classes.paper}>
        <div className={classes.contentContainer}>
          <Title order={2} className={classes.heading}>
            Favorite Books Repository
          </Title>
          <Text size="md" className={classes.description}>
            Add your favorite books and explore the mystical land of literature
            with hobbits, elves, wizards, dragons, gnomes, pixies and many more
            awaiting you . . .
          </Text>
          <SearchButton
            placeholder="Add your favorite book here"
            label="Add Book"
            addNewBook={addNewBook}
          />
        </div>
        <div className={classes.imageContainer}>
          <img src="/src/assets/file.png" className={classes.image} />
        </div>
      </Paper>
    </div>
  );
}

export default AddNewBook;
