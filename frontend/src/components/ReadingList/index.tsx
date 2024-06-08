import { Alert, Box, Container, Grid, Typography } from "@mui/material";
import { useContext, useState } from "react";
import BookCard from "../BookCard";
import { BooksContext } from "../context/BookContext";
import { handleRemoveBook } from "../../utils/books";
import COLORS from "../../constants/colors";
import Button from "../Button";

const ReadingList = () => {
  const { readingList, error, setReadingList } = useContext(BooksContext);
  const [selectedBook, setSelectedBook] = useState<string>("");

  return (
    <Container>
      <Box sx={{ marginTop: 6, marginBottom: 4 }}>
        <Box
          sx={{
            width: "100%",
            flexDirection: "row",
            display: "flex",
            paddingBlock: 3,
          }}
        >
          <Typography
            sx={{ color: COLORS.STEALBLUE, fontWeight: 700, fontSize: 26 }}
          >
            Reading List
          </Typography>
          {selectedBook && (
            <Button
              sx={{
                marginLeft: "auto",
                backgroundColor: COLORS.TURQOISE,

                "&:hover": {
                  backgroundColor: COLORS.STEALBLUE,
                },
              }}
              onClick={() => {
                handleRemoveBook(selectedBook, setReadingList);
                setSelectedBook("");
              }}
            >
              Remove Book
            </Button>
          )}
        </Box>
        {readingList.length > 0 ? (
          <Grid
            container
            spacing={4}
            sx={{
              margin: "0px auto",
            }}
          >
            {readingList.map((book, index) => (
              <Grid item key={index}>
                <BookCard book={book} setSelectedBook={setSelectedBook} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box>
            {error ? (
              <Alert severity="error">{error}</Alert>
            ) : (
              <Alert severity="info">
                You have not added any book to the reading list
              </Alert>
            )}
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default ReadingList;
