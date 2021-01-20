import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useSelector, useDispatch } from "react-redux"
import { addToBasket, decrement } from "./basketSlice"
import CheckoutItems from './CheckoutItems'

function Checkout() {
    const basket = useSelector(state => state.basket);
    const dispatch = useDispatch();
    

    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img className='checkout_ad' 
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"/>
                    
                <div >
                    <h2 className='checkout_title'> Your Shopping Basket</h2>
                   
                    {basket.map(item => {
                       return <CheckoutItems 
                            id={item.id} 
                            title={item.title}
                            price={item.price} 
                            image ={item.image}
                            rating = {item.rating}
                        />
                        
                    })}
                </div>
            </div>

        <div className='checkout_right'>
           <Subtotal/>

        </div>

            
        </div>
    )
}

export default Checkout
