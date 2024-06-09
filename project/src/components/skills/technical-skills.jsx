import React from "react";
import { skills } from "./data";
import ProgressBar from "./technical-skills-bar";

const TechnicalSkills = () => {
  return (
    <div className="skills__content">
      <h1 className="skills__title">Technical Skills</h1>
      {skills.map((skill, index) => (
        <ProgressBar
          id={skill.id}
          title={skill.title}
          percentage={skill.percentage}
        />
      ))}
    </div>
  );
};

export default TechnicalSkills;
