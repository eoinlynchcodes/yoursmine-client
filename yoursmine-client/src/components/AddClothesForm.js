import React, {useState} from 'react';
import './components.css';

export const AddClothesForm = () => {

const [ clothesItem, setClothesItem ] = useState({
    userID: 2,
    itemType: '',
    brand: '',
    condition: '',
    size: '',
    description: '',
    image: ''
});

const onChange = (event) => {
    setClothesItem({
        ...clothesItem,
        [event.target.name]: event.target.value
    });
}

const submitThis = (event) => {
    event.preventDefault();
    console.log(clothesItem);
    //
}

const fileUploader = (event) => {
    image: event.target.files[0]
} 

    return (
        <div>
            <form onSubmit={event => submitThis(event)}><h1>Add Clothes</h1>
            <label>Item Type:</label>
            <input
            placeholder="Item Type:"
            name="itemType"
            onChange={event => onChange(event)}
            /><br/>

            <label>Brand:</label>
            <input 
            placeholder="Brand:"
            name="brand"
            onChange={event => onChange(event)}
            /><br/>

            <label>Condition:</label>
            <input 
            placeholder="Condition:"
            name="condition"
            onChange={event => onChange(event)}
            /><br/>

            <label>Size:</label>
            <input 
            placeholder="Size:"
            name="size"
            onChange={event => onChange(event)}
            /><br/>

            <label>Description:</label>
            <input 
            placeholder="Description:"
            name="description"
            onChange={event => onChange(event)}
            /><br/>

            <input 
            type="file"
            name="image"
            onChange={event => onChange(event)}
            />
            <br/>

            <button type="submit">Submit</button>
            </form>
        </div>
    )
}