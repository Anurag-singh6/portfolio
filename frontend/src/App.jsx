import React from "react";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import Skill from "./pages/Skill";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Skill />
      <section className="bg-gray-100">
        <div className="p-5 ml-5 flex items-center">
          <h1 className="text-4xl mt-15 font-bold text-blue-700">
            My Projects
          </h1>
          <div className="h-0.5 w-250 mt-15 ml-2.5 bg-gradient-to-r from-amber-500 via-amber-300 to-gray-100 rounded"></div>
        </div>
        <div className="p-5 ml-5 mr-5 grid grid-cols-1">
          <div className="border border-2 border-blue-300 rounded-2xl">
            <div className="p-8 mt-5">
              <h3 className="text-2xl font-bold text-blue-700 border">
                Food Delivery Website
              </h3>
              <div className="mt-3 border border-red-500">
                <span className="text-sm font-semibold text-gray-500">
                  FEB 2026
                </span>
                <p className="text-gray-600 text-md mt-2.5 py-1">
                  A Food Delivery platform connecting customers, restaurant
                  managers and riders. Features include order taking, process
                  orders to make payments, tracking of order, and provide
                  discount to customers.
                </p>
              </div>
              <div className="p-1 mt-2 border flex gap-2">
                <div className="w-15 text-center h-8 bg-white border border-blue-400 rounded-xl">
                  <span className="text-sm font-semibold">React</span>
                </div>
                <div className="w-18 text-center h-8 bg-white border border-blue-400 rounded-xl">
                  <span className="text-sm font-semibold">Node.js</span>
                </div>
                <div className="w-18 text-center h-8 bg-white border border-blue-400 rounded-xl">
                  <span className="text-sm font-semibold">Express</span>
                </div>
                <div className="w-22 text-center h-8 bg-white border border-blue-400 rounded-xl">
                  <span className="text-sm font-semibold">MongoDB</span>
                </div>
                <div className="w-15 text-center h-8 bg-white border border-blue-400 rounded-xl">
                  <span className="text-sm font-semibold">JWT</span>
                </div>
                <div className="w-20 text-center h-8 bg-white border border-blue-400 rounded-xl">
                  <span className="text-sm font-semibold">Rest API</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
