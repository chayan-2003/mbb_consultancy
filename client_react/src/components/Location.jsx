import React from 'react';

export default function Location() {
  return (
  <div class="flex justify-between mt-3  bg-slate-100 "> 
    <div class="mt-32 pl-24">
          <ul>
            <li class="mx-4 my-2 flex items-center">
              <div>
                <i class="fa fa-map-marker fa-2x mr-2" aria-hidden="true"></i>
              </div>
              <div class="text-xl pl-4 font-semibold text-gray-600">
                33,Brabourne Road 3 rd floor Kolkata -700 001
              </div>
            </li>
            <li class="mx-4 my-2 flex items-center">
              <div>
                <i class="fa fa-phone fa-2x mr-2"></i>
              </div>
              <div class="text-xl pl-3 font-semibold text-gray-600">22429412 ,  65264472(o)</div>
            </li>
            <li class="mx-4 my-2 flex items-center">
              <div>
                <i class="fa fa-envelope fa-2x mr-2" aria-hidden="true"></i>
              </div>
              <div class="text-xl pl-2 font-semibold text-gray-600">mbb62@rediffmail.com</div>
            </li>
          </ul>
    </div>
    <div className="mapouter">
      <div className="gmap_canvas flex justify-end mt-7 mr-14">
        <iframe class=" items-end rounded-xl shadow-md shadow-black "
          title="Google Map"
          src="https://maps.google.com/maps?q=mbb%20consultancy%20&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          frameBorder="0"
          scrolling="no"
          style={{ width: '600px', height: '370px' }}referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div> 
  );
}