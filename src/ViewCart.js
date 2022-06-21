import React from 'react';
import { useSelector } from 'react-redux';

const ViewCart = ()=>{
    const cartList = useSelector(state => state.products.cartList);
    console.log(cartList,'///')
    return(
        <p>Welcome to viewcart</p>
    )
}

export default ViewCart;