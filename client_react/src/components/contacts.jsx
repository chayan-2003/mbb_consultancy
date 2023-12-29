// Form.js

import React from 'react';

const Form = () => {
  return (
    <div className=" items-center h-screen bg-gray-300  ">
      <div className=" flex ">
        <div className="w-1/2 bg-gray-200 p-8   mr-4 mt-12 ml-3 rounded-lg shadow-xl shadow-black  ">
          <h2 className="text-2xl font-semibold mb-4 text-center  ">Contact Form</h2>
          
          {/* Left side of the form */}
          <div className="mb-4 ">
            <label htmlFor="individual" className="block text-sm font-medium text-gray-600 mb-2">Individual or Personal Work</label>
            <input
              type="text"
              id="individual"
              name="individual"
              placeholder="Enter individual or personal work"
              className="form-input mt-1 block w-full border p-2 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-600 mb-2">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Enter company name"
              className="form-input mt-1 block w-full border p-2 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="companyAddress" className="block text-sm font-medium text-gray-600 mb-2">Company Address</label>
            <textarea
              id="companyAddress"
              name="companyAddress"
              placeholder="Enter company address"
              className="form-textarea mt-1 block w-full border p-2 rounded focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="workType" className="block text-sm font-medium text-gray-600 mb-2">Type of Work Needed</label>
            <input
              type="text"
              id="workType"
              name="workType"
              placeholder="Enter type of work needed"
              className="form-input mt-1 block w-full border p-2 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="extraDetails" className="block text-sm font-medium text-gray-600 mb-2">Add Extra Details</label>
            <textarea
              id="extraDetails"
              name="extraDetails"
              placeholder="Add extra details"
              className="form-textarea mt-1 block w-full border p-2 rounded focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <div class="flex justify-center">
          <button
              type="submit"
              className=" bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline-green"
            >
              Submit
            </button>
            </div>
        </div>
        
        {/* Right side of the form */}
        <div className="w-1/2">
          <div className="bg-gray-300 rounded p-2 text-center  ">
            <p className="mt-52  text-center text-4xl text-gray-700  font-serif">
              Complete the form now to get in touch with our team. We are here to answer your questions and provide expert advice on your construction project.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;