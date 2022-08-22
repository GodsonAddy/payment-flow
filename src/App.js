import React from "react";
import { Box, CssBaseline } from "@mui/material";
import "./App.css";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Box className="main-page">
        <CssBaseline />
        <Main />
      </Box>
    </>
  );
}

export default App;
