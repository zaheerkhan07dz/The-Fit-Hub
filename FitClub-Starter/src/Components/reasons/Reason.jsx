import React from 'react'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'
import './reason.css'

const Reason = () => {
    return (
        <div className="reasons">
            <div className="left-r">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>
            <div className="right-r">
                <span>SOME REASONS</span>
                <div>
                    <span className='stroke-text'>why</span>
                    <span>Choose us</span>
                </div>

                <div className='details-r'>

                <div>
                <img src={tick} alt=""></img> 
                <span>OVER 140+ EXPERT COACHS</span>
                </div>

                <div>
                <img src={tick} alt=""></img> 
                <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                </div>

                <div>
                <img src={tick} alt=""></img> 
                <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                </div>

                <div>
                <img src={tick} alt=""></img> 
                <span>RELIABLE PARTNERS</span>
                </div>
                </div>

                <span style={{
                    color:'gray',
                    fontWeight: '500',
                    fontSize: '1.1rem'
                }}>Our Partners</span>
                <div className="partners">
                    <img height={25} src={nb} alt="" />
                    <img height={25} src={adidas} alt="" />
                    <img  height={25}src={nike} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Reason
