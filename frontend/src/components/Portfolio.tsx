import React from "react";
import ProjectCard from "./ProjectCard"; // Import the ProjectCard component
import "../assets/styles/homepage.css"; // Reuse homepage styles
import project1Image from "../assets/images/feature2.jpg";

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Project 1",
      description: "A brief description of Project 1.",
      image: project1Image,
    },
    {
      id: 2,
      title: "Project 2",
      description: "A brief description of Project 2.",
      image: project1Image,
    },
    {
      id: 3,
      title: "Project 3",
      description: "A brief description of Project 3.",
      image: project1Image,
    },
    {
      id: 4,
      title: "Project 4",
      description: "A brief description of Project 4.",
      image: project1Image,
    },
    {
      id: 5,
      title: "Project 5",
      description: "A brief description of Project 5.",
      image: project1Image,
    },
    {
      id: 6,
      title: "Project 6",
      description: "A brief description of Project 6.",
      image: project1Image,
    },
  ];

  return (
    <div className="portfolio">
      {/* Top Panel */}
      <div className="portfolio-top-panel homepage-top-panel">
        <div className="hero-content">
          <h1 className="hero-title">My Portfolio</h1>
          <p className="hero-subtitle">
            A collection of my latest work showcasing my skills in design and development.
          </p>
        </div>
      </div>

      {/* Bottom Panel */}
      <div className="portfolio-bottom-panel homepage-bottom-panel">
        <div className="homepage-grid">
          {portfolioItems.map((item) => (
            <ProjectCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;