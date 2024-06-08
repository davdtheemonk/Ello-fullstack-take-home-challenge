import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { BookCardProps } from "../../types";
import FONTWEIGHT from "../../constants/fontweights";
import COLORS from "../../constants/colors";

const BookCard: React.FC<BookCardProps> = (props) => {
  return (
    <Box
      sx={{ maxWidth: 150, cursor: "pointer" }}
      onClick={() => {
        props.setSelectedBook(props.book.title);
      }}
    >
      <img
        src={`./${props.book.coverPhotoURL}`}
        height={150}
        width={150}
        alt="book"
      />

      <Typography
        sx={{
          fontWeight: FONTWEIGHT.DEFAULT,
          fontSize: "1rem",
        }}
      >
        {props.book.title}
      </Typography>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "0.8125rem",
          color: COLORS.LIGHT_GRAY,
        }}
      >
        by {props.book.author}
      </Typography>
    </Box>
  );
};

export default BookCard;
