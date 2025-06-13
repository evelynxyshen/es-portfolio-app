import React from "react";
import AboutPanel from "./AboutPanel";
import SkillsPanel from "./SkillsPanel";
import CoderPanel from "./CoderPanel";
import FeaturesPanel from "./FeaturesPanel";
import "../assets/styles/about.css"; // Import the styles for the About page
import AboutRatioPanel from "./AboutRatioPanel";

const About: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-panel">
        <div className="about-row mx-16 lg:mx-32"> {/* Increased margin */}
          <AboutPanel />
        </div>
      </div>
      <div className="about-panel bg-gray-100">
        <div className="about-row mx-16 lg:mx-32"> {/* Increased margin */}
          <AboutRatioPanel />
        </div>
      </div>
      <div className="about-panel">
        <div className="about-row mx-16 lg:mx-32"> {/* Increased margin */}
          <SkillsPanel />
        </div>
      </div>
      <div className="about-panel bg-gray-100">
        <div className="about-row mx-16 lg:mx-32"> {/* Increased margin */}
          <FeaturesPanel />
        </div>
      </div>
    </div>
  );
};

export default About;