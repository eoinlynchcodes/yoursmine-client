import React, { useState } from "react";
import "../components.css";
import axios from "axios";
import { useHistory } from 'react-router-dom';

export const AddClothesForm = () => {
  const [clothesItem, setClothesItem] = useState({
    userID: 1,
    gender: "",
    price: "",
    brand: "",
    condition: "",
    itemType: "",
    size: "",
    description: "",
    image: "",
  });

  const onChange = (event) => {
    setClothesItem({
      ...clothesItem,
      [event.target.name]: event.target.value,
    });
  };

  const history = useHistory();

  const submitThis = (event) => {
    event.preventDefault();
    debugger
    console.log(clothesItem);
    axios.post('http://localhost:3333/api/clothes/addClothes', clothesItem)
    .then(response => {
        history.push('/sellerdashboard');
    })
    .catch(error => {
        console.log(error);
    })
  };

  return (
    <div>
      <form onSubmit={(event) => submitThis(event)}>
        <h1>Add Clothes</h1>
        <label>Gender:</label>
        <input
          placeholder="Gender:"
          name="gender"
          onChange={(event) => onChange(event)}
        />
        <br />
        <label>Price:</label>
        <input
        placeholder="Price:"
        name="price"
        type="number"
        onChange={(event) => onChange(event)}
        />
        <br/>
        <label>Brand:</label>
        <input
          placeholder="Brand:"
          name="brand"
          onChange={(event) => onChange(event)}
        />
        <br />
        <label>Condition:</label>
        <input
          placeholder="Condition:"
          name="condition"
          onChange={(event) => onChange(event)}
        />
        <br />
        <label>Item Type:</label>
        <input
          placeholder="Item Type:"
          name="itemType"
          onChange={(event) => onChange(event)}
        />
        <br />
        <label>Size:</label>
        <input
          placeholder="Size:"
          name="size"
          onChange={(event) => onChange(event)}
        />
        <br />
        <label>Description:</label>
        <input
          placeholder="Description:"
          name="description"
          onChange={(event) => onChange(event)}
        />
        <br />
        <label>Upload Images:</label>
        <input type="file" name="image" onChange={(event) => onChange(event)} />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
