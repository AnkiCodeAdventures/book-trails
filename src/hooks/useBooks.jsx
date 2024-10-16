import { useState } from "react";
import { API_ROUTES } from "../utils/constants";
import { useEffect } from "react";

function useBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchAllBooks();
  }, []);

  async function addNewBook(text) {
    const response = await fetch(
      `${API_ROUTES.GOOGLE_BOOKS_SEARCH}?q=${text}`,
      {
        method: "GET",
      }
    );
    const json = await response.json();

    const bookData = json.items.length > 0 ? json.items[0] : null;
    if (!bookData) {
      return Promise.reject("Book not found");
    }

    const book = {
      userId: 1,
      userName: "Ankita",
      bookName: bookData.volumeInfo.title,
      about: bookData.volumeInfo.description,
      bookAuthor: bookData.volumeInfo.authors[0],
      coverImageUrl: `${bookData.volumeInfo.imageLinks.thumbnail}&fife=w800`,
    };

    await fetch(API_ROUTES.BOOKS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });

    await fetchAllBooks();
  }

  async function fetchAllBooks() {
    const response = await fetch(API_ROUTES.BOOKS, {
      method: "GET",
    });
    const json = await response.json();
    setBooks(json);
  }

  async function deleteBook(bookId) {
    await fetch(`${API_ROUTES.BOOKS}/${bookId}`, {
      method: "DELETE",
    });
  }

  return { addNewBook, fetchAllBooks, books, deleteBook };
}

export default useBooks;
