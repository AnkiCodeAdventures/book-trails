export const API_ENDPOINT =
  import.meta.env.VITE_API_ENDPOINT || "http://localhost:3000/";

export const API_ROUTES = {
  BOOKS: `${API_ENDPOINT}books`,
  OPEN_LIBRARY_SEARCH: "https://openlibrary.org/search.json",
};
