import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../assets/styles/main_input.css";

const Homepage: React.FC = () => {
    const portfolioItems = [
        {
          title: "Project 1",
          description: "A brief description of Project 1.",
          image: "./assets/images/feature-interior-design-news-feed-2.jpg",
        },
        {
          title: "Project 2",
          description: "A brief description of Project 2.",
          image: "./assets/images/feature-interior-design-news-feed-2.jpg",
        },
        {
          title: "Project 3",
          description: "A brief description of Project 3.",
          image: "./assets/images/feature-interior-design-news-feed-2.jpg",
        },
    ];
        
  return (
    <section className="homepage-section">
      {/* Hero Section */}
      <div className="hero">
        <h1 className="hero-title">Welcome to Evelyn's Portfolio</h1>
        <p className="hero-description">
          I'm a passionate Designer & Developer dedicated to creating beautiful and functional digital experiences.
        </p>
        <div className="hero-buttons">
          {/* Use Link for navigation */}
          <Link to="/contact" className="hero-button">
            Contact Me
          </Link>
          <Link to="/portfolio" className="hero-button-secondary">
            View Portfolio
          </Link>
        </div>
      </div>

      {/* Latest Work Section */}
      <div className="latest-work-section">
        <h2 className="latest-work-title">Some of My Latest Work</h2>
        <div className="latest-work-grid">
          {/* Project 1 */}
          <div className="work-item">
            <img
              src="./assets/images/feature-interior-design-news-feed-2.jpg" // Replace with actual image path
              alt="Project 1"
              className="work-image"
            />
            <h3 className="work-title">Project 1</h3>
            <p className="work-description">A brief description of Project 1.</p>
          </div>
          {/* Project 2 */}
          <div className="work-item">
            <img
              src="./assets/images/feature-interior-design-news-feed-2.jpg" // Replace with actual image path
              alt="Project 2"
              className="work-image"
            />
            <h3 className="work-title">Project 2</h3>
            <p className="work-description">A brief description of Project 2.</p>
          </div>
          {/* Project 3 */}
          <div className="work-item">
            <img
              src="./assets/images/feature-interior-design-news-feed-2.jpg" // Replace with actual image path
              alt="Project 3"
              className="work-image"
            />
            <h3 className="work-title">Project 3</h3>
            <p className="work-description">A brief description of Project 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
