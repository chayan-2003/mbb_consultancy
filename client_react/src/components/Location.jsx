import React from 'react';

export default function Location() {
  return (
<div className="gmap_canvas flex justify-center mb-8 sm:w-full md:w-full lg:w-full">
  <iframe
    title="Google Map"
    src="https://maps.google.com/maps?q=mbb%20consultancy%20&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
    frameBorder="0"
    scrolling="no"
    className="rounded-xl shadow-md shadow-black"
    style={{ width: '100%', maxWidth: '100%', height: '470px' }}
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
  );
}
