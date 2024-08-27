import { API_ROUTES } from "../utils/constants";

function useBooks() {
  async function addNewBook(text) {
    await fetch(API_ROUTES.BOOKS, {
      method: "POST",
      body: `{
        "userName": "Ankita",
        "bookName": "${text}",
        "userId": 1}`,
    });
  }

  return { addNewBook };
}

export default useBooks;
