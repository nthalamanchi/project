import React from "react";
import Aboutus from "../Aboutus/Aboutus";
import Contactus from "../Contactus/Contactus";
import Homepage from "../Homepage/Homepage";
import Services from "../Services/Services";
import { Routes, Route } from "react-router-dom";
import Makeup from "../Makeup/Makeup";
import University from "../University/University";

const Home = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/Aboutus" exact element={<Aboutus />} />
        <Route path="/Services" exact element={<Services />} />
        <Route path="/Contactus" exact element={<Contactus />} />
        <Route path="/Makeup" exact element={<Makeup />} />
        <Route path="/Universities" exact element={<University />} />
      </Routes>
    </>
  );
};

export default Home;
