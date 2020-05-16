import React from 'react';

export const ClothesFrame = (item) => {

    const clothing = item.item;

    return (
        <div>
            <h4> { clothing.brand } </h4>
            <h4> { clothing.condition }</h4>
            <h4> { clothing.description } </h4>
            <h4> { clothing.gender }</h4>
            <h4> { clothing.brand }</h4>
            <h4> { clothing.itemType }</h4>
            <h4> { clothing.brand } </h4>
            <h4> { clothing.image } </h4>
            <h4> { clothing.size } </h4>
            <br/><br/>
        </div>
    );
}