import { Paper, IconButton } from "@mui/material";
import { color } from "../../constants/color";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const Navigate = useNavigate()
  const [value, SetValue] = useState("");
  
 const ChangHandler = (e) =>{
  e.preventDefault()
   if(value){
    Navigate(`/search/${value}`)
    SetValue(" ")
   }
  }

  return (
    <Paper
      component={"form"}
      onSubmit={ChangHandler}
      sx={{ border: `1px solid ${color.secondary}`, pl: 2, boxShadow: "none" }}
    >
      <input
        type="text"
        placeholder="seach ..."
        className="search-bar"
        onChange={(e) => SetValue(e.target.value)}
        value={value}
      />
      <IconButton type="submit">
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
