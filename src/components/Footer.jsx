import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Styles/Footer.css'

export const Footer = () => {
  return (
    <div className='mainDiv1'>
     <p>Get To Know Us</p> 
     <div>
      <Link to="/about">About</Link>
     </div>
     <div>
      <Link to="/contact">Contact</Link>
     </div>
     <div>
      <Link to="/search">Search</Link>
     </div>
     <div>
      <Link to="/privacy">Privacy Policy</Link>
     </div>
     <div>
      <Link to="/refund">Refund Policy</Link>
     </div>
     <div>
      <Link to="/earn">Earn Money Online</Link>
     </div>
     <div>
      <Link to="">QuickBuyer</Link>
     </div>
    </div>
  )
}
