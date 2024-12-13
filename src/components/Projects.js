import React from "react";
import { motion } from "framer-motion";
import "../Styles/Projects.css";

// Example project data
const projects = [
  {
    name: "Web Application Development with React and NodeJS",
    description:
      "Developed a full-stack web application for task management, utilizing React for the front-end and NodeJS for the back-end.",
    link: "https://tejanarra.github.io/Task-Manager/#/login", // Replace with actual link
  },
  {
    name: "Mobile Application Development",
    description:
      "Led Dart & Flutter projects developing apps like Yahtzee, Quiz & Battleship using responsiveness, persistence, and state management techniques.",
    link: "https://github.com/tejanarra/Mobile_Application_Development", // Replace with actual link
  },
  {
    name: "E-Commerce Platform with Angular and Spring Boot",
    description:
      "Built an e-commerce platform featuring product catalog management, shopping cart functionality, and payment integration using Angular and Spring Boot.",
    link: "https://your-link-to-project-three.com", // Replace with actual link
  },
  {
    name: "Real-Time Collaborative Application",
    description:
      "Engineered a collaborative note-taking application that supports real-time editing and user synchronization, utilizing Firebase.",
    link: "https://your-link-to-project-four.com", // Replace with actual link
  },
  {
    name: "Fake News Classification",
    description:
      "Developed a news article classification model with 92% accuracy using Natural Language Processing (NLP) techniques to detect fake news from labeled data, applying feature engineering and machine learning models for precise classification.",
    link: "https://github.com/tejanarra/Online_Social_Network_Analysis/tree/83a0d7a22acb19f691bfe8a6c3717a8e797b90ff/Project2_Fake_News_Classification", // Replace with actual link
  },
];

// Variants for scroll-triggered animation (appear from right to left)
const cardVariants = {
  offscreen: {
    opacity: 0,
    x: 100, // Start from the right off-screen
  },
  onscreen: {
    opacity: 1,
    x: 0, // Move to normal position
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 25,
      duration: 0.8,
    },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="projects-content">
        <h2>My Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-item"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.3 }} // Trigger when 30% of card is in view
              variants={cardVariants}
              transition={{
                delay: index * 0.3, // Stagger the animations with a delay
              }}
            >
              <motion.button
                className="project-card"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </a>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
