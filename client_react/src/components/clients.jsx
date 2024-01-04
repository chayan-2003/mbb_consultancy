import React from 'react';

const Clients = () => {
  return (
    <div className="flex flex-wrap gap-12 justify-center mt-16 p-4 lg:p-8">
      {[
        'bp.png', 'eastern_rail.png', 'adani.png', 'Ultratech_Cement.png', 'L_T.jpg',
        'tata_steel.png', 'HPCL.jpg', 'zindal.jpg', 'south_eastern_rail.jpg', 'indian_oil.png',
        'adhunik.jpg', 'MPL.jpg', 'EMTA.jpg', 'east_central_rail.png', 'usha_martin.png',
        'OCL.jpg', 'rashmi.jpg', 'shyam_metalics.jpg', 'godavari.jpg', 'rail_vikas.png',
      ].map((image, index) => (
        <div key={index}>
          <img
            src={`client_images/${image}`}
            alt={`client ${index + 1}`}
            className="h-32 md:h-40 lg:h-44 w-40 md:w-52 lg:w-52"
          />
        </div>
      ))}
    </div>
  );
};

export default Clients;
