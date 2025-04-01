import React from 'react'
import './footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'
const Foot = () => {
  return (
    <div className="footercontainer">

   <div className="footer">
    <hr />
    <div className="foot">
        <img width={30} src={Github} alt="" />
        <img width={30} src={Instagram} alt="" />
        <img width={30} src={LinkedIn} alt="" />
    </div>
    <div className="logo-f">
        <img width={150} src={logo} alt="" />
    </div>
    <div className="effective">

   <div className='blur-blur-f1'></div>
    <div className= 'blur-blur-f2'></div>
    </div>
    
   </div>
   
    </div>
  )
}

export default Foot
