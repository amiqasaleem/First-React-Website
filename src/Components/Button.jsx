import React from 'react'
// import Button from 'react-bootstrap/Button';
import phone from '../imgs/phone.png'
// import phone from '../imgs/phone.png'

export const CustomButton = ({text, className}) => {
  return (
    <button className={`cus-btn ${className}`}>
      <img src={phone}/>{text}
    </button>
   
  )
}

