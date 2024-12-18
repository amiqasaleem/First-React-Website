import React from 'react'
import { SecondSecCards } from './SecondSecCards'
import burger from '../imgs/burger.png'
import sandwich from '../imgs/sandwich.png'
import ice from '../imgs/ice.png'
import juice from '../imgs/juice.png'

export const SecondSec = () => {
  return (
    <div className='SecondSec-Div'> 
        <h6>Customer Favorites</h6>
        <h3>Popular Catagories</h3>
        <div className='second-sec-row'>
            <SecondSecCards dishName='Main DIsh' quantity='(86 Dishes)' img={burger}/>
            <SecondSecCards dishName='Break Fast' quantity='(12 Break Fast)' img={sandwich}/>
            <SecondSecCards dishName='Dessert' quantity='(48 dessert)' img={ice}/>
            <SecondSecCards dishName='Browse All' quantity='(255 Items)' img={juice}/>   
        </div>
    </div>
  )
}
