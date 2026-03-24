import React from "react";

const EducationSec = () => {
  return (
    <>
      <section className="bg-gray-100 py-10" id="education">
        {/* HEADER */}
        <div className="flex items-center px-4 sm:px-6 md:px-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700">
            Education
          </h1>
          <div className="hidden sm:block h-0.5 flex-1 ml-3 bg-gradient-to-r from-amber-500 via-amber-300 to-gray-100 rounded"></div>
        </div>

        {/* GRID */}
        <div className="mt-6 px-4 sm:px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* CARD 1 */}
          <div className="p-5 sm:p-6 border-2 border-blue-300 rounded-xl transition hover:border-amber-400 hover:shadow-lg">
            <h5 className="text-lg font-bold">MCA (Lateral)</h5>
            <span className="text-blue-600 text-sm font-semibold">
              2025 - Present
            </span>
            <p className="text-sm sm:text-md font-semibold mt-1">
              Makhanlal Chaturvedi National University of Journalism and Mass
              Communication, Bhopal
            </p>
          </div>

          {/* CARD 2 */}
          <div className="p-5 sm:p-6 border-2 border-blue-300 rounded-xl transition hover:border-amber-400 hover:shadow-lg">
            <h5 className="text-lg font-bold">BCA (Honours)</h5>
            <span className="text-blue-600 text-sm font-semibold">
              2021 - 2025
            </span>
            <p className="text-sm sm:text-md font-semibold mt-1">
              Makhanlal Chaturvedi National University of Journalism and Mass
              Communication, Bhopal | <i>CGPA:</i> <b>7.23</b>
            </p>
          </div>

          {/* CARD 3 */}
          <div className="p-5 sm:p-6 border-2 border-blue-300 rounded-xl transition hover:border-amber-400 hover:shadow-lg">
            <h5 className="text-lg font-bold">
              12<sup>th</sup>
            </h5>
            <span className="text-blue-600 text-sm font-semibold">
              2020 - 2021
            </span>
            <p className="text-sm sm:text-md font-semibold mt-1">
              (MPBSE) | Model Higher Secondary School, Bhopal |{" "}
              <i>Percentage:</i> <b>83%</b>
            </p>
          </div>

          {/* CARD 4 */}
          <div className="p-5 sm:p-6 border-2 border-blue-300 rounded-xl transition hover:border-amber-400 hover:shadow-lg">
            <h5 className="text-lg font-bold">
              10<sup>th</sup>
            </h5>
            <span className="text-blue-600 text-sm font-semibold">
              2018 - 2019
            </span>
            <p className="text-sm sm:text-md font-semibold mt-1">
              (MPBSE) | Model Higher Secondary School, Bhopal |{" "}
              <i>Percentage:</i> <b>82%</b>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationSec;
