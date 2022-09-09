import React, { useState } from "react";
const Info = () => {
  const [toggleState, setToggleState] = useState(0);

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-certification about__icon"></i>
        <h3 className="about__title" onClick={() => toggleTab(4)}>
          Education
        </h3>
      </div>

      <div
        className={
          toggleState === 4 ? "services__modal active-modal" : "services__modal"
        }
      >
        <div className="services__modal-content">
          <i
            onClick={() => toggleTab(0)}
            className="uil uil-times services__modal-close"
          ></i>

          <h3 className="services__modal-title">Education</h3>
          <p className="services__modal-description">
            Recipient of a <br /> Bachelor's of Science in Computer Science{" "}
            <br />
            (Software Development and Design Track)
            <br /> <br />
            <a
              href="https://www.linkedin.com/in/ziad-malik-17b8a61b3/"
              className="modal__social-icon"
              target="_blank"
            >
              <i class="uil uil-linkedin"></i>
            </a>
          </p>

          <ul className="services__modal-services grid">
            <li className="services__modal-service">
              <details>
                <summary className="about__button" onClick={myFunction}>
                  <div className="summary__content">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Mathematical Sciences Minor
                    </p>
                    <i className="uil uil-arrow-down about__arrow"></i>
                  </div>
                </summary>
                <p className="hidden__details">
                  Minor in Mathematical Sciences enables myself to develop a
                  degree of expertise and knowledge in mathematics in addition
                  to my expertise in Computer Science. Mathematics is the
                  foundation of Computer Science and a strong foundation in
                  Mathematics goes a long way to coming up with and implementing
                  algorithms into code.
                </p>
              </details>
            </li>
            <li className="services__modal-service">
              <details>
                <summary className="about__button" onClick={myFunction}>
                  <div className="summary__content">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Certifications</p>
                    <i className="uil uil-arrow-down about__arrow"></i>
                  </div>
                </summary>

                <div className="modal__list">
                  <ul>
                    <li>Google Cloud Create and Manage Cloud Resources</li>
                    <li>Codecademy TypeScript Course</li>
                    <li>Codecademy Building iOS Apps using SwiftUI Course</li>
                    <li>Google Cloud Essentials Badge</li>
                    <li>LinkedIn Learning REST APIs Course</li>
                    <li>F.I.U Learning and Communicating with Data Badge</li>
                    <li>LinkedIn Learning C++ Essential Training Course</li>
                  </ul>
                </div>
              </details>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={
          toggleState === 5 ? "services__modal active-modal" : "services__modal"
        }
      >
        <div className="services__modal-content">
          <i
            onClick={() => toggleTab(0)}
            className="uil uil-times services__modal-close"
          ></i>

          <h3 className="services__modal-title">Past Work</h3>
          <p className="services__modal-description">
            Work Done on more than 20+ Different Projects Excluding Team
            projects
            <br /> <br />
            <a
              href="https://github.com/ZiadMalik1"
              className="modal__social-icon"
              target="_blank"
            >
              <i class="uil uil-github"></i>
            </a>
          </p>

          <ul className="services__modal-services grid">
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                Multiple Springboot API's Written (Java)
              </p>
            </li>

            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                Multiple Full-Stack Applications Written (JavaScript)
              </p>
            </li>

            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                Deployment to Cloud Services (Google Cloud, AWS)
              </p>
            </li>

            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                Creation of Database Schemas + Implementation (postgreSQL,
                mySQL)
              </p>
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                Creation of Microservices on Industry Level
              </p>
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                Creation of Artificial Intelligence Game Playing Systems
              </p>
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                Human Computer Interaction Systems Implementation
              </p>
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                Mobile Applications (SwiftUI, Flutter, React Native)
              </p>
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                Implementation of JWT Authentication in Applications
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={
          toggleState === 6 ? "services__modal active-modal" : "services__modal"
        }
      >
        <div className="services__modal-content">
          <i
            onClick={() => toggleTab(0)}
            className="uil uil-times services__modal-close"
          ></i>

          <h3 className="services__modal-title">Experience</h3>
          <p className="services__modal-description">
            Industry Level Experience at multiple Organizations / Companies
          </p>

          <ul className="services__modal-services grid">
            <li className="services__modal-service">
              <details>
                <summary className="about__button" onClick={myFunction}>
                  <div className="summary__content">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Teaching Assistant</p>
                    <i className="uil uil-arrow-down about__arrow"></i>
                  </div>
                </summary>
                <p className="hidden__details">
                  Since Fall of 2019, Have helped teach students Computer
                  Science foundational Mathematics Classes such as Pre-Calculus,
                  Trigonometry, and Calculus I. Have been responsible for
                  grading assignments, and after a certain amount of time, have
                  been responsible to conduct office hours where I teach
                  students under my own supervision.
                </p>
              </details>
            </li>

            <li className="services__modal-service">
              <details>
                <summary className="about__button" onClick={myFunction}>
                  <div className="summary__content">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Software Engineering Intern
                    </p>
                    <i className="uil uil-arrow-down about__arrow"></i>
                  </div>
                </summary>
                <p className="hidden__details">
                  Summer of 2022. Interned at Mastercard where I helped create a
                  Microservice for a team of developers that was seen in
                  production. The Service was used to implement Feature Flags to
                  Features that were pushed to production to enable developers
                  control of the features post deployment to production.
                </p>
              </details>
            </li>

            <li className="services__modal-service">
              <details>
                <summary className="about__button" onClick={myFunction}>
                  <div className="summary__content">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Research Assistant</p>
                    <i className="uil uil-arrow-down about__arrow"></i>
                  </div>
                </summary>
                <p className="hidden__details">
                  Under the supervision of a Computer Science Professor, I
                  conducted research on improving and implementing the Gauss
                  Markov Mobility Model onto Drones of different size and speed
                  variations to help with the progression of Flying-Adhoc
                  Networks
                </p>
              </details>
            </li>

            <li className="services__modal-service">
              <details>
                <summary className="about__button" onClick={myFunction}>
                  <div className="summary__content">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Leadership Roles</p>
                    <i className="uil uil-arrow-down about__arrow"></i>
                  </div>
                </summary>
                <p className="hidden__details">
                  Upsilon Pi Epsilon, The largest tech organization at Florida
                  International University, is responsible for teaching hundreds
                  of students how to implement the material they learn in school
                  regarding Computer Science. I have held Leadership Roles at
                  this organization such as Technology Commitee Member and Honor
                  Society Member where I am responsbile to work within a team to
                  help disburse the services of the organization to the student
                  body
                </p>
              </details>
            </li>
            <li className="services__modal-service">
              <details>
                <summary className="about__button" onClick={myFunction}>
                  <div className="summary__content">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Multiple Bootcamp Attendee
                    </p>
                    <i className="uil uil-arrow-down about__arrow"></i>
                  </div>
                </summary>

                <div className="modal__list">
                  <ul>
                    <li>Codepath Cybersecurity University</li>
                    <li>Codepath Technical Interview Prep University</li>
                    <li>AWS Interview Prep Bootcamp</li>
                  </ul>
                </div>
              </details>
            </li>
          </ul>
        </div>
      </div>

      <div className="about__box">
        <i class="bx bxl-github about__icon"></i>
        <h3 className="about__title" onClick={() => toggleTab(5)}>
          Projects
        </h3>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase about__icon"></i>
        <h3 className="about__title" onClick={() => toggleTab(6)}>
          Experience
        </h3>
      </div>
    </div>
  );
};

export default Info;
