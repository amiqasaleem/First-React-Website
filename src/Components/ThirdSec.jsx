import React from 'react';
import chef from '../imgs/chef.png';
import { CustomButton } from './Button';

export const ThirdSec = () => {
  return (
    <div className="third-sec-row row">
      {/* Left Section */}
      <div className="thirdSec-left col-12 col-md-6 mb-4">
        <div className="left-img-div">
          <img src={chef} alt="Chef" />
        </div>
      </div>

      {/* Right Section */}
      <div className="thirdSec-right col-12 col-md-6 mb-4">
        <h4>Testimonials</h4>
        <h1>What Our Customers Say About Us</h1>
        <p>
          “I had the pleasure of dining at Foodi last night, and I'm still
          raving about the experience! The attention to detail in presentation
          and service was impeccable.”
        </p>
        <button className='herosec-btn'>Our Menu</button>
      </div>
    </div>
  );
};
