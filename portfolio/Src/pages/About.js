import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" data-aos="zoom-in" data-aos-duration="1200">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <div className="aboutcontent">
              
              <h2>About Me</h2>
              <p>
                Hello! I am Mathavan, a dedicated student currently pursuing a degree in Artificial Intelligence and Data Science. As a hardworking individual with a passion for technology, I strive to continuously improve my skills and knowledge in the field.
              </p>
              <p>
                I have a solid foundation in programming, with experience in Python, C, and C++. My journey includes developing various projects and applications, and I am always eager to take on new challenges and learn from them. My goal is to leverage my skills to create impactful solutions and contribute meaningfully to the tech industry.
              </p>
              <p>
                Whether it's working on machine learning models, full-stack development, or participating in hackathons, I am committed to applying my skills and growing as a tech professional. Feel free to explore my projects and get in touch if you'd like to collaborate or learn more about my work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
