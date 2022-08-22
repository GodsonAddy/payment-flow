import React from "react";
import { Box, CssBaseline } from "@mui/material";
import Main from "./components/Main";
import "./App.css";

function MainPage() {
  return (
    <Box className="main-page">
      <CssBaseline />
      <Main />
    </Box>
  );
}

export default MainPage;
