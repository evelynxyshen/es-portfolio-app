import React from "react";
import HomepageHero from "./HomepageHero"; // Import the HomepageHero component
import ProjectCard from "./ProjectCard"; // Import the ProjectCard component
import project1Image from "../assets/images/feature2.jpg";

const Homepage: React.FC = () => {
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
  ];

  return (
    <div className="homepage">
      {/* Top Panel: Hero Section */}
      <div className="homepage-top-panel">
        <HomepageHero />
      </div>

      {/* Bottom Panel: Project Cards */}
      <div className="homepage-bottom-panel">
        <div className="homepage-title-container">
          <div className="homepage-title-line"></div>
          <h2 className="homepage-title">SOME OF MY LATEST WORK</h2>
          <div className="homepage-title-line"></div>
        </div>
        <div className="homepage-grid">
          {portfolioItems.map((item) => (
            <ProjectCard
              key={item.id}
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

export default Homepage;
