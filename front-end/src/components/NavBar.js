import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <div className="App">
      <header>
        <ul className="navbar">
          <li>
            <NavLink exact to="/" activeClassName="activeNavButton">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/instructor/" activeClassName="activeNavButton">
              Add Article
            </NavLink>
          </li>
          <li>
            <NavLink to="/student/" activeClassName="activeNavButton">
              View Articles
            </NavLink>
          </li>
          <SearchBar />
        </ul>
      </header>
    </div>
  );
}

export default NavBar;