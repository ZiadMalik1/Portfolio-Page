import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Malik</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/ziad-malik-17b8a61b3/"
            className="home__social-icon"
            target="_blank"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/ZiadMalik1"
            className="home__social-icon"
            target="_blank"
          >
            <i class="bx bxl-github"></i>
          </a>
          <a href="" className="home__social-icon" target="_blank"></a>
        </div>

        <span className="footer__copy">
          &#169; Ziad Malik. All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
