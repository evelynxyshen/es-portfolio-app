import React from "react";

const HomepageHero: React.FC = () => {
  return (
    <div className="homepage-hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Evelyn's Portfolio1</h1>
        <p className="hero-subtitle">
          A Designer & Developer creating beautiful and functional digital
          experiences.
        </p>
        <div className="hero-buttons">
          <a href="/portfolio" className="hero-button">
            View My Work
          </a>
          <a href="#contact" className="hero-button-secondary">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomepageHero;