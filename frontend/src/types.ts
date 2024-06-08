import { ReactNode } from "react";

export interface Book {
  title: string;
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
}

export type BookCardProps = {
  book: Book;
  setSelectedBook: React.Dispatch<React.SetStateAction<string>>;
};
export type ButtonProps = {
  title: string;
  action: () => void;
};

export interface LibraryValue {
  readingList: Book[];
  allBooks: Book[];
  setReadingList: React.Dispatch<React.SetStateAction<Book[] | undefined>>;
  loading: boolean;
  error: string;
}

export interface BookProviderProps {
  children: ReactNode;
}
