import React from "react";
import "../Footer/Footer.css";
import { data } from "./Footerdata";
import { AiOutlineCopyright } from "react-icons/ai";
import { icondata } from "./Footerdata";
const Footer = () => {
  return (
    <>
      <div className="footers">
        <div className="footerrow">
          <div className="footer-col-3">
            <div>FOOTER CONTENT</div> <br />
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
              veniam esse doloremque obcaecati quidem blanditiis iusto aliquid
              unde, aut consectetur!
            </div>
          </div>
          {data.map((item, index) => (
            <div className="footer-col-3" key={index}>
              <div>{item.links}</div> <br />
              <div>{item.link1}</div>
              <div>{item.link2}</div>
              <div>{item.link3}</div>
              <div>{item.link4}</div>
            </div>
          ))}
        </div>
        <div className="footer-register">
          <div>
            <h1 className="registerh1">REGISTER FOR FREE</h1>
          </div>
          <button className="footer-button">SIGNUP !</button>
        </div>
        <div className="footer-icons">
          {icondata.map((items, index) => (
            <div className={items.classname}>{<items.icon />}</div>
          ))}
        </div>
        <div className="footer-copyright">
          <span className="footer-copyright-icon">
            <AiOutlineCopyright />
          </span>
          <span className="cr">2022 Copyright:Project.com</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
