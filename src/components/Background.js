import React from 'react';
import '../Styles/Background.css'; // Updated CSS file for background section

const Background = () => {
  return (
    <section id="background" className="section background-section">
      <div className="background-content">
        <h2>My Background</h2>
        <div className="background-sections">
          {/* Education Section */}
          <div className="background-section-left">
            <h3 className="section-title">Education</h3>
            <div className="education-item">
              <h4>Masters in Computer Science</h4>
              <p><strong>Institution:</strong> Illinois Institute of Technology, Chicago, IL - May 2024</p>
              <p><strong>GPA:</strong> 3.67</p>
              <p><strong>Relevant courses:</strong> Advanced Database Organization, Science of Programming, Computer Networks, Social Network Analysis, Introduction to Machine Learning, Natural Language Processing, Mobile Application Development, Information Security, Big Data Technologies.</p>
            </div>
            <div className="education-item">
              <h4>Bachelor of Technology in Computer Science and Engineering</h4>
              <p><strong>Institution:</strong> Gokaraju Rangaraju Institute of Engineering and Technology, Hyderabad, Telangana, India - Sep 2020</p>
              <p><strong>GPA:</strong> 3.6</p>
              <p><strong>Relevant courses:</strong> Design and Analysis of Algorithms, Database Management Systems, Operating Systems, Principles of Programming Languages.</p>
            </div>
          </div>

          {/* Line Divider */}
          <div className="milestone-line"></div>

          {/* Experience Section */}
          <div className="background-section-right">
            <h3 className="section-title">Experience</h3>
            <div className="experience-item">
              <h4>Full Stack Developer</h4>
              <p><strong>Company:</strong> Consulting Technology Services Inc, Herndon, VA, USA - May 2024 - Present</p>
              <ul>
                <li>Integrated form.io into Angular applications for a healthcare client, improving user experience and streamlining data collection processes.</li>
                <li>Developed and optimized over 15 responsive front-end components using Angular, enhancing user engagement, while utilizing RESTful APIs to reduce data processing time by 20%.</li>
                <li>Implemented authentication and authorization mechanisms using form.io auth module to safely handle patient data.</li>
              </ul>
            </div>
            <div className="experience-item">
              <h4>Graduate Teaching Assistant</h4>
              <p><strong>Institution:</strong> Illinois Institute of Technology, Chicago, IL, USA - August 2023 - May 2024</p>
              <ul>
                <li>Conducted office hours to provide personalized guidance on assignments and grading, fostering a deeper understanding of core concepts.</li>
                <li>Enhanced student engagement by 20% in discussion sections, creating a dynamic learning environment, and streamlined communication by reducing student queries by 25% through comprehensive materials and effective teaching methodologies.</li>
              </ul>
            </div>
            <div className="experience-item">
              <h4>Systems Engineer - Full Stack Developer</h4>
              <p><strong>Company:</strong> Tata Consultancy Services, Hyderabad, Telangana, India - Nov 2020 - Jul 2022</p>
              <ul>
                <li>Developed scalable web applications using Java Spring Boot, React, HTML5, CSS3.</li>
                <li>Enhanced functionality and performance of microservices with Spring modules and deployment, with 25% REST API endpoint performance improvement.</li>
                <li>Created reusable React components, optimizing application efficiency and user experience.</li>
                <li>Managed CI/CD pipelines using Jenkins, streamlining the deployment process.</li>
                <li>Conducted unit and integration testing to identify and resolve bugs, ensuring high-quality software releases.</li>
                <li>Created and maintained technical documentation for code and APIs to support team collaboration and knowledge sharing.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;
