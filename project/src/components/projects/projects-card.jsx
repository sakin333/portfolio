import React from "react";
import "./project.css";
import { ellipsis } from "../../utils/ellipsis";

const ProjectCard = ({
  title,
  description,
  imageUrl,
  techStack,
  demoLink,
  codeLink,
}) => {
  return (
    <div className="project-card">
      <img
        src={imageUrl}
        alt={`${title} screenshot`}
        className="project-image"
      />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{ellipsis(description)}</p>
        <p className="project-tech-stack">
          <strong>Tech:</strong> {techStack.join(", ")}
        </p>
      </div>
      <div className="project-links">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Live Demo
          </a>
        )}
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
