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
import { Footer } from './components/Blocks/Footer.js';
import { CartContext } from "./contexts/CartContext";
import { ClothesContext } from "./contexts/ClothesContext";
import { ClothesFrame } from "./components/Containers/ClothesFrame";

function App() {

  console.log(`${process.env.BASE_BACKEND_URL}`);
  
  const [clothes, setClothes] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.BASE_BACKEND_URL}/api/clothes/allClothes`)
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
            <Footer />
          </Route>

          <Route exact path="/signup">
            <Navigation />
            <Register />
            <Footer />
          </Route>

          <Route exact path="/login">
            <Navigation />
            <Login />
            <Footer />
          </Route>

          <Route exact path="/sellerDashboard">
            <SellerDashboard />
            <Footer />
          </Route>

          <Route exact path="/marketplace">
            <Marketplace />
            <ClothesFrame />
            <Footer />
          </Route>

          <Route exact path="/howitworks">
            <Navigation />
            <HowItWorks />
            <Footer />
          </Route>

          <Route exact path="/checkout">
            <Navigation />
            <Checkout />
            <Footer />
          </Route>

        </CartContext.Provider>
      </ClothesContext.Provider>
    </div>
  );
}

export default App;
