import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact_number: '',
    work_Title: '',
    desc: '',
  });

  const [validationMessages, setValidationMessages] = useState({
    name: '',
    email: '',
    contact_number: '',
    work_Title: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear validation message when the user starts typing in the field
    setValidationMessages({
      ...validationMessages,
      [name]: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if mandatory fields are empty
    const mandatoryFields = ['name', 'email', 'contact_number', 'work_Title'];
    let isValid = true;
    const updatedValidationMessages = {};

    mandatoryFields.forEach((field) => {
      if (!formData[field]) {
        updatedValidationMessages[field] = 'This field is mandatory';
        isValid = false;
      }
    });

    // If any mandatory field is empty, update state to display validation messages
    if (!isValid) {
      setValidationMessages(updatedValidationMessages);
      return;
    }

    try {
      const response = await fetch('http://localhost:8800/contacts/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        // Optionally, you can perform actions after a successful submission
      } else {
        console.error('Form submission failed');
        // Optionally, handle errors or show an error message to the user
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle network errors or other issues
    }

    // Clear the form after submission (optional)
    setFormData({
      name: '',
      email: '',
      contact_number: '',
      work_Title: '',
      desc: '',
    });
  };

  return (
    <div className="flex flex-col md:flex-row lg:mt-14 items-center h-screen">
      <div className="w-full order-last md:w-1/2 bg-gray-300 p-8 sm:mr-4 sm:ml-3 rounded-lg shadow-xl shadow-black">
        <h2 className="text-2xl font-semibold mb-4 text-center">Contact Form</h2>
  
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">
              Name<span className="text-red-800 text-lg">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className={`form-input mt-1 block w-full border p-2 rounded focus:outline-none focus:border-blue-500 ${
                validationMessages.name && 'border-red-500'
              }`}
            />
            {validationMessages.name && (
              <p className="text-red-500 text-sm mt-1">{validationMessages.name}</p>
            )}
          </div>
  
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
              Email<span className="text-red-800 text-lg">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className={`form-input mt-1 block w-full border p-2 rounded focus:outline-none focus:border-blue-500 ${
                validationMessages.email && 'border-red-500'
              }`}
            />
            {validationMessages.email && (
              <p className="text-red-500 text-sm mt-1">{validationMessages.email}</p>
            )}
          </div>
  
          <div className="mb-4">
            <label htmlFor="contact_number" className="block text-sm font-medium text-gray-600 mb-2">
              Contact Number<span className="text-red-800 text-lg">*</span>
            </label>
            <input
              type="text"
              id="contact_number"
              name="contact_number"
              value={formData.contact_number}
              onChange={handleInputChange}
              placeholder="Enter contact number"
              className={`form-input mt-1 block w-full border p-2 rounded focus:outline-none focus:border-blue-500 ${
                validationMessages.contact_number && 'border-red-500'
              }`}
            />
            {validationMessages.contact_number && (
              <p className="text-red-500 text-sm mt-1">{validationMessages.contact_number}</p>
            )}
          </div>
  
          <div className="mb-4">
            <label htmlFor="work_Title" className="block text-sm font-medium text-gray-600 mb-2">
              Work Subject<span className="text-red-800 text-lg">*</span>
            </label>
            <input
              type="text"
              id="work_Title"
              name="work_Title"
              value={formData.work_Title}
              onChange={handleInputChange}
              placeholder="Enter work title"
              className={`form-input mt-1 block w-full border p-2 rounded focus:outline-none focus:border-blue-500 ${
                validationMessages.work_Title && 'border-red-500'
              }`}
            />
            {validationMessages.work_Title && (
              <p className="text-red-500 text-sm mt-1">{validationMessages.work_Title}</p>
            )}
          </div>
  
          <div className="mb-4">
            <label htmlFor="desc" className="block text-sm font-medium text-gray-600 mb-2">
              Work Description
            </label>
            <textarea
              id="desc"
              name="desc"
              value={formData.desc}
              onChange={handleInputChange}
              placeholder="Enter work description"
              className="form-textarea mt-1 block w-full border p-2 rounded focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
  
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline-green"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
  
      <div className="order-first md:w-1/2 mb-4 sm:mb-0">
        <div className="font-medium rounded p-2 text-center">
          <p className="mt-6 md:mt-0 text-center text-lg md:text-4xl text-gray-700 font-serif">
            Complete the form now to get in touch with our team. We are here to answer your questions and provide expert advice on your construction project.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Form;