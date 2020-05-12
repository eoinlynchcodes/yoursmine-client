import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Register } from "./components/Register";
import { Navigation } from "./components/Navigation";
import { Login } from "./components/Login";
// import { SellerDashboard } from './components/SellerDashboard';
import { Marketplace } from './components/Marketplace';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <Navigation />
          <h3>Yo. Welcome to the HomePage of the ClothesStore</h3>
        </Route>

        <Route exact path="/register">
          <Navigation />
          <Register />
        </Route>

        <Route exact path="/login">
          <Navigation />
          <Login />
        </Route>

        {/* <Route exact path='/sellerDashboard'>
          <SellerDashboard/>
        </Route> */}

        <Route exact path='/marketplace'>
          <Marketplace/>
        </Route>

      </Router>
    </div>
  );
}

export default App;
