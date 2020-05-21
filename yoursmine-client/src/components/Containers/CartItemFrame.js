import React from 'react';

export const CartItemFrame = (props) => {

const item = props.item;

    return(
        <div>
            <p>Brand:</p>
            <h4> { item.brand } </h4>
            <p>Condition</p>
            <h4> { item.condition }</h4>
            <p>Description</p>
            <h4> { item.description } </h4>
            <p>Gender</p>
            <h4> { item.gender }</h4>
            <p>Brand</p>
            <h4> { item.brand }</h4>
            <p>Item Type:</p>
            <h4> { item.itemType }</h4>
            <h4> { item.image } </h4>
            <p>Size:</p>
            <h4> { item.size } </h4>
        </div>
    )
}