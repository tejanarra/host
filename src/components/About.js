import React from "react";
import "../Styles/About.css";
import profileImage from "../assets/profile.webp"

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="about-content">
        <div className="profile-image">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p className="intro">
            I'm a passionate Full Stack Developer with over 3 years of
            experience in building scalable and robust applications. I
            specialize in React, Angular, and other modern technologies. I'm
            always eager to tackle new challenges and continuously grow my
            technical expertise.
          </p>

          <div className="about-details">
            <div className="detail-item">
              <strong>Email:</strong>{" "}
              <a href="mailto:narrateja9699@gmail.com">
                <span>narrateja9699@gmail.com</span>
              </a>
            </div>
            <div className="detail-item">
              <strong>Phone:</strong> <span>+1 312 593 7394</span>
            </div>
            <div className="detail-item">
              <strong>Degree:</strong> <span>Master's in Computer Science</span>
            </div>
            <div className="detail-item">
              <strong>Position:</strong> <span>Full-Stack Developer</span>
            </div>
            <div className="detail-item">
              <strong>Birthday:</strong> <span>29 Nov 1998</span>
            </div>
            <div className="detail-item">
              <strong>Age:</strong> <span>25</span>
            </div>
            <div className="detail-item">
              <strong>Website:</strong>{" "}
              <a
                href="https://tejanarra.github.io/host/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>tejanarra.github.io</span>
              </a>
            </div>

            <div className="detail-item">
              <strong>City:</strong> <span>Ohio, USA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
