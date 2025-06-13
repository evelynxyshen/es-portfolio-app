import React from "react";
import "../assets/styles/aboutratiopanel.css"; // Import the styles for the AboutRatioPanel
import pieChartImage from "../assets/images/pie-chart.png"; // Replace with the actual image path

const AboutRatioPanel: React.FC = () => {
  return (
    <div className="about-ratio-panel-container flex flex-col lg:flex-row items-center lg:items-start">
      {/* Left Column */}
      <div className="about-ratio-left flex-1 text-center lg:text-left px-8">
        <h2 className="about-ratio-title text-4xl font-bold mb-4">My Skills</h2>
        <p className="about-ratio-text text-lg text-gray-700">
          I have a balanced skill set in both design and development, allowing me to create user-friendly and visually
          appealing digital experiences.
        </p>
      </div>

      {/* Middle Column */}
      <div className="about-ratio-middle flex-1 px-8 mt-8 lg:mt-0">
        <img
          src={pieChartImage}
          alt="Skill Ratio Pie Chart"
          className="about-ratio-image w-full max-w-sm mx-auto lg:mx-0"
        />
      </div>

      {/* Right Column */}
      <div className="about-ratio-right flex-1 text-center lg:text-left px-8 mt-8 lg:mt-0">
        <h2 className="about-ratio-title text-4xl font-bold mb-4">My Skills</h2>
        <p className="about-ratio-text text-lg text-gray-700">
          My expertise is split evenly between design and development, ensuring that I can bridge the gap between
          aesthetics and functionality.
        </p>
      </div>
    </div>
  );
};

export default AboutRatioPanel;