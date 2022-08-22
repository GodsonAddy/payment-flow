import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { unstable_createMuiStrictModeTheme as createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import reportWebVitals from "./reportWebVitals";

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: ["Poppins"].join(","),
    palette: {
      primary: "#FFFFFF",
      secondary: "4A4D4E",
    },
  },
  palette: {
    primary: {
      main: "#4E598C",
    },
    secondary: {
      main: "#F2994A",
    },
    tertiary: {
      main: "#000",
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
