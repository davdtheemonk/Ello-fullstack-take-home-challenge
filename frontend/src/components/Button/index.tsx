import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import COLORS from "../../constants/colors";
import FONTWEIGHT from "../../constants/fontweights";

const CustomButton = styled(Button)(() => ({
  color: COLORS.WHITE,
  fontWeight: FONTWEIGHT.DEFAULT,
}));

export default CustomButton;
