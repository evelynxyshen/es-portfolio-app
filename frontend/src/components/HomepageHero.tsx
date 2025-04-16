import React from "react";
import "../assets/styles/main_input.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const HomepageHero: React.FC = () => {
  return (
    <section className="homepage-hero">
      <div className="relative z-10">
        <h1 className="homepage-title">Welcome to My Portfolio</h1>
        <p className="homepage-subtitle">
          Explore my work as a designer and developer.
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
    </section>
  );
};

export default HomepageHero;