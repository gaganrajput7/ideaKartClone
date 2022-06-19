import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./footerPages/pages/About";
import Search from "./footerPages/pages/Search";
import { Contact } from "./footerPages/pages/Contact";
import Main from "./Home/Main";
import Signin from "./SingIN/SingIn";
import Signup from "./Singup/Singup";
import Productdetail from "./Home/Productdetail";
import { Privacy } from "./footerPages/pages/Privacy";  
import { Checkout } from "./cart/Checkout";
import Earn from "./footerPages/pages/Earn";
import { Refund } from "./footerPages/pages/Refund";
import { Quick } from "./footerPages/pages/Quick";
import Cart from "./cart/Cart";

export default function MinRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/singin" element={<Signin />} />
        <Route path="/singup" element={<Signup />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/Earn" element={<Earn />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/refund" element={<Quick />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/productdetail" element={<Productdetail />} />
      </Routes>
    </>
  );
}
