import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Main, Channel, Videocard, Search, Navbar } from "../";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Channel" element={<Channel />} />
        <Route path="/video/:id" element={<Videocard />} />
        <Route path="/search/:id" element={<Search />} />
      </Routes>
    </Box>
  );
};

export default App;
