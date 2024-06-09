import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">ᔕᗩᛕᎥᑎ</h1>
        <div className="footer__social">
          <a href="" className="footer__social-link" target="_blank">
            <i class="bx bxl-facebook"></i>
          </a>
          <a href="" className="footer__social-link" target="_blank">
            <i class="bx bxl-instagram"></i>
          </a>
          <a href="" className="footer__social-link" target="_blank">
            <i class="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; Sakin, All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
