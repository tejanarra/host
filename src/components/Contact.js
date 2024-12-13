import React, { useState } from "react";
import "../Styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "", // Add a subject field if required
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields");
      return;
    }

    // Prepare request data to match the API format
    const requestData = {
      data: {
        yourName: formData.name, // Map 'name' to 'yourName'
        yourEmail: formData.email, // Map 'email' to 'yourEmail'
        subject: formData.subject, // Map 'subject' field
        message: formData.message, // Map 'message' field
      },
    };

    // Send form data using Fetch API
    fetch("https://task-manager-sigma-ashen.vercel.app/api/auth/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json", // Explicitly ask for JSON response
      },
      body: JSON.stringify(requestData), // Send data as JSON
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse JSON response if successful
      })
      .then((data) => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "", subject: "" }); // Reset form
      })
      .catch((error) => {
        alert("Error sending message. Please try again later.");
        console.error("Error:", error); // Log the error for debugging
      });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-content">
        <h2>Contact Me - Send a Message</h2>
        <p>If you would like to work together, feel free to get in touch!</p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="form-input"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
            required
          />
          <button type="submit" className="form-button">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
