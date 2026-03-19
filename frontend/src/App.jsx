import React from "react";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import Skill from "./pages/Skill";
import MyProject from "./pages/MyProject";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Skill />
      <MyProject />
      <section className="bg-gray-100">
        <div className="p-5 ml-5 flex items-center">
          <h1 className="text-4xl mt-15 font-bold text-blue-700">
            Education
          </h1>
          <div className="h-0.5 w-250 mt-15 ml-2.5 bg-gradient-to-r from-amber-500 via-amber-300 to-gray-100 rounded"></div>
        </div>
      </section>
    </>
  );
};

export default App;
