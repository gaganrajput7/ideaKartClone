import React, { useEffect } from "react";
import { useState } from "react";
import "./NavSTyles.css";
// import { AiOutlineMenu } from "react-icons/ai";
// import { GiTireIronCross } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [name, setName] = useState("");
  const [cart, setCart]= useState("");

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("product"))||[]);
  },[cart])
   
  
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = async () => {
    // let res = await fetch(`https://ideakartclone.herokuapp.com/products/search/${name}`)
    // let data = await res.json()
  };
  return (
    <>
      <div className="mainClass">
        {/* <div><input type="checkbox" id='check' />
    <label htmlFor="check">
    
<GiTireIronCross id='cancel'/>
    </label>
    </div> */}

        <div className="mainChild">
          <Link to="/">
            <h4
              style={{
                color: "rgb(255,255,0)",
                fontWeight: "lighter",
                fontSize: "20px",
                cursor: "pointer",
                marginTop:"10px"
              }}
            >
              IDEAKART
            </h4>
          </Link>

          <div className="inputBtn">
            <input
              className="searchInput"
              type="text"
              placeholder="Search"
              onChange={handleChange}
            />
            <button className="searchButton" onClick={handleClick}>
              Search
            </button>
          </div>
        </div>
        <div className="mainChild">
          <Link to="/about" className="linkStyle">
            About
          </Link>
          <Link to="/contact" className="linkStyle">
            Contact
          </Link>
          <Link to="/singin" className="linkStyle">
            Sign In
          </Link>
          <Link to="/singup" className="linkStyle">
            Sign Up
          </Link>
          <Link to="/cart">
          <div>
            <p
              style={{
                width: "20px",
                height: "20px",
                background: "pink",
                borderRadius: "50%",
                position: "absolute",
                right:"40px",
                top:"0px",
                color:"black",
                display:"flex",
                alignItems:"center",
                justifyContent:"center"
                
              }}
            >{cart.length}</p>
            <AiOutlineShoppingCart style={{ fontSize: "30px",color:"coral" }} />
          </div>
          </Link>
        </div>
      </div>
    </>
  );
}
