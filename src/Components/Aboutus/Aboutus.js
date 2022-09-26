import React from "react";
import "../Aboutus/Aboutus.css";
import image from "../Images/aboutus.jpg";

const Aboutus = () => {
  return (
    <>
      <div className="Aboutus">
        <div className="aboutusCard">
          <div className="aboutustext">
            <h1>About Us</h1>
            <h3>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dignissimos officia iure sit magnam earum ab accusantium ratione
              magni voluptatem labore! Similique, assumenda quia! Doloribus odio
              explicabo, asperiores dolorem debitis consequuntur! Odio, hic
              optio minus asperiores assumenda autem quia voluptatum quo,
              veritatis voluptas iusto, voluptate repellendus eaque similique.
              Quaerat commodi assumenda saepe incidunt amet! Sequi quos sit quia
              harum explicabo, eius labore expedita, laudantium provident
              dolores facere, voluptas obcaecati? Laudantium, commodi!
            </h3>
          </div>
          <div className="aboutusimage">
            <img src={image} alt="aboutus" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
