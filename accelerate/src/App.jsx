import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slider from "./components/Slider.jsx";
import data from "./data/data.json";
import Footer from "./components/Footer.jsx";
import { Form } from "./components/Form.jsx";
import React from "react";
import Offers from "./components/Offers.jsx";
import Heading from "./components/Heading.jsx";
function App() {
  let routes = (
    <Routes>
      <Route path="/PVPIT/form" element={<Form />} />
    </Routes>
  );

  const isFormPath = window.location.pathname === "/PVPIT/form";
  const showSlider = !isFormPath;

  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <main>{routes}</main>
      </BrowserRouter>
      {showSlider && <Slider start={data.banner.start} />}

      <Heading text={"Our Investors"} />
      
      <Offers offer={data.offer}/>
      <Footer footer={data.footer} />
    </React.Fragment>
  );
}

export default App;

