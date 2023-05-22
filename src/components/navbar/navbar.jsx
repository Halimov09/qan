import { Stack, Box } from "@mui/material";
import { Logo, SearchBar } from "../";
import { color } from "../../constants/color";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={2}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: color.primary,
      }}
    >
      <Link to={"/"}>
        <img src={Logo} alt="" height={50} />
      </Link>
      <SearchBar />
      <Box />
    </Stack>
  );
};

export default Navbar;
