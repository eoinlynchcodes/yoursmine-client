import React, { useContext } from 'react';
import '../components.css';
import { ClothesContext } from '../../contexts/ClothesContext';

export const ClothesFrame = ( ) => {

    const { clothes, addItem } = useContext(ClothesContext);
    console.log(clothes + 'clothes');

    return (
        <div className="clothesFrameSurround">
            {/* <p>Brand:</p>
            <h4> { clothing.brand } </h4>
            <p>Condition</p>
            <h4> { clothing.condition }</h4>
            <p>Description</p>
            <h4> { clothing.description } </h4>
            <p>Gender</p>
            <h4> { clothing.gender }</h4>
            <p>Brand</p>
            <h4> { clothing.brand }</h4>
            <o>Item Type:</o>
            <h4> { clothing.itemType }</h4>

            <h4> { clothing.image } </h4>
            <p>Size:</p>
            <h4> { clothing.size } </h4>
            <button>Add to Basket</button>
            <br/><br/> */}
        </div>
    );
}