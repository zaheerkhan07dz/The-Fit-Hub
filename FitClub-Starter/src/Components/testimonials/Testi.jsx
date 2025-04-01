import React from 'react'
import './Testi.css'
import { useState } from 'react'
import {testimonialsData} from '../../data/testimonialsData'


import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
const Testi = () => {
    const [selected, setselected] = useState(0)
   const  tlength = testimonialsData.length;
   const prev = selected;
  return (
    <div className="testimonial">
        <div className="left-t">
        <span>Testimonial</span>

            <div className="testiheading">
            <span className='stroke-text'>WHAT THEY</span>
            <span>SAY ABOUT US</span>
            </div>
        <span>{testimonialsData[selected].review}</span>
        <span style={{
        color: 'white',
       
    }}>
    <span style={{
        color: 'var(--orange)',
        padding:'5px',
    }}>{testimonialsData[selected].name}</span>  
{"- "+testimonialsData[selected].status} 
            </span> 
        </div>


        <div className="right-t">
            <div>

            </div>
            <div></div>
                <img src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
                <img 
                onClick={()=>{
                    selected===0? setselected(tlength+1):setselected((prev)-1);
                }}
                
                width={25} src={leftArrow} alt="" />
        <img 
        onClick={()=>{
            selected===tlength-1? setselected(0):setselected((prev)+1);
        }}
        
        width={25} src={rightArrow} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Testi
