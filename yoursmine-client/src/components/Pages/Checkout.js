import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { CartItemFrame } from '../Containers/CartItemFrame';
import { DeliveryAddress } from '../Forms/DeliveryAddress';

export const Checkout = () => {

    const cart = useContext(CartContext);
    console.log(cart);

    return (
        <div>
            
        <h1>Order Overview</h1>
            {
                cart.map((item, key) => {
                    return <CartItemFrame item={item} key={key} />
                })
            } 
            { cart.length ?  <DeliveryAddress/> : null }
        </div>
    )
}