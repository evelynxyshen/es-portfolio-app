import React from "react";
import "../assets/styles/main_input.css";

const PortfolioHero: React.FC = () => {
  return (
    <section
      className="portfolio-hero"
    >
      <div className="relative z-10">
        <h1 className="portfolio-title">My Portfolio</h1>
        <p className="portfolio-subtitle">
          A showcase of my work as a designer and developer.
        </p>
      </div>
    </section>
  );
};

export default PortfolioHero;