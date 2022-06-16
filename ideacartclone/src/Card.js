import React from 'react';

import styles from './card.module.css'

function Card(props) {
    const row = props.row;
    return (
        <div className={styles.card}>


            <div className={styles.cardImg}>
                <img src={row.image} alt="productImage" />


            </div>

            <div className={styles.cardDescription}>

                {row.discription.substring(0, 50)}

            </div>

            <div className={styles.cardPrice}>
                {row.price}
            </div>
            <div className={styles.cardIcons}>

                <div className={styles.cardCartIcon}><img src="/shopping-cart.png" alt="cartIcon" /></div>
                <div className={styles.cardBulletIcon}><img src="/bullet-list.png" alt="bulletIcon" /></div>
            </div>




        </div>
    )
}

export default Card