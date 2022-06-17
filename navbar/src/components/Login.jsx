import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [formData, setFormData] = useState({});
  const handleChange=(e)=>{
    const {value,name}=e.target;
    setFormData({
        ...formData,
        [name]:value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
 
    axios
      .post("http://localhost:8080/user/login",formData)
      .then((e) => {
        console.log(e)
      }).catch((errr)=>{console.log(errr)})

   
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id=""
          onChange={handleChange}         
         
        />
        <input
          type="text"
          name="password"
onChange={handleChange}         
        />
        <input type="submit" />
      </form>
    </div>
  );
}
