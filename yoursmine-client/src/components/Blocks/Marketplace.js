import React, { useState, useEffect, useContext } from "react";
import './Marketplace.css'
import { ClothesFrame } from "../Containers/ClothesFrame";
import { ClothesContext } from "../../contexts/ClothesContext";

export const Marketplace = (props) => {
  const { clothes, addItem } = useContext(ClothesContext);

  return (
    <div>
      <h1>This is the Marketplace</h1>
      <div className="main-clothes-container">
      {clothes.map((item, key) => {
          return <ClothesFrame item={item} key={key} addItem={addItem} />;
        })}
      </div>
    </div>
  );
};
