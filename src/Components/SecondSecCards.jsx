import React from 'react';

export const SecondSecCards = ({ img, dishName, quantity }) => {
  return (
    <div className='col-12 col-md-6 col-lg-3 mb-4'>
        <div className='cards'>
            <div className='image-container'>
                <img src={img} alt={dishName} />
            </div>
            <p>{dishName}</p>
            <p>{quantity}</p>
        </div>
    </div>
  );
};
