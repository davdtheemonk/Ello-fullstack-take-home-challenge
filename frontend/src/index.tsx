import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BookProvider } from "./components/context/BookContext";
import { ApolloProvider } from "@apollo/client";
import client from "./utils/apollo";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BookProvider>
        {/* BookProvider provides the BooksContext to the React component tree.
          This allows any component within the tree to access the book-related state and functionality.
          
          The BookProvider manages:
          - `allBooks`: A list of all books retrieved from the GraphQL API.
          - `readingList`: A list of books added to the user's reading list.
          - `setReadingList`: A function to update the reading list.
          - `loading`: A boolean indicating if the books are currently being fetched.
          - `error`: Any error that occurred while fetching the books. */}
        <App />
      </BookProvider>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
