import React from 'react';
import { useHistory } from 'react-router-dom';
import './navigation.css';

export const Navigation = () => {

    const history = useHistory();

    const goHome = () => {
        history.push('/')
    };

    const register = () => {
        history.push('/register')
    };
    
    const howitworks = () => {
        history.push('/howitworks')
    };

    const login = () => {
        history.push('/login');
    };

    return (
        <div>
            <nav>
                <h3 onClick={event => howitworks(event)}>How It Works</h3>
                <h3 onClick={event => goHome(event)}>Yours-Mine</h3>
                <div className="dropdown">
                <h3 className="dropbtn">Sell Your Clothes</h3>
                <div className="dropdown-content">
                <h3 onClick={event => login(event)} >LogIn</h3>                    
                <h3 onClick={event => register(event)} >Sign Up</h3>
                </div>
                </div>
            </nav>
        </div>
    )
}