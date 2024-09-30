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
      `${API_ROUTES.OPEN_LIBRARY_SEARCH}?q=${text}&limit=1&lang=en&sort=already_read`,
      {
        method: "GET",
      }
    );
    const json = await response.json();
    const book_data = json.docs.length > 0 ? json.docs[0] : null;
    if (!book_data) {
      return Promise.reject("Book not found");
    }

    const cover_edition_key = book_data.cover_i;

    const book = {
      user_id: 1,

      user_name: "Ankita",
      book_name: book_data.title,
      first_sentence: book_data.first_sentence,
      book_character: book_data?.person || [],
      book_place: book_data?.place || [],
      book_author: book_data.author_name,
      currently_reading: book_data.currently_reading,
      author_key: book_data.author_key,
      cover_edition_key,
      cover_image_url: `https://covers.openlibrary.org/b/ID/${cover_edition_key}-L.jpg`,
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
