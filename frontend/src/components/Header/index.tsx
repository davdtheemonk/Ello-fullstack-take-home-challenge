import { Avatar, Link } from "@mui/material";
import Box from "@mui/material/Box";
import COLORS from "../../constants/colors";
import FONTWEIGHT from "../../constants/fontweights";
const Header = () => {
  return (
    <Box
      sx={{
        p: 2,
        display: "flex",
      }}
    >
      <img src="./logo.svg" alt="Ello Logo" width={54} />
      <Box
        sx={{
          marginLeft: "auto",
          flexDirection: "row",
          gap: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link
          href="#"
          sx={{
            color: COLORS.STEALBLUE,
            fontWeight: FONTWEIGHT.DEFAULT,
            textDecoration: "none",
          }}
        >
          Logout
        </Link>
        <Avatar sx={{ width: 40, height: 40 }} />
      </Box>
    </Box>
  );
};

export default Header;
