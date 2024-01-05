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
                src="https://shradhalandsurveyors.com/blog/wp-content/uploads/2020/02/Engineering-Surveying.jpg"
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
                src="https://media.istockphoto.com/id/1460833922/photo/soil-testing-in-flower-plant-garden-with-digital-analyzer-or-tester.webp?b=1&s=170667a&w=0&k=20&c=mzbWUG4okiGDMTm4lQjP1L68ndH-h2b6B2jH8eoTTuI="
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
                src="https://img.freepik.com/premium-photo/hands-architects-designers-pointing-blueprint-table-when-discussing-future-interior-design-project_274689-20802.jpg?size=626&ext=jpg"
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
                src="https://t4.ftcdn.net/jpg/02/34/47/79/360_F_234477993_zJvIuCuOQM8EkasYUCxoipmWjJnP8Kky.jpg"
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
                src="https://images.unsplash.com/photo-1621866546767-0d689e8f7784?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhaWx3YXklMjBicmlkZ2V8ZW58MHx8MHx8fDA%3D"
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
                src="https://images.unsplash.com/photo-1591588582259-e675bd2e6088?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
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
