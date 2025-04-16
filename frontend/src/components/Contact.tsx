import React from "react";
import "../assets/styles/main_input.css";
import ContactForm from "./ContactForm";

const Contact: React.FC = () => {
  return (
    <section className="contact-page">
      {/* Top Panel: Contact Methods */}
      <div className="contact-top">
        {/* Left Section: Text and Links */}
        <div className="contact-left">
          <h1 className="contact-heading">Get in Touch</h1>
          <p className="contact-subheading">Feel free to reach out via email or connect with me on social media.</p>
          <div className="contact-links">
            <a href="mailto:hello@evelyn.com" className="contact-link">
              Email
            </a>
            <a href="https://twitter.com/evelyn" target="_blank" rel="noopener noreferrer" className="contact-link">
              Twitter
            </a>
            <a href="https://linkedin.com/in/evelyn" target="_blank" rel="noopener noreferrer" className="contact-link">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Section: Background Image */}
        <div className="contact-right"></div>
      </div>

      {/* Bottom Panel: Contact Form */}
      <div className="contact-bottom">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
