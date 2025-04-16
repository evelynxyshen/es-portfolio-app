import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setTimeout(() => setSubmitted(true), 500);
  };

  return submitted ? (
    <div className="contact-form-container">
      <div className="contact-form-wrapper">
        <h2 className="text-4xl font-bold mb-10 text-center">Thank you!</h2>
        <p className="text-gray-400">I'll get back to you soon.</p>
      </div>
    </div>
  ) : (
    <section className="contact-form-container">
      <div className="contact-form-wrapper">
        <h2 className="text-4xl font-bold mb-10 text-center">Send me an email</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <label htmlFor="name" className="contact-form-label">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="contact-form-input"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="contact-form-label">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="contact-form-input"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="message" className="contact-form-label">
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className="contact-form-textarea"
            ></textarea>
          </div>

          <button type="submit" className="contact-form-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;