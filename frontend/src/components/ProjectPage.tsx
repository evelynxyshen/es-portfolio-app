import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
}

const ProjectPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data: Project[]) => {
        const found = data.find((p) => p.id === Number(id));
        setProject(found || null);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (!project) {
    return <div className="text-center mt-8">Project not found.</div>;
  }

  return (
    <div className="project-page">
      <h1 className="text-4xl font-bold text-center mt-8">{project.name}</h1>
      <p className="text-center mt-4">{project.description}</p>
      <div className="text-center mt-4">
        <strong>Technologies:</strong> {project.technologies.join(", ")}
      </div>
    </div>
  );
};

export default ProjectPage;