import React from "react";
import linked from "../assets/linked.jpg";

const Hero = () => {
  return (
    <>
      <section className="bg-gray-50 h-150 flex justify-between align-center">
        <div className="ml-5">
          <div className="p-5">
            <p className=" text-gray-600 text-md mb-2">Hello, my name is</p>
            <h1 className="text-5xl font-bold">Anurag Singh</h1>
          </div>
          <div className="p-5 w-120">
            <p className=" text-gray-600 text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
              alias velit minima asperiores veritatis architecto expedita,
              officiis cum obcaecati aliquid aut quaerat commodi dolores
              voluptatum voluptatem voluptates optio nulla itaque!
            </p>
          </div>
          <div className="p-5 flex gap-4">
            <button className="text-white font-semibold w-40 bg-blue-500 p-3 rounded-xl shadow-md hover:shadow-lg transition ease-in-out hover:bg-blue-700 cursor-pointer">
              View Projects
            </button>
            <button className="text-red-600 font-semibold w-40 bg-white p-3 border-2 border-red-400 rounded-xl shadow-md hover:shadow-lg transition ease-in-out hover:bg-red-100 cursor-pointer">
              Get In Touch
            </button>
          </div>
        </div>
        <div className="p-5 mr-20">
          <img
            src={linked}
            alt="profile"
            className="w-100 h-130 border-3 border-gray-300 rounded-xl object-cover shadow-2xl"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
