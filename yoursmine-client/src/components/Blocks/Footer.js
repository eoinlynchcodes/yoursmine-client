import React from "react";
import './footer.css';
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="navList">
        <NavLink className="navLink" to="/howitworks">How It Works</NavLink>
        <NavLink className="navLink" to="/investors">Investors</NavLink>
        <NavLink className="navLink" to="/legal">Legal</NavLink>
      </div>
      <div>
          <form>
              <input 
              placeholder="Name:"
              type="text"
              />
              <input 
              placeholder="Email:"
              type="text"
              />

              <input 
              placeholder="Subject"
              type="text"
              />

              <input 
              placeholder="Message"
              type="text"
              />

              <button>Send Message</button>
          </form>
      </div>
    </footer>
  );
};
