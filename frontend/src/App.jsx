import React from "react";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <section className="">
        <div className="p-5">
          <p className="text-xl text-(--color-text-light)">Hello, my name is</p>
        </div>
        <div className="p-5">
          <h1 className="text-5xl font-bold text-(--color-text-main)">Anurag Singh</h1>
        </div>
        <div className="p-5 w-120">
          <p className="text-base text-(--color-text-light)">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim alias
            velit minima asperiores veritatis architecto expedita, officiis cum
            obcaecati aliquid aut quaerat commodi dolores voluptatum voluptatem
            voluptates optio nulla itaque!
          </p>
        </div>
        <div className="p-5">
          <button className="bg-(--color-accent) rounded-xl p-2 text-white font-semibold hover:bg-(--color-accent-hover) cursor-pointer">View Projects</button>
        </div>
      </section>
    </>
  );
};

export default App;
