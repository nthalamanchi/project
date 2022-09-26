import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Makeup/Makeup.css";
import { thdata } from "./Makeupdata";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Makeup = () => {
  const [info, setinfo] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      )
      .then((response) => setinfo(response.data));
  }, []);

  return (
    <>
      <h2 className="makeuph2">MAYBELLINE COSMETIC PRODUCTS DATA ANALYSIS</h2>
      <div>
        <LineChart
          width={1400}
          height={300}
          data={info}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="rating"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>

      <h3 className="makeuph3">MAYBELLINE COSMETIC PRODUCTS AND DETAILS</h3>
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
              <td>{iteml.price}</td>
              <td>{iteml.description}</td>
              <td>{iteml.rating}</td>
              <td>{iteml.product_type}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default Makeup;
