import React from 'react'
import './Footer.css'
import logo from '/Dhyanlogo.svg'


const Footer = () => {
  return (

    <div className='footer'>
        <hr/>
            <div className="footer-details">
                <img src={logo} alt="logo" />
                <p>© 2024 - Dhyan Bhashitha. All rights reserved.</p>
            </div>
    </div>
  )
}

export default Footer
