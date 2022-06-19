import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Card from "./Card";
import styles from "../Home/main.module.css";


const Productdetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const data=JSON.parse(localStorage.getItem('productData'));
  console.log(data);
  // console.log(data.discription[0]);

  const handleCart=()=>{
    var cartData = JSON.parse(localStorage.getItem("product"))||[];
    data.quantity=1;
    cartData.push(data);
    localStorage.setItem("product",JSON.stringify(cartData));
    alert("Item added successfully!");
  }



  return (
    <div style={{width:"65%",margin:"auto",marginBottom:"10%"}}>
        <div style={{display: 'flex',gap:"20px",marginTop:"1%"}}>
            <div>
             <img src={data.image} alt="" style={{width: '100%', height:"auto"}}/>
            <p>Buy it at <b>best price</b> from here</p>

           {/* buy button here */}
           <span style={{fontSize: '22px'}}><b>Rs{data.price}</b></span>
           <span style={{marginLeft:"25%"}}><button onClick={handleCart} style={{border:"none",borderRadius:"5px",width:"auto", fontSize: '23px',padding: '10px 18px',backgroundColor:"orange",color:"white"}}>Add To Cart</button></span>

            </div>

            <div style={{width:"60%",marginTop: '20px'}}> 

              <div style={{fontSize: '50px'}}>{data.name}</div>
              <div style={{fontSize: '17px',border:"0.25px solid light  gray",marginTop: '10px',backgroundColor: 'whitesmoke',padding:"30px 20px",borderRadius:"10px"}}>{data.discription}</div>

            </div>
        </div>
        
        <img src="/snap.png" alt="snapimage" style={{width:"350px",height:"370px",marginTop:"20px"}}/>
        
          <div>
            <h2>Top Reads</h2>
            <div style={{display:"grid",width:"90%",gridTemplateColumns:"repeat(4,0.5fr)",gap:"35px"}}>
            {data.inerdata.map((row) => (
              <>
                <Card key={row.id} row={row} />
              </>
            ))}
            </div>
          </div>
        


    </div>
    

  );
};

export default Productdetail;