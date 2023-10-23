import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Home from "./components/Home.js";
import NoteState from "./contexts/notes/NoteState.js";

function App() {
  return (
    <div className="App">
      <NoteState>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/*" element={<h1>Page not found</h1>} />
            </Routes>
        </BrowserRouter>
      </NoteState>
    </div>
  );
}

export default App;
