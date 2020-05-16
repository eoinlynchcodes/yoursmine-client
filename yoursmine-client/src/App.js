import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Register } from "./components/Forms/Register";
import { Navigation } from "./components/Blocks/Navigation";
import { Login } from "./components/Forms/Login";
import { SellerDashboard } from './components/Blocks/SellerDashboard';
import { Marketplace } from './components/Blocks/Marketplace';
import { HowItWorks } from "./components/Blocks/HowItWorks";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <Navigation />
          <h3>Yo. Welcome to the HomePage of the ClothesStore</h3>
          <Marketplace/>
        </Route>

        <Route exact path="/register">
          <Navigation />
          <Register />
        </Route>

        <Route exact path="/login">
          <Navigation />
          <Login />
        </Route>

        <Route exact path='/sellerDashboard'>
          <SellerDashboard/>
        </Route>

        <Route exact path='/marketplace'>
          <Marketplace/>
        </Route>

        <Route exact path='/howitworks'>
          <Navigation/>
          <HowItWorks/>
        </Route>

      </Router>
    </div>
  );
}

export default App;
