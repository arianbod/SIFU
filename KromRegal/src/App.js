import React from "react";
import "./App.css";
import Blog from "./components/structure/body/Blog/Blog";
import Cunductor from './Cundactor';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
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
