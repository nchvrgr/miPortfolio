import React from "react";
import ProjectCard from "./ProjectCard";


const Project = ({ heading, projects }) => {

  return (
      <div id="projects">
        <h2 className="display-4 pb-5 text-center projectsTitle">{heading}</h2>
        <div className="cards">
          {
          projects.length
            ? projects.map((project, index) => (
                <ProjectCard
                  key={`project-card-${index}`}
                  id={`project-card-${index}`}
                  value={project}
                  project={project}
                />
              ))
            : null
          }
        </div>
      </div>
  );
};

export default Project;
