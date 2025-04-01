import React from 'react'
import './Program.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className="programs" id="programs">
        <div className="programheader">

        <span className='stroke-text'>EXPLORE OUR</span>
        <span>PROGRAMS</span>
        <span className='stroke-text'>TO SHAPE YOU</span>
        </div>

        <div className="program-categories">
          {programsData.map((program)=>(
            <div className="category">
              {program.image}
              <span>{program.heading}</span>
              <span>{program.details}</span>
            <div className="joinnow">
              <span>Join Now</span>
              <img width={15} src={RightArrow} alt="" />
            </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Programs
