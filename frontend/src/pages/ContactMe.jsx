import React from "react";

const ContactMe = () => {
  return (
    <>
      <div className="mt-15 bg-white flex items-center justify-center">
        <div className="border-2 border-gray-400 rounded-2xl w-150 shadow-lg">
          <form className="space-y-3">
            <div className="px-3 py-2">
              <h1 className="text-blue-700 font-bold text-4xl text-center">
                Contact
              </h1>
            </div>
            <div className="px-3 py-2 ml-5 mr-5">
              <label htmlFor="fullname" className="font-semibold text-lg">
                Full Name
              </label>
              <br />
              <input
                type="text"
                name="fullname"
                className="border border-gray-300 px-4 py-2 w-full rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition duration-150 ease-in-out"
                placeholder="Enter Your Full Name"
              />
            </div>
            <div className="px-3 py-2 ml-5 mr-5">
              <label htmlFor="email" className="font-semibold text-lg">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="border border-gray-300 px-4 py-2 w-full rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition duration-150 ease-in-out"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="px-3 py-2 ml-5 mr-5">
              <label htmlFor="message" className="font-semibold text-lg">
                Message
              </label>
              <br />
              <textarea
                name="message"
                rows="5"
                className="resize-none border border-gray-300 px-4 py-2 w-full rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition duration-150 ease-in-out"
                placeholder="Type Your Message Here..."
              ></textarea>
            </div>
            <div className="px-3 py-2 ml-5 mr-5 mb-5 flex justify-center">
              <button className="px-4 py-3 rounded w-full text-lg bg-black text-white font-semibold cursor-pointer transition delay-150 ease-in hover:bg-gray-800">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
