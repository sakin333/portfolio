import React from "react";
import html5 from "../../assets/html.png";
import css from "../../assets/css-icon.png";
import js from "../../assets/js-icon.png";
import reactjs from "../../assets/react-js-icon.png";
import tailwind from "../../assets/tailwind-css-icon.png";
import nodejs from "../../assets/node-js-icon.png";
import express from "../../assets/express-js-icon.png";
import angular from "../../assets/angular-icon.png";

const TechStack = () => {
  return (
    <div className="home__tech">
      <div className="techstack">
        <h4>Tech Stack</h4>
        <div className="tech--img">
          <img src={html5} alt="html" />
          <img src={css} alt="css" />
          <img src={js} alt="js" />
          <img src={reactjs} alt="reactjs" />
          <img src={tailwind} alt="tailwind" />
          <img src={nodejs} alt="nodejs" />
          <img src={express} alt="express" />
          <img
            src={angular}
            alt="angular"
            style={{ height: "44px", width: "44px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
