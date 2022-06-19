import React from "react";
import { Link } from "react-router-dom";
import styles from "./card.module.css";
import {useNavigate} from "react-router-dom";
import Productdetail from "./Productdetail";

function Card(props) {
 const navigate=useNavigate();
  const row = props.row;

  
  const handleData=()=>{

    localStorage.setItem("productData",JSON.stringify(row));
    navigate("/productdetail")
  }
  const handleCart=()=>{
    var cartData = JSON.parse(localStorage.getItem("product"))||[];
    row.quantity=1;
    cartData.push(row);
    localStorage.setItem("product",JSON.stringify(cartData));
    alert("Item added successfully!");
  }


  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img src={row.image} alt="productImage" />
      </div>

      <div className={styles.cardDetails}>
        <div className={styles.cardName}>{row.name}</div>

        <div className={styles.cardPrice}>{row.price}</div>
        <div className={styles.cardHorizontalLine}></div>

        <div className={styles.cardIcons}>
          <div className={styles.cardCartIcon}>
            <img src="/shopping-cart.png" alt="cartIcon" />
            <a onClick={handleCart}>Add To Cart</a>
          </div>
          <div className={styles.cardVerticalLine}></div>
          <div className={styles.cardBulletIcon}>
            <img src="/bullet-list.png" alt="bulletIcon" />
            <a  onClick={handleData}>
              
              More Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
