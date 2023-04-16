import React from 'react'
import './Services.css'
import Branding from "../../Images/Branding.png"
import Development from "../../Images/Development.png"
import WebDesign from "../../Images/web design.png"
const Services = () => {
  return (
    <div>
      <div className='heading'>
        <h4>--Services</h4>
      </div>
      <div className='service-section'>
        <img src={Branding}/>
        <div className='service-content'>
        <h2>Branding & Strategy</h2>
        <p>
        A brand is what you believe in. What you stand for. Whether a new or established business or organization, you can look to us to best articulate who you are, what you do, and most importantly, why any of it matters.
        </p>
        </div>
      </div>
      <div className='service-section'>
        
        <div className='service-content'>
        <h2>Web & Interactive Designs</h2>
        <p>
        We know that exceptional website experiences are a blend of the right message and the right technology. That's why our interactive design approach focuses on usability, accessibility impact, and achieving results. </p>
        </div>
        <img src={WebDesign}/>
      </div>
      <div className='service-section'>
        <img src={Development}/>
        <div className='service-content'>
        <h2>Web & Application Development</h2>
        <p>
        We know that exceptional website experiences are a blend of the right message and the right technology. That's why our interactive design approach focuses on usability, accessibility impact, and achieving results.</p>
        </div>
      </div>
    </div>
  )
}

export default Services
