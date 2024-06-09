import React from "react";
import ProjectCard from "./projects-card";
import { project } from "./data";

const ProjectShowcase = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My projects</span>

      <div className="projects__container container">
        {project.map((project) => (
          <ProjectCard
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            techStack={project.techStack}
            demoLink={project.demoLink}
            codeLink={project.codeLink}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
