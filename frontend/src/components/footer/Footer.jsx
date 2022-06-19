import React from 'react'
import {Link} from 'react-router-dom'
const mainFooter={
    "marginLeft":"23%"
}
const footerLi={
    "color":"rgb(63,132,197)",
    "margin":"20px 0px 0px 0px",
    "textDecoration": "none",
    "textAlign":"left",
    "marginLeft":"23%"
}
const footerLinks={
    "textDecoration": "none",
    "textAlign":"left"
}

export default function Footer() {
  return (
    <>
      <div style={mainFooter}><h3>Get To Know Us</h3></div>
      <div style={footerLi}>

     <Link to='/about' style={footerLinks}><li >About</li></Link>
     <Link to='/contact' style={footerLinks}><li>Contact</li></Link>
     <Link to='/search' style={footerLinks}><li>Search</li></Link>
     <Link to='/privacy' style={footerLinks}><li>Privacy Policy</li></Link>
     <Link to='/refund' style={footerLinks}><li>Refund Policy</li></Link>
     <Link to='/earn' style={footerLinks}><li>Earn Money Online</li></Link>
     <Link to='/quick' style={footerLinks}> <li>QuickBuyer</li></Link>

    </div>
    </>
 
  )
}