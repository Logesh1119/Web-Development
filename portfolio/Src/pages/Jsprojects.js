import React from "react";
import "./Jsprojects.css";
import githubImg from "../assets/img/github.png";
import myproject1 from "../assets/img/myproject1.png";
import pf2 from "../assets/img/myproject2.png";

const Jsprojects = () => {
  return (
    <div className="jsprojects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-wrapper">
          <div className="project">
            <div className="project-content">
              <img src={myproject1} alt="Blood Bank Management" />
              <h3>Blood Bank Management</h3>
              <p>
                Collaborated in a team of four to design a Blood Bank Management System to manage and facilitate blood donation and receipt for emergencies.
              </p>
              <ul>
                <li>Developed a team schedule and quality measurements for milestones using HTML, CSS, JavaScript, PHP, and MySQL.</li>
                <li>Ensured compliance with Design Control Procedures as per CFR guidelines.</li>
              </ul>
              <a
                href="https://github.com/mathavan1817/blood-bank-management-website"
                className="btn btn-default d-block github"
                target="_blank"
                rel="noreferrer"
              >
                Github Code <img src={githubImg} alt="GitHub" />
              </a>
            </div>
          </div>
          <div className="vertical-line"></div>
          <div className="project">
            <div className="project-content">
              <img src={pf2} alt="Mental Health Detection" />
              <h3>Mental Health Detection</h3>
              <p>
                Led a team to develop a mental health detection system using machine learning to predict emotions.
              </p>
              <ul>
                <li>Implemented machine learning models for emotion prediction through audio, video, and text (Python, Flask, MySQL).</li>
                <li>Built a system integrating multiple data modalities to assess emotional states (HTML, CSS, JavaScript).</li>
                
              </ul>
              <a
                href="https://github.com/your-username/mental-health-detection"
                className="btn btn-default d-block github"
                target="_blank"
                rel="noreferrer"
              >
                Github Code <img src={githubImg} alt="GitHub" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jsprojects;
