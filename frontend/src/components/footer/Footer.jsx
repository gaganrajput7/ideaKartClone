import React from 'react'
import {Link} from 'react-router-dom'
const mainFooter={
    "margin":"50px"
}
const footerLi={
    "color":"rgb(63,132,197)",
    "margin":"10px 0px 0px 0px",
    "textDecoration": "none",
}
const footerLinks={
    "textDecoration": "none",
}

export default function Footer() {
  return (
    <div style={mainFooter}><h34>Get To Know Us</h34>
    <div style={footerLi}>
     <Link to='/about' style={footerLinks}> <li >About</li></Link>
     <Link to='/about' style={footerLinks}> <li>Contact</li></Link>
     <Link to='/about' style={footerLinks}> <li>Search</li></Link>
     <Link to='/about' style={footerLinks}>   <li>Privacy Policy</li></Link>
     <Link to='/about' style={footerLinks}> <li>Refund Policy</li></Link>
     <Link to='/about' style={footerLinks}> 
                <li>Earn Money Online</li></Link>
     <Link to='/about' style={footerLinks}>  <li>QuickBuyer</li></Link>
   
   
   
 
   
  
    </div>
 
    </div>
  )
}