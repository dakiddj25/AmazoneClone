import React from 'react'
import './checkoutItems.css'
import { useSelector, useDispatch } from "react-redux"
import { addToBasket, removeFromBasket, clearBasket } from "./basketSlice"

function CheckoutItems({id, title, price, image, rating}) {
    const  basket = useSelector(state => state.basket);
    const dispatch = useDispatch();

    return (

        <div className='checkoutProduct'>
                
            <img className='checkoutProductImg' src={image}/>
            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>{title}</p>
                <p className='checkoutProduct_price'><small>$</small><strong>{price}</strong></p>
                <div className='checkoutProduct_rating'>
                    {Array(rating).fill().map((_, i)=>(      
                        <p>🌟</p>
                    ))}
                </div> 

                <button onClick = {e => dispatch(removeFromBasket({id}))}>Remove from Basket</button>
                <button onClick = {e => dispatch(clearBasket())}>clear Basket</button>
            </div>
            
        </div>
    )
}

export default CheckoutItems
