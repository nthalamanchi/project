import React from "react";
import { Link } from "react-router-dom";
import "../Homepage/Homepage.css";
import { data } from "../Homepage/Homepagedata";

const Homepage = () => {
  return (
    <>
      <div className="parent">
        {data.map((item, index) => {
          return (
            <div className={item.homepage} key={index}>
              <div className={item.makeup}>
                <h3>
                  {item.text}
                  <br />
                  <Link className={item.makeuplink} to={item.destination}>
                    {item.text2}
                  </Link>
                </h3>
              </div>
              <div className={item.makeup}>
                <img src={item.src} alt={item.alt} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Homepage;
