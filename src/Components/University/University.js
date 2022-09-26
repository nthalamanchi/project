import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Makeup/Makeup.css";
import { thdata } from "./Universitydata";

const University = () => {
  const [info, setinfo] = useState([]);
  useEffect(() => {
    axios
      .get("http://universities.hipolabs.com/search?country=India")
      .then((response) => setinfo(response.data));
  }, []);

  return (
    <>
      <h3>INDIAN UNIVERSITIES</h3>
      <table className="information">
        <tr>
          {thdata.map((head, index) => {
            return <th>{head.title}</th>;
          })}
        </tr>
        {info.map((iteml, index) => {
          return (
            <tr key={index}>
              <td>{iteml.name}</td>
              <td>{iteml.web_pages}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default University;
