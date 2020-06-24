import React, { useContext } from 'react';
import '../components.css';

export const ClothesFrame = ( propsFromMarketPlace ) => {

    // item comes from Marketplace where a map function runs through the array.
    const item = propsFromMarketPlace.item;
    
    return (
        <div className="clothesFrameSurround">
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

            {/* <h4> { item.image } </h4> */}
            <p>Size:</p>
            <h4> { item.size } </h4>
            <button 
            onClick={() => propsFromMarketPlace.addItem(propsFromMarketPlace.item) }
            >Add to Basket</button>
            <br/><br/>
        </div>
    );
}