import React from "react";
import "../assets/styles/main_input.css";
import PortfolioHero from "./PortfolioHero"; // Import the PortfolioHero component

const Portfolio: React.FC = () => {
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
    {
      title: "Project 4",
      description: "A brief description of Project 4.",
      image: "./assets/images/feature-interior-design-news-feed-2.jpg",
    },
    {
      title: "Project 5",
      description: "A brief description of Project 5.",
      image: "./assets/images/feature-interior-design-news-feed-2.jpg",
    },
    {
      title: "Project 6",
      description: "A brief description of Project 6.",
      image: "./assets/images/feature-interior-design-news-feed-2.jpg",
    },
  ];

  return (
    <div className="portfolio-page">
      {/* Content Section Below Header */}
      <div className="content-below-header">
        {/* Top Panel */}
        <div className="portfolio-top-panel">
          <PortfolioHero />
        </div>

        {/* Bottom Panel */}
        <div className="portfolio-bottom-panel">
          <div className="portfolio-grid">
            {portfolioItems.map((item, index) => (
              <div key={index} className="portfolio-item group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="portfolio-image"
                />
                <div className="portfolio-overlay">
                  <h2 className="portfolio-item-title">{item.title}</h2>
                  <p className="portfolio-item-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
