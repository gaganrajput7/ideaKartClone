import React from "react";
import { Link } from "react-router-dom";
import styles from "./card.module.css";
import {useNavigate} from "react-router-dom";
import Productdetail from "./Productdetail";

function Card(props) {
 const navigate=useNavigate();
  const row = props.row;
  // console.log(row);

  
  const handleData=()=>{

    localStorage.setItem("productData",JSON.stringify(row));
    navigate("/productdetail")
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
            <a onClick={handleData}>View Now</a>
          </div>
          <div className={styles.cardVerticalLine}></div>
          <div className={styles.cardBulletIcon}>
            <img src="/bullet-list.png" alt="bulletIcon" />
            <a a href="#">
              
              More Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
