import React, { useState, useContext } from 'react';
import './checkout.css';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { CartItemFrame } from '../Containers/CartItemFrame';

export const Checkout = () => {

    const history = useHistory();

    const cart = useContext(CartContext);

    const [ buyerAddress, setBuyerAddress ] = useState({
        buyerFullName: '',
        buyerAddress: '',
        buyerCity: '',
        buyerCountyOrState: '',
        buyerPostCodeOrZip: '',
        buyerCountry: '',
        buyerEmail: '',
        buyerPhone: ''
    });

    const orderAndSellerData = { ...buyerAddress, ...cart};
    const changeHandler = (event) => {
        setBuyerAddress({
            ...buyerAddress,
            [event.target.name]: event.target.value
        });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        debugger
        console.log(orderAndSellerData);
        history.push('/payment');
    }

    return (
        <div className="container">
            
        <h1>Order Overview</h1>
            {
                cart.map((item, key) => {
                    return <CartItemFrame item={item} key={key} />
                })
            } 
            { cart.length ?              
            <form onSubmit={event => submitHandler(event)}>
                <input 
                placeholder="Full Name:"
                name="buyerFullName"
                onChange={event => changeHandler(event)}
                /><br/>

                <input 
                placeholder="Address:"
                name="buyerAddress"
                onChange={event => changeHandler(event)}
                /><br/>

                <input 
                placeholder="City:"
                name="buyerCity"
                onChange={event => changeHandler(event)}
                /><br/>

                <input 
                placeholder="County or State"
                name="buyerCountyOrState"
                onChange={event => changeHandler(event)}
                /><br/>

                <input 
                placeholder="Postcode or Zipcode"
                name="buyerPostCodeOrZip"
                onChange={event => changeHandler(event)}
                /><br/>

                <input 
                placeholder="Country"
                name="buyerCountry"
                onChange={event => changeHandler(event)}
                /><br/>

                <input 
                placeholder="Email:"
                name="buyerEmail"
                type="email"
                onChange={event => changeHandler(event)}
                /><br/>

                <input 
                placeholder="Phone Number"
                name="buyerPhone"
                type="number"
                onChange={event => changeHandler(event)}
                /><br/>

                {/* <label>Do you want to receive marketing emails?</label>
                <input 
                type="checkbox"
                /><br/> */}

                <button>Checkout</button>
            </form> : <h1>Your Basket is empty m8!</h1> }
        </div>
    )
}