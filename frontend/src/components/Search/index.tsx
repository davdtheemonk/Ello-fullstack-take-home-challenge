import {
  Autocomplete,
  Box,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { BooksContext } from "../context/BookContext";
import Button from "../Button";
import COLORS from "../../constants/colors";
import { handleAddBook } from "../../utils/books";
const Search = () => {
  const [open, setOpen] = React.useState(false);
  const { allBooks, setReadingList, readingList } = useContext(BooksContext);
  const loading = open && allBooks.length === 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ backgroundColor: "#cffafa", height: 70 }} />
      <Box
        sx={{
          height: 60,
          maxWidth: 624,
          paddingInline: 2,
          margin: "0 auto",
          transform: "translateY(-50%)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            height: "100%",
            flexDirection: "row",
            paddingInline: 5,
            backgroundColor: "white",
            gap: 2,
            boxShadow: "0px 8px 20px rgba(0,0,0,0.06)",
            borderRadius: 4,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="20"
            viewBox="0 0 512 512"
          >
            <path
              fill="#7d7d7d"
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            />
          </svg>

          <Autocomplete
            id="asynchronous-demo"
            sx={{ width: "100%" }}
            open={open}
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
            isOptionEqualToValue={(option, value) =>
              option.title === value.title
            }
            getOptionLabel={(option) => option.title}
            onChange={(event, value) => {}}
            options={allBooks ? allBooks : []}
            loading={loading}
            renderOption={(props, option) => (
              <Box
                component="li"
                {...props}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box>
                  <Typography variant="body1">{option.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {option.author}
                  </Typography>
                </Box>
                <Button
                  onClick={() => {
                    handleAddBook(readingList, option, setReadingList);
                  }}
                  sx={{
                    "&:hover": {
                      backgroundColor: COLORS.YELLOW,
                    },
                    marginLeft: "auto",
                    backgroundColor: COLORS.YELLOW_DARK,
                  }}
                  size="small"
                >
                  Add
                </Button>
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Search Book..."
                InputLabelProps={{ shrink: false }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none", //hide the border
                    },
                  },
                  "& .MuiInputBase-input": {
                    padding: "8px 0",
                  },
                }}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {loading ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                }}
              />
            )}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Search;
