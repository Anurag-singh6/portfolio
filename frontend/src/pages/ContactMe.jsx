import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";

const ContactMe = () => {
  const [formData, setformData] = useState({
    fullname: "",
    email: "",
    mobileno: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setformData({
      fullname: "",
      email: "",
      mobileno: "",
      message: "",
    });
  };

  const validate = () => {
    let Error = {};

    if (formData.fullname.length < 3) {
      Error.fullname = "Name should be More than 3 characters";
    } else {
      if (!/^[A-Za-z ]+$/.test(formData.fullname)) {
        Error.fullname = "Only Contain A-Z, a-z and space";
      }
    }

    if (
      !/^[\w\.]+@(gmail|outlook|yahoo)\.(com|in|co.in)$/.test(formData.email)
    ) {
      Error.email = "Use Proper Email Format";
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobileno)) {
      Error.mobileno = "Only Indian Mobile Number allowed";
    }

    setValidationError(Error);

    return Object.keys(Error).length > 0 ? false : true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validate()) {
      setIsLoading(false);
      toast.error("Fill the contact form correctly");
      return;
    }

    try {
      const res = await api.post("https://portfolio-backend-btrq.onrender.com/public/contact", formData);
      toast.success(res.data.message);
      handleClearForm();
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message || error.message || "Something went wrong"
      );
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div
        className="mt-10 px-4 sm:px-6 md:px-10 flex items-center justify-center bg-white"
        id="contact"
      >
        <div className="w-full max-w-xl border border-gray-300 rounded-2xl shadow-lg">
          <form
            className="space-y-4 p-5 sm:p-6"
            onSubmit={handleSubmit}
            onReset={handleClearForm}
          >
            {/* HEADING */}
            <h1 className="text-blue-700 font-bold text-2xl sm:text-3xl md:text-4xl text-center">
              Contact
            </h1>

            {/* FULL NAME */}
            <div>
              <label className="font-semibold text-sm sm:text-base">
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                required
                disabled={isLoading}
                placeholder="Enter Your Full Name"
                className="mt-1 border border-gray-300 px-4 py-2 w-full rounded shadow-sm 
            focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 
            transition disabled:bg-gray-200"
              />
              {validationError.fullname && (
                <span className="text-xs text-red-500">
                  {validationError.fullname}
                </span>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label className="font-semibold text-sm sm:text-base">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
                placeholder="Enter Your Email"
                className="mt-1 border border-gray-300 px-4 py-2 w-full rounded shadow-sm 
            focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 
            transition disabled:bg-gray-200"
              />
              {validationError.email && (
                <span className="text-xs text-red-500">
                  {validationError.email}
                </span>
              )}
            </div>

            {/* MOBILE */}
            <div>
              <label className="font-semibold text-sm sm:text-base">
                Mobile No.
              </label>
              <input
                type="number"
                name="mobileno"
                value={formData.mobileno}
                onChange={handleChange}
                required
                disabled={isLoading}
                placeholder="Enter Your Mobile Number"
                className="mt-1 border border-gray-300 px-4 py-2 w-full rounded shadow-sm 
            focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 
            transition disabled:bg-gray-200"
              />
              {validationError.mobileno && (
                <span className="text-xs text-red-500">
                  {validationError.mobileno}
                </span>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <label className="font-semibold text-sm sm:text-base">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                rows="4"
                onChange={handleChange}
                required
                disabled={isLoading}
                placeholder="Type Your Message Here..."
                className="mt-1 resize-none border border-gray-300 px-4 py-2 w-full rounded shadow-sm 
            focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 
            transition disabled:bg-gray-200"
              ></textarea>
            </div>

            {/* BUTTON */}
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-lg text-base sm:text-lg bg-black text-white font-semibold 
            shadow-md cursor-pointer transition hover:bg-gray-900 disabled:bg-gray-400"
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
