import { Button, TextInput } from "@mantine/core";
import { Container } from "@mantine/core";

function AddNewBook() {
  return (
    <Container>
      <TextInput
        styles={{
          input: {
            width: "500px",
            height: "60px",
            paddingRight: "20px",
          },
        }}
        placeholder="Add your favorite book here..."
        variant="default"
        radius="md"
        rightSection={
          <Button
            variant="filled"
            color="rgb(252, 127, 32)"
            radius="md"
            style={{ width: "120px", height: "100%" }}
          >
            Add Book
          </Button>
        }
        rightSectionWidth="300px"
        rightSectionProps={{}}
      ></TextInput>
    </Container>
  );
}

export default AddNewBook;
