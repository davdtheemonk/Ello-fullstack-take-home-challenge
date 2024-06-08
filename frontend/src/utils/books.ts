import { Book } from "../types";

export const handleRemoveBook = (
  title: string,
  setReadingList: React.Dispatch<React.SetStateAction<Book[] | undefined>>
) => {
  setReadingList((prevList) =>
    prevList?.filter((book) => book.title !== title)
  );
};

export const handleAddBook = (
  readingList: Book[],
  book: Book,
  setReadingList: React.Dispatch<React.SetStateAction<Book[] | undefined>>
) => {
  if (!readingList.some((b) => b.title === book.title)) {
    setReadingList((prev) => [...(prev || []), book]);
  }
};
