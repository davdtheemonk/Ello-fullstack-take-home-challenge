import { Box } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import ReadingList from "./components/ReadingList";
import { useContext } from "react";
import { BooksContext } from "./components/context/BookContext";

function App() {
  const { loading } = useContext(BooksContext);
  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <img src="./loader.svg" alt="Loading..." width={30} />
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
          }}
        >
          <Header />
          <Search />
          <ReadingList />
        </Box>
      )}
    </>
  );
}

export default App;
