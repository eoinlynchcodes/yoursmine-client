import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';
import { CartContext } from '../../contexts/CartContext';

export const Navigation = () => {

    const cart = useContext(CartContext);

    return (
        <div>
            <nav>
                <NavLink to="/howitworks"><h3>How It Works</h3></NavLink>
                <NavLink to="/" >Yours-Mine</NavLink>
                <div className="dropdown">
                <h3 className="dropbtn">Sell Your Clothes</h3>
                <div className="dropdown-content">
                    <NavLink to="/login">Log In</NavLink>
                    <NavLink to="/signup">Sign Up</NavLink>
                </div>
                </div>
                <NavLink to="/checkout">
                    Cart 
                    <span>{ cart.length }</span>
                    </NavLink>
            </nav>
        </div>
    )
}