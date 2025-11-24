import React from "react";
import "./Services.css";
import Services_Data from "../../assets/services_data";

const Services = () => {
  return (
    <div id="services" className="services_section">
      <h1 className="title">Services</h1>

      <div className="Card_Container">
        {Services_Data.map((item, index) => (
          <div key={index} className="cards">
            <p className="card_title">{item.s_no}</p>
            <p className="card_name">{item.s_name}</p>
            <p className="card_desc">{item.s_desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
