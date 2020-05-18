import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { Register } from "./components/Forms/Register";
import { Navigation } from "./components/Blocks/LoggedOutNav";
import { Login } from "./components/Forms/Login";
import { SellerDashboard } from "./components/Blocks/SellerDashboard";
import { Marketplace } from "./components/Blocks/Marketplace";
import { HowItWorks } from "./components/Blocks/HowItWorks";
import { Checkout } from "./components/Pages/Checkout";

import { CartContext } from "./contexts/CartContext";
import { ClothesContext } from "./contexts/ClothesContext";
import { ClothesFrame } from "./components/Containers/ClothesFrame";

function App() {
  const [clothes, setClothes] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3333/api/clothes/allClothes")
      .then((res) => {
        setClothes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [cart, setCart] = useState([]);
  const addItem = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <ClothesContext.Provider value={{ clothes, addItem }}>
        <CartContext.Provider value={cart}>
          <Route exact path="/">
            <Navigation />
            <h3>Yo. Welcome to the HomePage of the ClothesStore</h3>
            <Marketplace />
          </Route>

          <Route exact path="/signup">
            <Navigation />
            <Register />
          </Route>

          <Route exact path="/login">
            <Navigation />
            <Login />
          </Route>

          <Route exact path="/sellerDashboard">
            <SellerDashboard />
          </Route>

          <Route exact path="/marketplace">
            <Marketplace />
            <ClothesFrame />
          </Route>

          <Route exact path="/howitworks">
            <Navigation />
            <HowItWorks />
          </Route>

          <Route exact path="/checkout">
            <Checkout />
          </Route>
        </CartContext.Provider>
      </ClothesContext.Provider>
    </div>
  );
}

export default App;
