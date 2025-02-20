import React from "react";
import "./Experience.css";
import work from "../Data/Work.json";

const Experience = () => {
  return (
    <>
      <div id="experience">
        <div className="container">
          <div className="row">
            <div className="col-sm-11 offset-sm-1">
              <h2 data-aos="fade-down">Experience</h2>
              <br />
              {work.map((item, i) => (
                <div className="experienceBlock" key={i}>
                  <div className="row">
                    <div className="col-sm-5">
                      <h5 data-aos="fade-right">{item.year}</h5>
                    </div>
                    <div className="col-sm-7">
                      <div className="experienceRight" data-aos="fade-left">
                        <h5>{item.companyname}</h5>
                        <h6 className="position">
                          <i>{item.position}</i>
                        </h6>
                        <h6>{item.desc}</h6>
                      </div>
                    </div>
                  </div>
                  {/* Line Separator */}
                  {i !== work.length - 1 && <hr className="separator" />} {/* Only add separator if not the last item */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
