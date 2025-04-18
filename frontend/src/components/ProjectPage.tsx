import React from "react";
import { useParams } from "react-router-dom";

const ProjectPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the project ID from the URL

  return (
    <div className="project-page">
      <h1 className="text-4xl font-bold text-center mt-8">Project {id}</h1>
      <p className="text-center mt-4">Details about Project {id} will go here.</p>
    </div>
  );
};

export default ProjectPage;