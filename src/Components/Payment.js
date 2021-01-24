import React from 'react'
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import CheckoutItems from "./CheckoutItems";
import './payment.css'


function Payment() {
    const  user = useSelector(state => state.currentUser);
    const basket = useSelector(state => state.basket);

    return (
        <div className='payment'>
            <div className='payment_container' >
                <h1>
                Checkout ({<Link to='/'>{basket?.length} Items</Link>})
                </h1>

                <div className='payment_section'>
                    <div className='payment_title' >
                        <h3>Deliver Address</h3>
                    </div>
                    <div className='payment_address' >
                        <p>{user?.email}</p>
                        <p>123 lincoln Pl</p>
                        <p>Brooklyn, Ny </p>
                    </div>
                </div>

                <div className='payment_section'>
                <div className='payment_title' >
                        <h3>Review Items & Delivery</h3>
                    </div>
                    <div className='payment_items' >    
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

                <div className='payment_section'>
                <div className='payment_title' >
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment_details' >    
                       
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Payment
