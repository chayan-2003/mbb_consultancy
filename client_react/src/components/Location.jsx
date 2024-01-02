import React from 'react';

export default function Location() {
  return (
  
   
      <div className="gmap_canvas flex justify-center ">
        <iframe class=" items-end rounded-xl shadow-md shadow-black "
          title="Google Map"
          src="https://maps.google.com/maps?q=mbb%20consultancy%20&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          frameBorder="0"
          scrolling="no"
          style={{ width: '1400px', height: '470px' }}referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
   
 
  );
}