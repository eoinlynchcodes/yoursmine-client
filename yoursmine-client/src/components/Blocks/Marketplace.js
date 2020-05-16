import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Marketplace = () => {

    const [ clothes, setClothes ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3333/api/clothes/allClothes')
        .then(res => {
            setClothes(res.data);
            console.log(res.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    return (
        <div>
            <h1>This is the Marketplace</h1>
            {
                console.log(clothes)
            }
            {/* {
                clothes.map
            } */}
        </div>
    )
}