import React from "react";

// import { AiOutlineMenu } from "react-icons/ai";
// import { GiTireIronCross } from "react-icons/gi";
import { Link } from "react-router-dom";
const mainStyle = {
  height: "60px",
  display: "flex",
  justifyContent: "space-between",
  padding: "0px 50px 0px 50px",
  background: "rgb(40,116,240)",
  color: "white",
  borderRadius: "5px",
};
const mainChild = {
  display: "flex",
  justifyContent: "center",
  gap: "40px",
  alignItems: "center",
};
const inputBox = {
  width: "400px",
  height: "25px",
  borderRadius: "5px",
  background: "white",
  padding: "5px",

  outline: "none",
};
const inputButton = {
  width: "100px",
  padding: "10px",
  background: "white",

  borderRadius: "5px",
};
const linksStyle = {
  textDecoration: "none",
  color: "white",
};

export default function NavBar() {
  return (
    <>
      <div style={mainStyle}>
        {/* <div><input type="checkbox" id='check' />
    <label htmlFor="check">
    <AiOutlineMenu id='btn'/>
<GiTireIronCross id='cancel'/>
    </label>
    </div> */}

        <div style={mainChild}>
          <Link to="/">
            <h4
              style={{
                color: "rgb(255,255,0)",
                fontWeight: "lighter",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              lDEAKART
            </h4>
          </Link>

          <div>
            {" "}
            <input style={inputBox} type="text" placeholder="Search" />
            <button style={inputButton}>Search</button>
          </div>
        </div>
        <div style={mainChild}>
          <Link to="/about" style={linksStyle}>
            About
          </Link>
          <Link to="/contact" style={linksStyle}>
            Contact
          </Link>
          <Link to="/singin" style={linksStyle}>
            Sing In
          </Link>
          <Link to="/singup" style={linksStyle}>
            Sing Up
          </Link>
        </div>
      </div>
    </>
  );
}
