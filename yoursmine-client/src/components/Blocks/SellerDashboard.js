import React from 'react';
import '../components.css';
import { AddClothesForm } from '../Forms/AddClothesForm';

export const SellerDashboard = () => {


    return (
        <div>
            <nav>
                <h1>YoursMine</h1>
            </nav>
            <h1>THIS IS THE SELLER DASHBOARD COMPONENT</h1>
            <AddClothesForm/>
        </div>
    )
}