import React from "react";

const EducationSec = () => {
  return (
    <>
      <section className="bg-gray-100 h-100" id="education">
        <div className="p-5 ml-5 flex items-center">
          <h1 className="text-4xl mt-15 font-bold text-blue-700">Education</h1>
          <div className="h-0.5 w-250 mt-15 ml-2.5 bg-linear-to-r from-amber-500 via-amber-300 to-gray-100 rounded"></div>
        </div>
        <div className="mt-5 ml-10 mr-10 grid grid-cols-4 gap-5">
          <div className="px-7 py-7 border-2 border-blue-300 transition ease-in-out delay-75 hover:border-amber-400 hover:shadow-md rounded-xl">
            <h5 className="text-lg font-bold">MCA-(LATERAL)</h5>
            <span className="text-blue-600 text-sm font-semibold">
              2025 - Present
            </span>
            <p className="text-md font-semibold">
              Makhanlal Chaturvedi National University of Journalism and Mass
              Communication, Bhopal
            </p>
          </div>
          <div className="px-7 py-7 border-2 border-blue-300 transition ease-in-out delay-75 hover:border-amber-400 hover:shadow-md rounded-xl">
            <h5 className="text-lg font-bold">BCA-(Honours)</h5>
            <span className="text-blue-600 text-sm font-semibold">
              2021 - 2025
            </span>
            <p className="text-md font-semibold">
              Makhanlal Chaturvedi National University of Journalism and Mass
              Communication, Bhopal |<i> CGPA: </i>
              <b>7.23</b>
            </p>
          </div>
          <div className="px-7 py-7 border-2 border-blue-300 transition ease-in-out delay-75 hover:border-amber-400 hover:shadow-md rounded-xl">
            <h5 className="text-lg font-bold">
              12<sup>th</sup>
            </h5>
            <span className="text-blue-600 text-sm font-semibold">
              2020 - 2021
            </span>
            <p className="text-md font-semibold">
              (MPBSE) | Model Higher Secondary School, Bhopal |<i> Percentage: </i>
              <b>83%</b>
            </p>
          </div>
          <div className="px-7 py-7 border-2 border-blue-300 transition ease-in-out delay-75 hover:border-amber-400 hover:shadow-md rounded-xl">
            <h5 className="text-lg font-bold">
              10<sup>th</sup>
            </h5>
            <span className="text-blue-600 text-sm font-semibold">
              2018 - 2019
            </span>
            <p className="text-md font-semibold">
              (MPBSE) | Model Higher Secondary School, Bhopal |<i> Percentage: </i>
              <b>82%</b>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationSec;
