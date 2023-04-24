import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div>
        <div className='heading'>
        <h4>--Contact Us</h4>
      </div>
<div className='contact-us'>
  <div className='contact-left'>
    <h3>Let's have a talk</h3>
    <input type='text' placeholder='Full Name'/>
    <input type='text' placeholder='Email Id'/>
    <input type='text' placeholder='Company'/>
    <input type='text' placeholder='Contct No.'/>
    <textarea placeholder='Messaeges'/>
<button>Submit</button>
  </div>
  <div className='contact-right'>
    <h4>I can Help you with</h4>
 <h5>Branding & Strategy</h5>
 <p>How do your customers see you? How do you see yourself? We’re experts in deftly focusing, aligning and advancing those perceptions.</p>
 <h5>Web & Interactive Design</h5>
 <p>The most impressive websites and app experiences are rooted in smart design, embody clear vision, and are backed by the right technology.</p>

<h5>Application Development</h5>
<p>Best-in-class digital projects require technology that perfectly supports the design. We rely on the right tools for the job, not a one-size-fits-all tech stack.</p>

 </div>
</div>
    </div>
  )
}

export default Contact
