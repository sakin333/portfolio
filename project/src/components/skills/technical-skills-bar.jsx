import React, { useEffect, useState } from "react";

const ProgressBar = ({ id, title, percentage }) => {
  const [style, setStyle] = useState();

  useEffect(() => {
    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${percentage}`,
      };
      setStyle(newStyle);
    }, 1000);
  }, [percentage]);

  return (
    <div className="skills__box">
      <div className="skills__group">
        <span className="title">{title}</span>
        <div className="skills__bar">
          <span className="skills__per" style={style}>
            <span className="tooltip">{percentage}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
