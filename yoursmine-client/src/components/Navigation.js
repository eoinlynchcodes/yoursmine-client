import React from 'react';
import { useHistory } from 'react-router-dom';
import '../components/components.css';

export const Navigation = () => {

    const history = useHistory();

    const goHome = () => {
        history.push('/')
    };

    const register = () => {
        history.push('/register')
    };
    
    const howitworks = () => {
        history.push('howitworks')
    };

    return (
        <div>
            <nav>
                <h3 onClick={event => howitworks(event)}>How It Works</h3>
                <h3 onClick={event => goHome(event)}>Yours-Mine</h3>
                <h3 className="sell-clothes-nav-button" onClick={event => register(event)}>Sell Your Clothes</h3>
            </nav>
        </div>
    )
}