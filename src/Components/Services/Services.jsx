import React from "react";
import "./Services.css";
import Services_Data from "../../assets/services_data";

const Services = () => {
  return (
    <>
      <div id="services" className="container">
        
        <div className="row">
        <div>
          <h1 className="title">Services</h1>
        </div>
          {Services_Data.map((item, index) => {
            return (
              <div key={index} className="col-4">
                <div className="myCards">
                  <div  className="cards">
                    <p className="card_title">{item.s_no}</p>
                    <p className="card_name">{item.s_name}</p>
                    <p>{item.s_desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
