import React from "react";
import "../Styles/Hero.css";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section id="hero" className="section section-hero">
      <div className="hero-content">
        <div className="text-left">
          <h1 className="display-4 fw-bold mb-4">Hello, I'm Teja Narra</h1>
          <p className="writing mb-4">
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "Software Engineer",
                  "Computer Science Graduate",
                  "Graduate Teaching Assistant",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
