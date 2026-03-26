import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import Skill from "./pages/Skill";
import MyProject from "./pages/MyProject";
import EducationSec from "./pages/EducationSec";
import ContactMe from "./pages/ContactMe";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Header />
      <Toaster />
      <Hero />
      <Skill />
      <MyProject />
      <EducationSec />
      <ContactMe />
      <Footer />
    </>
  );
};

export default App;
