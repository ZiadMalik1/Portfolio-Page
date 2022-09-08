import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-certification about__icon"></i>
        <h3 className="about__title">Education</h3>
        <span className="about__subtitle">Computer Science (B.S)</span>
      </div>

      <div className="about__box">
        <i class="bx bxl-github about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle"> 20+ Projects</span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase about__icon"></i>
        <h3 className="about__title">Industry Experience</h3>
        <span className="about__subtitle">Fortune 500 Internship</span>
      </div>
    </div>
  );
};

export default Info;
