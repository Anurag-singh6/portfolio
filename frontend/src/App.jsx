import React from "react";
import Header from "./components/Header";
import Hero from "./pages/Hero";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <section className="mt-15 ml-5">
        <div className="p-5">
          <h1 className="text-3xl font-bold text-blue-700">Teachnical Skills</h1>
        </div>
      </section>
    </>
  );
};

export default App;
