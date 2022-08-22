import { CssBaseline } from "@mui/material";
import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pay from "./components/Pay";
import MainPage from "./routes";

function App() {
  return (
    <>
      <Router>
        <CssBaseline />
        <Routes>
          <Route exact path="/payment-flow" element={<MainPage />} />
          <Route exact path="/payment-flow/pay" element={<Pay />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
