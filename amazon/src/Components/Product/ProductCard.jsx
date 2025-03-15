import React from 'react'
import classes from "./Product.module.css"
// import Product from './Product'
import Link from 'react-router-dom';


function ProductCard({prouct}) {
    const {image, title, id, rating, price}=product;
  return (
    <div className={'${classes.card__container}'}>
        <Link to={}>
            <img src={image} alt="" className={classes.img__container} />

        </Link>
        <div>
            <h3>{title}</h3>
            <div className={classes.rating}>

                {/* {rating} */}
                <Rating value={rating.rate} precision={0.1}/>
                {/* {count} */}
                <small>{rating.count}</small>

            </div>
            <div>
                {/* {price} */}
                <CurrencyFormat amount={price}/>
            </div>
            <button className={classes.button}>
                add to cart
            </button>
        </div>
        
    </div>
  )
}

export default ProductCard