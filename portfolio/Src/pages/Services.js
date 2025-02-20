import React from "react";
import "./Services.css";
import services from "../Data/Services.json";

const Services = () => {
  return (
    <div id="services" data-aos="fade-in">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h2 className="section-title">What I Do</h2>
            <br />
          </div>
          
          <div className="col-sm-12">
            <div className="services-content">
              {services.map(service => (
                <div className="servicebox" key={service.id}>
                  <img src={service.imgg} alt={service.servicename} />
                  <h4>{service.servicename}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
