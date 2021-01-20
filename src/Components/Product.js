import React from 'react'
import  './Product.css'
import { useSelector, useDispatch } from "react-redux"
import { addToBasket, decrement } from "./basketSlice"


function Product({ id, title, price, image, rating }) {
    const  basket = useSelector(state => state.basket);
    const dispatch = useDispatch();

    return (
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className='product_rating'>
                    {Array(rating).fill().map((_, i)=>(      
                        <p>🌟</p>
                    ))}
                    

                </div>          
            </div>
            <img src ={image}/>
                    <button onClick={e => dispatch(addToBasket({
                        id,
                        title,
                        price,
                        image, 
                        rating
                    
                    }))}> Add To Basket</button>
            
        </div>
    )
}

export default Product
