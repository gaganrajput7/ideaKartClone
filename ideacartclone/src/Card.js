import React from 'react';

import styles from './card.module.css';
import link from 'react-router-dom';

function Card(props) {
    const row = props.row;
    return (
        <div className={styles.card} >


            <div className={styles.cardImg}>
                <img src={row.image} alt="productImage" />


            </div>

            <div className={styles.cardDetails}>


                <div className={styles.Name}>

                    {row.name}

                </div>

                <div className={styles.cardPrice}>
                    {row.price}
                </div>
                <div className={styles.cardHorizontalLine}></div>

                <div className={styles.cardIcons}>

                    <div className={styles.cardCartIcon}><img src="/shopping-cart.png" alt="cartIcon" />< > View Now</></div>
                    <div className={styles.cardVerticalLine}></div>
                    <div className={styles.cardBulletIcon}><img src="/bullet-list.png" alt="bulletIcon" /> <a a href="#" > More Details</a></div>
                </div>

            </div>



        </div>
    )
}
export default Card




