import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
 <footer className="footer">
  <h1>Divyanshu Dhakar</h1>
  <ul className="footermenu">
    <li>
      {" "}
      <a href="#">Home</a>{" "}
    </li>
    <li>
      {" "}
      <a href="#">Work</a>{" "}
    </li>
    <li>
      {" "}
      <a href="#">Services</a>{" "}
    </li>
    <li>
      {" "}
      <a href="#">Contact</a>{" "}
    </li>
  </ul>
  <div className="footerbottom">
    <ul className="footericons">
      {/* In order to use these icons paste   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"> in html <head> tag. */}
      <li>
        {" "}
        <a href="#">
          <i className="fa-brands fa-instagram color-white" />
        </a>{" "}
      </li>
      <li>
        {" "}
        <a href="#">
          <i className="fa-brands fa-facebook color-white" />
        </a>{" "}
      </li>
      <li>
        {" "}
        <a href="#">
          <i className="fa-brands fa-twitter color-white" />
        </a>{" "}
      </li>
      <li>
        {" "}
        <a href="#">
          <i className="fa-brands fa-linkedin color-white" />
        </a>{" "}
      </li>
    </ul>
    <p>© All rights reserved</p>
  </div>
</footer>

    </div>
  )
}

export default Footer
