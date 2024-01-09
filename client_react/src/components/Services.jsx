import React from 'react';

export default function Services() {
  return (
    <div>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl flex justify-center font-bold mb-6 my-14">Our Services</h2>
      <div className="container mx-auto my-8">
        <div className="flex flex-col sm:flex-row lg:mx-9 gap-6">
          {/* Service 1 */}
          <div className="relative">
            <div className="group">
              <img
                src="client_images\Engineering-Surveying.jpg"
                alt="Service 3"
                className="h-60 sm:h-72 w-full md:w-96 object-cover mb-4 rounded-xl transition duration-300 transform group-hover:opacity-80 group-hover:border-4 group-hover:border-blue-500"
              />
              <div className="absolute bottom-4 left-0 right-0 text-white text-center p-4 bg-black opacity-80 rounded-xl">
                <p className="text-lg sm:text-xl lg:text-2xl font-bold">Survey</p>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="relative">
            <div className="group">
              <img
                src="client_images\soil_testing.webp"
                alt="Service 3"
                className="h-60 sm:h-72 w-full md:w-96 object-cover mb-4 rounded-xl transition duration-300 transform group-hover:opacity-80 group-hover:border-4 group-hover:border-blue-500"
              />
              <div className="absolute bottom-4 left-0 right-0 text-white text-center p-4 bg-black opacity-80 rounded-xl">
                <p className="text-lg sm:text-xl lg:text-2xl font-bold">Soil Testing</p>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="relative">
            <div className="group">
              <img
                src="client_images\planning_design.avif"
                alt="Service 3"
                className="h-60 sm:h-72 w-full md:w-96 object-cover mb-4 rounded-xl transition duration-300 transform group-hover:opacity-80 group-hover:border-4 group-hover:border-blue-500"
              />
              <div className="absolute bottom-4 left-0 right-0 text-white text-center p-4 bg-black opacity-80 rounded-xl">
                <p className="text-lg sm:text-xl lg:text-2xl font-bold">Planning and Design</p>
              </div>
            </div>
          </div>

          {/* Service 4 */}
          <div className="relative">
            <div className="group">
              <img
                src="client_images\railway_sidings.jpg"
                alt="Service 4"
                className="h-60 sm:h-72 w-full md:w-96 object-cover mb-4 rounded-xl transition duration-300 transform group-hover:opacity-80 group-hover:border-4 group-hover:border-blue-500"
              />
              <div className="absolute bottom-4 left-0 right-0 text-white text-center p-4 bg-black opacity-80 rounded-xl">
                <p className="text-lg sm:text-xl lg:text-2xl font-bold">Railways Sidings</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center sm:flex-row mt-4 gap-6">
          {/* Service 5 */}
          <div className="relative">
            <div className="group">
              <img
                src="client_images\construction.avif"
                alt="Service 5"
                className="h-60 sm:h-72 w-full md:w-72 object-cover mb-4 rounded-xl transition duration-300 transform group-hover:opacity-80 group-hover:border-4 group-hover:border-blue-500"
              />
              <div className="absolute bottom-4 left-0 right-0 text-white text-center p-4 bg-black opacity-80 rounded-xl">
                <p className="text-lg sm:text-xl lg:text-2xl font-bold">Design of Rail and Road Bridges</p>
              </div>
            </div>
          </div>

          {/* Service 6 */}
          <div className="relative">
            <div className="group">
              <img
                src="client_images\supervision.avif"
                alt="Service 6"
                className="h-60 sm:h-72 w-full md:w-72 object-cover mb-4 rounded-xl transition duration-300 transform group-hover:opacity-80 group-hover:border-4 group-hover:border-blue-500"
              />
              <div className="absolute bottom-4 left-0 right-0 text-white text-center p-4 bg-black opacity-80 rounded-xl">
                <p className="text-lg sm:text-xl lg:text-2xl font-bold">Supervision of Construction Sites</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
