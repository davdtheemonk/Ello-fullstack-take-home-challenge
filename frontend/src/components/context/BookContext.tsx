import { createContext, useEffect, useState } from "react";
import { Book, BookProviderProps, LibraryValue } from "../../types";
import { useQuery, gql } from "@apollo/client";

export const BooksContext = createContext<LibraryValue>({
  allBooks: [],
  readingList: [],
  setReadingList: (book) => {},
  loading: false,
  error: "",
}); // managing and providing book data and reading list

const BOOKS_QUERY = gql`
  {
    books {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;

export const BookProvider: React.FC<BookProviderProps> = ({ children }) => {
  const { data, loading, error } = useQuery(BOOKS_QUERY); // Execute the BOOKS_QUERY

  const [books, setBooks] = useState<Book[]>();

  const [readingList, setReadingList] = useState<Book[]>();

  useEffect(() => {
    if (data && data.books) setBooks(data.books); // Effect to update the books state whenever the data changes
  }, [data]);

  return (
    <BooksContext.Provider
      value={{
        allBooks: books || [],
        readingList: readingList || [],
        setReadingList: setReadingList,
        loading: loading,
        error: error?.message || "",
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
