import React from "react";
import rest from "../assets/rest.png";
import chatkaro from "../assets/chatkaro.png";
import jokeapp from "../assets/jokeapp.png";
import converter from "../assets/coverter.png";
import imageedit from "../assets/imageedit.png";
import steg from "../assets/steg.png";

const MyProject = () => {
  const openGithubFood = () => {
    window.open(
      "https://github.com/Anurag-singh6/anurag_webdevelopment_ricr/tree/main/cravenings",
      "_blank"
    );
  };
  const openFood = () => {
    window.open("https://cravenings.onrender.com", "_blank");
  };

  const openGithubChat = () => {
    window.open("https://github.com/Anurag-singh6/chatapp/tree/main", "_blank");
  };
  const openGithubJokeapp = () => {
    window.open(
      "https://github.com/Anurag-singh6/anurag_webdevelopment_ricr/tree/main/javascript/joke_app_hindi",
      "_blank"
    );
  };
  const openGithubCurrencyConverter = () => {
    window.open(
      "https://github.com/Anurag-singh6/anurag_webdevelopment_ricr/tree/main/React/currencyconverter",
      "_blank"
    );
  };
  const openGithubImage = () => {
    window.open(
      "https://github.com/Anurag-singh6/anurag_webdevelopment_ricr/tree/main/javascript/imageeditor",
      "_blank"
    );
  };
  const openGithubstegano = () => {
    window.open(
      "https://github.com/Anurag-singh6/steganography-tool",
      "_blank"
    );
  };

  return (
    <>
      <section
        className="bg-gradient-to-b from-gray-100 via-gray-50 to-white mb-10"
        id="project"
      >
        {/* HEADER */}
        <div className="flex items-center px-4 sm:px-6 md:px-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl mt-10 font-bold text-blue-700">
            My Projects
          </h1>
          <div className="hidden sm:block h-0.5 flex-1 ml-3 mt-10 bg-gradient-to-r from-amber-500 via-amber-300 to-gray-100 rounded"></div>
        </div>

        {/* PROJECT LIST */}
        <div className="px-4 sm:px-6 md:px-10 py-6 space-y-8">
          {/* CARD 1 */}
          <div className="border-2 border-blue-300 rounded-2xl transition hover:shadow-xl flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
            <div className="p-5 sm:p-8 text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-700">
                Cravening Food Delivery Website
              </h3>

              <span className="text-sm font-semibold text-gray-500">
                FEB 2026
              </span>

              <p className="text-gray-600 text-sm sm:text-md mt-2">
                A Food Delivery platform connecting customers, restaurant
                managers and riders. Includes ordering, payments, tracking and
                discounts.
              </p>

              <div className="mt-3 flex flex-wrap gap-2 justify-center lg:justify-start">
                {[
                  "React",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "JWT",
                  "Rest API",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm border border-blue-300 rounded-xl"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={openGithubFood}
                className="mt-5 px-5 py-2 rounded-lg bg-amber-500 text-white font-semibold hover:bg-amber-600 transition"
              >
                View Code →
              </button>
              <button
                onClick={openFood}
                className="mt-5 ms-1 px-5 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
              >
                Go To Site
              </button>
            </div>

            <div className="w-full flex justify-center pb-5 lg:pb-0">
              <img
                src={rest}
                alt=""
                className="w-full sm:w-80 h-60 object-cover rounded-xl"
              />
            </div>
          </div>

          {/* CARD 2 */}
          <div className="border-2 border-blue-300 rounded-2xl transition hover:shadow-xl flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
            <div className="p-5 sm:p-8 text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-700">
                Chat Karo
              </h3>

              <span className="text-sm font-semibold text-gray-500">
                MAR 2026
              </span>

              <p className="text-gray-600 text-sm sm:text-md mt-2">
                Real-time chat app with messaging, group chats, media sharing
                and presence indicators.
              </p>

              <div className="mt-3 flex flex-wrap gap-2 justify-center lg:justify-start">
                {["React", "Socket.io", "Express", "MongoDB", "WebRTC"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm border border-blue-300 rounded-xl"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <button
                onClick={openGithubChat}
                className="mt-5 px-5 py-2 rounded-lg bg-amber-500 text-white font-semibold hover:bg-amber-600 transition"
              >
                View Code →
              </button>
            </div>

            <div className="w-full flex justify-center pb-5 lg:pb-0">
              <img
                src={chatkaro}
                alt=""
                className="w-full sm:w-80 h-60 object-cover rounded-xl"
              />
            </div>
          </div>

          {/* CARD 3 */}
          <div className="border-2 border-blue-300 rounded-2xl transition hover:shadow-xl flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
            <div className="p-5 sm:p-8 text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-700">
                Jokes App
              </h3>

              <span className="text-sm font-semibold text-gray-500">
                DEC 2025
              </span>

              <p className="text-gray-600 text-sm sm:text-md mt-2">
                Fetches random jokes using public APIs. Built to practice API
                integration.
              </p>

              <div className="mt-3 flex flex-wrap gap-2 justify-center lg:justify-start">
                {["HTML", "CSS", "JS", "Rest API"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm border border-blue-300 rounded-xl"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={openGithubJokeapp}
                className="mt-5 px-5 py-2 rounded-lg bg-amber-500 text-white font-semibold hover:bg-amber-600 transition"
              >
                View Code →
              </button>
            </div>

            <div className="w-full flex justify-center pb-5 lg:pb-0">
              <img
                src={jokeapp}
                alt=""
                className="w-full sm:w-80 h-60 object-cover rounded-xl"
              />
            </div>
          </div>

          {/* CARD 4 */}
          <div className="border-2 border-blue-300 rounded-2xl transition hover:shadow-xl flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
            <div className="p-5 sm:p-8 text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-700">
                Currency Converter
              </h3>

              <span className="text-sm font-semibold text-gray-500">
                DEC 2025
              </span>

              <p className="text-gray-600 text-sm sm:text-md mt-2">
                Fast and accurate currency conversion with clean UI.
              </p>

              <div className="mt-3 flex flex-wrap gap-2 justify-center lg:justify-start">
                {["React", "Tailwind", "JS"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm border border-blue-300 rounded-xl"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={openGithubCurrencyConverter}
                className="mt-5 px-5 py-2 rounded-lg bg-amber-500 text-white font-semibold hover:bg-amber-600 transition"
              >
                View Code →
              </button>
            </div>

            <div className="w-full flex justify-center pb-5 lg:pb-0">
              <img
                src={converter}
                alt=""
                className="w-full sm:w-80 h-60 object-cover rounded-xl"
              />
            </div>
          </div>

          {/* CARD 5 */}
          <div className="border-2 border-blue-300 rounded-2xl transition hover:shadow-xl flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
            <div className="p-5 sm:p-8 text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-700">
                Image Editor
              </h3>

              <span className="text-sm font-semibold text-gray-500">
                NOV 2025
              </span>

              <p className="text-gray-600 text-sm sm:text-md mt-2">
                Upload and edit images with brightness, contrast and more.
              </p>

              <div className="mt-3 flex flex-wrap gap-2 justify-center lg:justify-start">
                {["HTML", "CSS", "Bootstrap", "JS"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm border border-blue-300 rounded-xl"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={openGithubImage}
                className="mt-5 px-5 py-2 rounded-lg bg-amber-500 text-white font-semibold hover:bg-amber-600 transition"
              >
                View Code →
              </button>
            </div>

            <div className="w-full flex justify-center pb-5 lg:pb-0">
              <img
                src={imageedit}
                alt=""
                className="w-full sm:w-80 h-60 object-cover rounded-xl"
              />
            </div>
          </div>

          {/* CARD 6 */}
          <div className="border-2 border-blue-300 rounded-2xl transition hover:shadow-xl flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
            <div className="p-5 sm:p-8 text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-700">
                Steganography Tool
              </h3>

              <span className="text-sm font-semibold text-gray-500">
                APR 2025
              </span>

              <p className="text-gray-600 text-sm sm:text-md mt-2">
                Secure message hiding inside images using Python Flask.
              </p>

              <div className="mt-3 flex flex-wrap gap-2 justify-center lg:justify-start">
                {["HTML", "CSS", "Python Flask", "Numpy"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm border border-blue-300 rounded-xl"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={openGithubstegano}
                className="mt-5 px-5 py-2 rounded-lg bg-amber-500 text-white font-semibold hover:bg-amber-600 transition"
              >
                View Code →
              </button>
            </div>

            <div className="w-full flex justify-center pb-5 lg:pb-0">
              <img
                src={steg}
                alt=""
                className="w-full sm:w-80 h-60 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyProject;
