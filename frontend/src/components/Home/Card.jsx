import React from "react";
import { Link } from "react-router-dom";
import styles from "./card.module.css";

function Card(props) {
  const {id}=props.row;
  console.log(id);
  const row = props.row;
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
            <Link to={`/${id}`}> View Now</Link>
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
