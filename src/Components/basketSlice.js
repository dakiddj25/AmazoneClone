import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
    name:'basket',
    initialState:[],
    reducers: {
        addToBasket :(state, action) => { state.push(action.payload) },
        clearBasket: () => [],
        removeFromBasket :(state, action) => { 
            const index = state.basket.findIndex((basketItem)=> {
               return basketItem.id === action.payload.id
            });
            
            let newBasket = [...state.basket];

            if(index >= 0 ){
                newBasket.splice(index,1);
            } else{
                console.warn("cannot remove Product as it is not in the basket")
            }
            return {
                ...state,
                basket: newBasket
            }

            // let basketIndex = state.basket.findIndex((basketItem)=> {
            //     return (basketItem.id) === (action.payload.id)
            // })
            // if(basketIndex >= 0){
            //     state.basket.splice(basketIndex,1);
            // }

        },
    }     
})

    export const basketCount = (basket) => basket?.reduce((amount, item) => item.price + amount, 0)
    

export const {addToBasket, removeFromBasket, clearBasket} = counterSlice.actions;
export default counterSlice.reducer;
