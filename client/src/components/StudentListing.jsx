import React, { useState } from "react";

function StudentListing() {
  const [formData, setFormData] = useState({
    name: "",
    description:"",
  });
  const [submitState, setSubmitState] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitState(1);

    const { name } = formData;
    try {
      // Simulate campaign creation
      console.log("Campaign Created:", {
        Studentname: name,
        Walletaddress: address,
      });
      setSubmitState(2);
    } catch (error) {
      console.error("Error registering as student:", error);
    }
  };

  return (
    <div className="scroller bg-black ">
      <div className="h-screen">
      <h1 className="text-lg font-medium text-blue-400 text-center py-[30px]">Complete the process to register as student</h1>
        <form
          className="flex flex-col items-start ml-40 mr-40 my-5 dark mb-10 py-[50px]"
          onSubmit={handleSubmit}
        >
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              id="eventName"
              className="block py-2.5 px-0 w-full text-sm text-white-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="eventName"
              className="peer-focus:font-medium absolute text-sm text-gray-400  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Student Name
            </label>
          </div>

        
          <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="name"
            value={formData.description}
            onChange={handleChange}
            id="description"
            className="block py-2.5 px-0 w-full text-sm text-white-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="description"
            className="peer-focus:font-medium absolute text-sm text-gray-400  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
          Description
          </label>
        </div>
          <div
            className=" mb-6 text-sm rounded-lg bg-transparent w-auto text-white"
            role="alert"
          >
            <span className="font-medium text-red-600">
              <b>Warning!</b>
            </span>{" "}
            Try to put the same address connected to dapp 🤯 😎
          </div>

          <button
            className="text-white mt-6 border border-blue-400 focus:ring-4 font-medium rounded-lg text-sm  mx-auto px-10 py-2.5 text-center bg-transparent dark:focus:ring-blue-800 "
            type="submit"
            disabled={submitState !== 0}
          >
           Register as Student
          </button>
        </form>
      </div>
    </div>
  );
}

export default StudentListing;
