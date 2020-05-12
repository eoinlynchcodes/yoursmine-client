import React from 'react';
import { useHistory } from 'react-router-dom';
import '../components/components.css';

export const Navigation = () => {

    const history = useHistory();

    const goHome = () => {
        history.push('/')
    }

    const register = () => {
        history.push('/register')
    }

    return (
        <div>
            <nav>
                <h3 onClick={event => goHome(event)}>Logo</h3>
                <button onClick={event => register(event)}>Sell Your Clothes</button>
            </nav>
        </div>
    )
}