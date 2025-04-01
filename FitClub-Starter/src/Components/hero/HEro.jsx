import React from 'react'
import './HEro.css'
import Header from '../header/Header'
import hero_image from "../../../src/assets/hero_image.png";
import hero_image_back from "../../../src/assets/hero_image_back.png";
import Heart from "../../../src/assets/heart.png";
import Calories from "../../../src/assets/calories.png";

const HEro = () => {
  return (
    <div className="hero">
      <div className='blur blur-h'></div>
        <div className="left-h">
        <Header/>
        <div className="bestad">
          <div></div>
          <span>The Best Fitness Club In Bhopal</span>
        </div>

        {/*Hero heading */}
        <div className="herotext">
          <div>
            <span className='stroke-text'>SHAPE </span>
            <span>YOUR</span>
          </div>  

          <div>
            <span>IDEAL BODY</span>
          </div>

          <div>
            <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
            </div>
          <div>
          </div>
          <div className="figures">
              <div >

              <span>+50</span>
              <span className='figuretext'>EXPERT COACHES</span>

              </div>
              <div>

              <span>+900</span>
              <span className='figuretext'>MEMBERS JOINED</span>

              </div>
              <div>

              <span>+50</span>
              <span className='figuretext'>PROGRAMS</span>

              </div>
          </div>
          
        </div>
        <div className="buttons">
            <button className='button1'>Get Started</button>
            <button className='button2'>Learn More</button>
          </div>

        
        </div>

        <div className="right-h">
          <button>Join Now</button>
          <div className="heart-rate">
            <img width={40} src={Heart} alt="" />
          <span>Heart Rate</span><span>115 BPM</span>
          </div>
          <img className='heroimage' src={hero_image} alt="" />
          <img className='heroimageback' src={hero_image_back} alt="" />

          <div className="calories">
            <img height={90}width={50} src={Calories} alt="" />
            <div className='calorietext'>

            <span>Calories <br /> Burned</span>
           <span> 220  <br />kcal</span>
            </div>

          </div>
        </div>
    </div>
  )
}



export default HEro
