import React from "react";
import "../Services/Services.css";
import { data } from "./Servicesdata";

const Services = () => {
  return (
    <>
      <div className="services">
        <div className="servicestext">SERVICES</div>
        <h1>Our feautures and services</h1>
        <div className="service-card-container">
          {data.map((item, index) => {
            return (
              <div class="service-card" key={index}>
                <img src={item.destination} alt={item.alt} />
                <div class="service-container">
                  <h4>
                    <b>{item.text1}</b>
                  </h4>
                  <p>{item.text2}</p>
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
