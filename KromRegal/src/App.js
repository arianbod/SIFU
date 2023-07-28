import React from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Blog from "./components/structure/body/Blog/Blog";
import Cunductor from './Cundactor';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isxlScreen = useMediaQuery(theme.breakpoints.up("xl"));
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cunductor />} />
        <Route path="/home" element={<Cunductor />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Cunductor />} />
      </Routes>
    </Router >
  );
}

export default App;
