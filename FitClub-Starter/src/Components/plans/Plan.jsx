import React from 'react'
import './plan.css'
import {plansData} from '../../data/plansData'
import whitetick from '../../assets/whiteTick.png'
import RightArrow from '../../assets/rightArrow.png'

const Plan = () => {
  return (
   <div className="plans">
    <div className='blur blur-p1'></div>
    <div className='blur blur-p2'></div>
    <div className="planheader">
        <span className='stroke-text'>READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className='stroke-text'>NOW WITHUS</span>
    </div>

    <div className="plancard">
        {plansData.map((plan)=>(
            <div className="plan">
                 {plan.icon}
                <span>{plan.name}</span>
                <span>{'$'+plan.price}</span>
                <div className='features'>
                    {plan.features.map((feature,i)=>(
                        <div className="feature">
                            <img width={15} src={whitetick} alt="" />
                            <span key={i}>{feature}</span>
                        </div>
                    ))}
                </div>

                <div className='benefits'>
                    <span>See more benefit</span>
                    <img height={15} width={15} src={RightArrow} alt="" />
                </div>
                <button className='joinnow'>Join Now</button>

            </div>

        ))}

    </div>
   </div>
  )
}

export default Plan
