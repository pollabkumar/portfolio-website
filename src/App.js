import React, { useMemo, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Experience from "./pages/Experience";
import ProjectDisplay from "./pages/ProjectDisplay";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
