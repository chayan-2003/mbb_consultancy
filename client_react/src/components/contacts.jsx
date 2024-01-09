import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUrl } from '../constant';

const Form = () => {
  const navigate = useNavigate();
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

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

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
    console.log(process.env.SERVER_PROD_URL,"envserver");
    const postContactsUrl = getUrl() + "/contacts/submit";
    console.log(postContactsUrl,"contact_url");

    try {
      const response = await fetch(postContactsUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        setIsFormSubmitted(true); // Set the form submission status to true
        // Optionally, you can perform actions after a successful submission
      } else {
        console.error('Form submission failed');
        // Optionally, handle errors or show an error message to the user
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle network errors or other issues
    }
  };

  const handleOkClick = () => {
    // Clear the form and reset state when the "OK" button is clicked
    navigate("/")
  };

  return (
    <div className="flex flex-col min-h-screen justify-between bg-slate-200 items-center">
      {isFormSubmitted ? (
        // Display success message and "OK" button when the form is submitted successfully
        <div className="font-medium h-44 w-96 mt-8 ml-4 pt-12 text-center bg-green-200 text-green-900 rounded-lg border-green-500 border-2 ">
          <p className="text-2xl ">Form submitted successfully!</p>
          <button
            onClick={handleOkClick}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline-green mt-2  border-green-700 border-2"
          >
            OK
          </button>
        </div>
      ) : (
        // Display the form when it's not submitted
        <div className="w-full max-w-screen-md p-8">
          <h2 className="text-4xl font-bold mb-4 text-center">Contact Form</h2>
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
      )}
      
      {/* Footer */}
      {/* <footer className="bg-gray-300 p-4 text-center w-full">
        Your footer content goes here
      </footer> */}
    </div>
  );
};

export default Form;