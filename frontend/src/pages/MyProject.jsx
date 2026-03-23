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

  const openGithubChat = () => {
    window.open("https://github.com/Anurag-singh6/chatapp/tree/main", "_blank");
  };
  const openGithubJokeapp = () => {
    window.open("https://github.com/Anurag-singh6/anurag_webdevelopment_ricr/tree/main/javascript/joke_app_hindi", "_blank");
  };
  const openGithubCurrencyConverter = () => {
    window.open("https://github.com/Anurag-singh6/anurag_webdevelopment_ricr/tree/main/React/currencyconverter", "_blank");
  }
  const openGithubImage = () => {
    window.open("https://github.com/Anurag-singh6/anurag_webdevelopment_ricr/tree/main/javascript/imageeditor", "_blank")
  }
  const openGithubstegano = () => {
    window.open("https://github.com/Anurag-singh6/steganography-tool", "_blank");
  }

  return (
    <>
      <section
        className="bg-linear-to-b from-gray-100 via-gray-50 to-white mb-10"
        id="project"
      >
        <div className="p-5 ml-5 flex items-center">
          <h1 className="text-4xl mt-15 font-bold text-blue-700">
            My Projects
          </h1>
          <div className="h-0.5 w-250 mt-15 ml-2.5 bg-linear-to-r from-amber-500 via-amber-300 to-gray-100 rounded"></div>
        </div>
        <div className="p-5 ml-5 mr-5 grid grid-cols-1">
          <div className="border-2 border-blue-300 rounded-2xl transition ease-in hover:shadow-xl flex items-center gap-18">
            <div className="p-8 mt-10">
              <h3 className="text-2xl font-bold text-blue-700 w-70">
                Food Delivery Website
              </h3>
              <div className="mt-3 w-160">
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
              <div className="p-1 mt-2 flex gap-2">
                <div className="w-15 text-center h-8 bg-white border border-blue-300 rounded-xl">
                  <span className="text-sm font-semibold">React</span>
                </div>
                <div className="w-18 text-center h-8 bg-white border border-blue-300 rounded-xl">
                  <span className="text-sm font-semibold">Node.js</span>
                </div>
                <div className="w-18 text-center h-8 bg-white border border-blue-300 rounded-xl">
                  <span className="text-sm font-semibold">Express</span>
                </div>
                <div className="w-22 text-center h-8 bg-white border border-blue-300 rounded-xl">
                  <span className="text-sm font-semibold">MongoDB</span>
                </div>
                <div className="w-15 text-center h-8 bg-white border border-blue-300 rounded-xl">
                  <span className="text-sm font-semibold">JWT</span>
                </div>
                <div className="w-20 text-center h-8 bg-white border border-blue-300 rounded-xl">
                  <span className="text-sm font-semibold">Rest API</span>
                </div>
              </div>
              <div className="mt-5 mb-10 flex gap-4">
                <button
                  className="px-6 py-3 rounded-lg bg-amber-500 text-white font-semibold transition ease-in-out hover:bg-amber-600"
                  onClick={openGithubFood}
                >
                  View Code →
                </button>
              </div>
            </div>
            <div>
              <img src={rest} alt="" className="w-80 h-70 object-cover" />
            </div>
          </div>
          <div className="mt-8 border-2 border-blue-300 rounded-2xl transition ease-in hover:shadow-xl flex items-center gap-18">
            <div className="p-8 mt-10">
              <h3 className="text-2xl font-bold text-blue-700 w-70">
                Chat Karo
              </h3>
              <div className="mt-3 w-160">
                <span className="text-sm font-semibold text-gray-500">
                  MAR 2026
                </span>
                <p className="text-gray-600 text-md mt-2.5 py-1">
                  Real-time online chatting application with instant messaging,
                  group chats, media sharing, and user presence indicators.
                  Built for seamless communication.
                </p>
              </div>
              <div className="p-1 mt-2 flex gap-2">
                <div className="w-15 text-center h-8 bg-white border border-blue-300 rounded-xl">
                  <span className="text-sm font-semibold">React</span>
                </div>
                <div className="w-18 text-center h-8 bg-white border border-blue-300 rounded-xl">
                  <span className="text-sm font-semibold">Socket.io</span>
                </div>
                <div className="w-18 text-center h-8 bg-white border border-blue-300 rounded-xl">
                  <span className="text-sm font-semibold">Express</span>
                </div>
                <div className="w-22 text-center h-8 bg-white border border-blue-300 rounded-xl">
                  <span className="text-sm font-semibold">MongoDB</span>
                </div>
                <div className="w-20 text-center h-8 bg-white border border-blue-300 rounded-xl">
                  <span className="text-sm font-semibold">WebRTC</span>
                </div>
              </div>
              <div className="mt-5 mb-10 flex gap-4">
                <button className="px-6 py-3 rounded-lg bg-amber-500 text-white font-semibold transition ease-in-out hover:bg-amber-600" onClick={openGithubChat}>
                  View Code →
                </button>
              </div>
            </div>
            <div>
              <img src={chatkaro} alt="" className="w-80 h-70 object-cover" />
            </div>
          </div>
          <div className="mt-8 border-2 border-blue-300 rounded-2xl transition ease-in hover:shadow-xl flex items-center gap-18">
            <div className="p-8 mt-10">
              <h3 className="text-2xl font-bold text-blue-700 w-70">
                Jokes App
              </h3>
              <div className="mt-3 w-160">
                <span className="text-sm font-semibold text-gray-500">
                  DEC 2025
                </span>
                <p className="text-gray-600 text-md mt-2.5 py-1">
                  A fun application that fetches random jokes from public APIs
                  and displays them in an interactive interface. Built to master
                  API integration and asynchronous data fetching techniques.
                </p>
              </div>
              <div className="p-1 mt-2 flex gap-2">
                <div className="w-15 text-center h-8 bg-white border border-blue-300 rounded-xl">
                  <span className="text-sm font-semibold">HTML</span>
                </div>
                <div className="w-18 text-center h-8 bg-white border border-blue-300 rounded-xl">
                  <span className="text-sm font-semibold">CSS</span>
                </div>
                <div className="w-18 text-center h-8 bg-white border border-blue-300 rounded-xl">
                  <span className="text-sm font-semibold">JS</span>
                </div>
                <div className="w-22 text-center h-8 bg-white border border-blue-300 rounded-xl">
                  <span className="text-sm font-semibold">Rest API</span>
                </div>
              </div>
              <div className="mt-5 mb-10 flex gap-4">
                <button className="px-6 py-3 rounded-lg bg-amber-500 text-white font-semibold transition ease-in-out hover:bg-amber-600" onClick={openGithubJokeapp}>
                  View Code →
                </button>
              </div>
            </div>
            <div>
              <img
                src={jokeapp}
                alt="image"
                className="w-80 h-70 object-cover"
              />
            </div>
          </div>
          <div className="mt-8 border-2 border-blue-300 rounded-2xl transition ease-in hover:shadow-xl flex items-center gap-18">
            <div className="p-8 mt-10">
              <h3 className="text-2xl font-bold text-blue-700 w-70">
                Currency Converter
              </h3>
              <div className="mt-3 w-160">
                <span className="text-sm font-semibold text-gray-500">
                  DEC 2025
                </span>
                <p className="text-gray-600 text-md mt-2.5 py-1">
                  "Seamless currency conversions at your fingertips — fast,
                  accurate, and user‑friendly." This version highlights speed,
                  precision, and ease of use, which are strong selling points
                  for recruiters or portfolio viewers.
                </p>
              </div>
              <div className="p-1 mt-2 flex gap-2">
                <div className="w-15 text-center h-8 bg-white border border-blue-300 rounded-xl">
                  <span className="text-sm font-semibold">React</span>
                </div>
                <div className="w-18 text-center h-8 bg-white border border-blue-300 rounded-xl">
                  <span className="text-sm font-semibold">Tailwind</span>
                </div>
                <div className="w-18 text-center h-8 bg-white border border-blue-300 rounded-xl">
                  <span className="text-sm font-semibold">JS</span>
                </div>
              </div>
              <div className="mt-5 mb-10 flex gap-4">
                <button className="px-6 py-3 rounded-lg bg-amber-500 text-white font-semibold transition ease-in-out hover:bg-amber-600" onClick={openGithubCurrencyConverter}>
                  View Code →
                </button>
              </div>
            </div>
            <div>
              <img
                src={converter}
                alt="image"
                className="w-80 h-70 object-cover"
              />
            </div>
          </div>
          <div className="mt-8 border-2 border-blue-300 rounded-2xl transition ease-in hover:shadow-xl flex items-center gap-18">
            <div className="p-8 mt-10">
              <h3 className="text-2xl font-bold text-blue-700 w-70">
                Image Editor
              </h3>
              <div className="mt-3 w-160">
                <span className="text-sm font-semibold text-gray-500">
                  NOV 2025
                </span>
                <p className="text-gray-600 text-md mt-2.5 py-1">
                  An Simple Image editor where user can simply upload the image
                  and can edit through various editing options like brightness,
                  contrast etc. And then the user can download it.
                </p>
              </div>
              <div className="p-1 mt-2 flex gap-2">
                <div className="w-15 text-center h-8 bg-white border border-blue-300 rounded-xl">
                  <span className="text-sm font-semibold">HTML</span>
                </div>
                <div className="w-18 text-center h-8 bg-white border border-blue-300 rounded-xl">
                  <span className="text-sm font-semibold">CSS</span>
                </div>
                <div className="w-20 text-center h-8 bg-white border border-blue-300 rounded-xl">
                  <span className="text-sm font-semibold">Bootstrap</span>
                </div>
                <div className="w-18 text-center h-8 bg-white border border-blue-300 rounded-xl">
                  <span className="text-sm font-semibold">JS</span>
                </div>
              </div>
              <div className="mt-5 mb-10 flex gap-4">
                <button className="px-6 py-3 rounded-lg bg-amber-500 text-white font-semibold transition ease-in-out hover:bg-amber-600" onClick={openGithubImage}>
                  View Code →
                </button>
              </div>
            </div>
            <div>
              <img
                src={imageedit}
                alt="image"
                className="w-80 h-70 object-cover"
              />
            </div>
          </div>
          <div className="mt-8 border-2 border-blue-300 rounded-2xl transition ease-in hover:shadow-xl flex items-center gap-18">
            <div className="p-8 mt-10">
              <h3 className="text-2xl font-bold text-blue-700 w-70">
                Steganography Tool
              </h3>
              <div className="mt-3 w-160">
                <span className="text-sm font-semibold text-gray-500">
                  APR 2025
                </span>
                <p className="text-gray-600 text-md mt-2.5 py-1">
                  This project is to manage the security of a message pass
                  through third party by hiding behind an image without any
                  interference. We can save the embed image as well as original
                  image in a single system. In this project use python flask
                  framework, HTML and CSS to create user interface.
                </p>
              </div>
              <div className="p-1 mt-2 flex gap-2">
                <div className="w-15 text-center h-8 bg-white border border-blue-300 rounded-xl">
                  <span className="text-sm font-semibold">HTML</span>
                </div>
                <div className="w-20 text-center h-8 bg-white border border-blue-300 rounded-xl">
                  <span className="text-sm font-semibold">CSS</span>
                </div>
                <div className="w-23 text-center h-8 bg-white border border-blue-300 rounded-xl">
                  <span className="text-sm font-semibold">Python Flask</span>
                </div>
                <div className="w-18 text-center h-8 bg-white border border-blue-300 rounded-xl">
                  <span className="text-sm font-semibold">Numpy</span>
                </div>
              </div>
              <div className="mt-5 mb-10 flex gap-4">
                <button className="px-6 py-3 rounded-lg bg-amber-500 text-white font-semibold transition ease-in-out hover:bg-amber-600" onClick={openGithubstegano}>
                  View Code →
                </button>
              </div>
            </div>
            <div>
              <img src={steg} alt="image" className="w-80 h-70 object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyProject;
