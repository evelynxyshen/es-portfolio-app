import React from "react";
import "../assets/styles/aboutpanel.css"; // Import the styles for the AboutPanel
import profileImage from "../assets/images/profile.jpg"; // Replace with the actual image path

const AboutPanel: React.FC = () => {
  return (
    <div className="about-panel-container flex flex-col lg:flex-row items-center lg:items-start">
      {/* Left Panel */}
      <div className="about-panel-left flex-1 text-center lg:text-left px-8">
        <h2 className="about-panel-title text-4xl font-bold mb-4">About Me</h2>
        <p className="about-panel-text text-lg text-gray-700">
          Welcome to my portfolio! I am passionate about creating beautiful designs and writing clean, efficient code.
          With a strong background in both design and development, I specialize in crafting user-friendly interfaces
          and solving complex problems with elegant solutions.
        </p>
        <p className="about-panel-text text-lg text-gray-700 mt-4">
          When I'm not working, I enjoy exploring new technologies, learning new skills, and sharing my knowledge with
          others. Feel free to reach out if you'd like to collaborate or learn more about my work!
        </p>
      </div>

      {/* Right Panel */}
      <div className="about-panel-right flex-1 px-8 mt-8 lg:mt-0">
        <img
          src={profileImage}
          alt="Profile"
          className="about-panel-image w-full max-w-sm mx-auto lg:mx-0 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default AboutPanel;
