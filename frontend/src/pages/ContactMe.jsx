import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api"

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
  }

  const handleClearForm = () => {
    setformData({
      fullname: "",
      email: "",
      mobileno: "",
      message: "",
    })
  }

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
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validate()) {
      setIsLoading(false);
      toast.error("Fill the contact form correctly")
      return
    }

    try {
      const res = await api.post("/public/contact", formData);
      toast.success(res.data.message);
      handleClearForm();
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message || "Something went wrong");
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <>
      <div className="mt-15 bg-white flex items-center justify-center" id="contact">
        <div className="border-2 border-gray-400 rounded-2xl w-150 shadow-lg">
          <form className="space-y-3" onSubmit={handleSubmit} onReset={handleClearForm}>
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
                value={formData.fullname}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="border border-gray-300 px-4 py-2 w-full rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition duration-150 ease-in-out disabled:cursor-not-allowed disabled:bg-gray-200"
                placeholder="Enter Your Full Name"
              />
              {validationError.fullname && (
                <span className="text-xs text-red-500">
                  {validationError.fullname}
                </span>
              )}
            </div>
            <div className="px-3 py-2 ml-5 mr-5">
              <label htmlFor="email" className="font-semibold text-lg">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="border border-gray-300 px-4 py-2 w-full rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition duration-150 ease-in-out disabled:cursor-not-allowed disabled:bg-gray-200"
                placeholder="Enter Your Email"
              />
               {validationError.email && (
                <span className="text-xs text-red-500">
                  {validationError.email}
                </span>
              )}
            </div>
            <div className="px-3 py-2 ml-5 mr-5">
              <label htmlFor="mobileno" className="font-semibold text-lg">
                Mobile no.
              </label>
              <input
                type="number"
                name="mobileno"
                value={formData.mobileno}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="border border-gray-300 px-4 py-2 w-full rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition duration-150 ease-in-out disabled:cursor-not-allowed disabled:bg-gray-200"
                placeholder="Enter Your Mobile Number"
              />
               {validationError.mobileno && (
                <span className="text-xs text-red-500">
                  {validationError.mobileno}
                </span>
              )}
            </div>
            <div className="px-3 py-2 ml-5 mr-5">
              <label htmlFor="message" className="font-semibold text-lg">
                Message
              </label>
              <br />
              <textarea
                name="message"
                value={formData.message}
                rows="5"
                onChange={handleChange}
                required
                disabled={isLoading}
                className="resize-none border border-gray-300 px-4 py-2 w-full rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition duration-150 ease-in-out disabled:cursor-not-allowed disabled:bg-gray-200"
                placeholder="Type Your Message Here..."
              ></textarea>
            </div>
            <div className="px-3 py-2 ml-5 mr-5 mb-5 flex justify-center">
              <button type="submit" className="px-4 py-3 rounded w-full text-lg bg-black text-white font-semibold cursor-pointer shadow-md transition delay-150 ease-in-out hover:bg-gray-900" disabled={isLoading}>
                {isLoading ? "Submitting" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
