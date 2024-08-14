import { API_ENDPOINT } from "../utils/constants";

function useBooks() {
  async function addNewBook(text) {
    await fetch(API_ENDPOINT, {
      method: "POST",
      body: `{
        userName: "Ankita",
        bookName: ${text},
        userId: 1}`,
    });
  }

  // async function fetchAllBooks() {}

  return { addNewBook };
}

export default useBooks;
