import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/structure/header/Navigation.js";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navigation />
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
      </div>
    </Router>
  );
}

export default App;
