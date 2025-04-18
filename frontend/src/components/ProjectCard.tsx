import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/projectcard.css"; // Import the styles for the ProjectCard

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image }) => {
  return (
    <div className="project-card group relative overflow-hidden rounded-lg shadow-lg">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="project-card-image w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="project-card-overlay absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <h3 className="project-card-title text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="project-card-description text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;