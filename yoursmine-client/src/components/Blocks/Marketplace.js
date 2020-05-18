import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ClothesFrame } from '../Containers/ClothesFrame';
import { ClothesContext } from '../../contexts/ClothesContext';

export const Marketplace = () => {

 const { clothes, addItem } = useContext(ClothesContext);

    return (
        <div>
            <h1>This is the Marketplace</h1>
            { clothes.map((item, key) => {
               return <ClothesFrame item={item} key={key} /> })          
            }
        </div>
    )
}