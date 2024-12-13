import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Background from "./components/Background";
import Contact from "./components/Contact";
import "./Styles/App.css";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Hero />
        <About />
        <Background />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
