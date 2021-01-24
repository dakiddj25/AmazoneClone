import React from 'react'
import  CurrencyFormat  from 'react-currency-format'
import { useSelector, useDispatch } from "react-redux"
import { basketCount } from './basketSlice'
import './subtotal.css'
import { useHistory } from 'react-router-dom';

function Subtotal() {
    const  basket = useSelector(state => state.basket);
    const history = useHistory();

    return (
        <div className ='subtotal'>
            <CurrencyFormat
            renderText={(value) => (
                <>
                <p>
                    Subtotal ({basket?.length} items): <strong>{value}</strong>
                </p>
                <small className='subtotal_gift'>
                    <input type='checkbox'/>This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={basketCount(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
            
            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
