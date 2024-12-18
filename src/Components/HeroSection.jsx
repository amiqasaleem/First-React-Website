import React from 'react'
import intersect from '../imgs/Intersect.png'
import { CustomButton } from './Button';
import playbtn from '../imgs/playbtn.png'

export const HeroSection = () => {
  return (
    <>
    <div className='row'>
        <div className='col-sm-12 col-md-12 col-lg-6 col-12 left'>
            <h1>Dive into Delights Of Delectable <span className='Food'>Food</span></h1>
            <p>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
            <div className='btns-div'>
                <CustomButton text='Order Now'/>
                <button className='herosec-btn'>Watch Video</button>
                <div className='play-btn'>
                    <img src={playbtn}/>
                </div>
            </div>
        </div>
        
        <div className='col-sm-12 col-md-12 col-lg-6 col-12 right'>
            <div className='girl-div'>
                <img src={intersect} className='girl'/>
            </div>
        </div>
    
    </div>
  </>
  )
}
