import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

export const Navigation = () => {


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
                    {/* <span>{CartContext.length}</span> */}
                    </NavLink>
            </nav>
        </div>
    )
}