import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import Skill from "./pages/Skill";
import MyProject from "./pages/MyProject";
import EducationSec from "./pages/EducationSec";
import ContactMe from "./pages/ContactMe";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Skill />
      <MyProject />
      <EducationSec />
      <ContactMe />
      <Footer/>
    </>
  );
};

export default App;
