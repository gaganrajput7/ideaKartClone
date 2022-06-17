import React from 'react'


const mainStyle = {
    "height":"60px",
    "display":"flex",
    "justifyContent": "space-between",
    "padding":"0px 50px 0px 50px",
    "background":"rgb(40,116,240)",
    "color":"white",
    "borderRadius":"5px"
    
    
}
const mainChild={
    "display":"flex",
    "justifyContent": "center",
    "gap":"40px",
    "alignItems":"center"
}
const inputBox={
    "width":"400px",
    "height":"25px",
    "borderRadius":"5px",
    "background":"white",
    "padding":"5px",
    "outline":"none"
}
const inputButton={
    "width":"100px",
    "padding":"10px",
    "background":"white",
    "border":"none",
    "borderRadius":"5px"
    

}

export default function NavBar() {
  return (
<>
<div style={mainStyle}>
<div style={mainChild}>
    <h4 style={{"color":"rgb(255,255,0)",fontWeight:"lighter",fontSize:"20px"}}>lDEAKART</h4>
    <div> <input style={inputBox} type="text" placeholder='Search' />
    <button style={inputButton}>Search</button></div>
   
</div>
<div style={mainChild}>
    <p>About</p>
    <p>Contact</p>
    <p>Sing In</p>
    <p>Sing Up</p>
</div>
</div>

</>
  )
}
//Gsv9Kq8eUGdVUBcr
//mongodb+srv://gaganrajput875:<password>@cluster0.ntnneor.mongodb.net/?retryWrites=true&w=majority
