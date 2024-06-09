import React from "react";
import "./ScrollUp.css";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    this.scrollY >= 560
      ? scrollUp.classList.add("show-scroll")
      : scrollUp.classList.remove("show-scroll");
  });
  return (
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scroll__icon"></i>
    </a>
  );
};

export default ScrollUp;
