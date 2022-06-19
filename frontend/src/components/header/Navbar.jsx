import React from "react";
import { useState } from "react";
import "./NavSTyles.css";
// import { AiOutlineMenu } from "react-icons/ai";
// import { GiTireIronCross } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [name, setName] = useState("");
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
              }}
            >
              IDEAKART
            </h4>
          </Link>

          <div className="inputBtn">
            <input
              type="text"
              placeholder="Search"
              onChange={handleChange}
              className="searchInput"
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
            Sing In
          </Link>
          <Link to="/singup" className="linkStyle">
            Sing Up
          </Link>
          <div>
            {/* <p
              style={{
                width: "20px",
                height: "20px",
                background: "pink",
                borderRadius: "50%",
                position: "absolute",
                right:"40px",
                top:"-10px",
                color:"black",
                display:"flex",
                alignItems:"center",
                justifyContent:"center"
                
              }}
            >0</p> */}
            <AiOutlineShoppingCart style={{ fontSize: "30px" }} />
          </div>
        </div>
      </div>
    </>
  );
}
