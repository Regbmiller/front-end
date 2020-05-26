import React from "react";
import { NavLink } from "react-router-dom";

import "./DashNavStylz.css";

// import SearchBar from "./SearchBar";

function DashNavBar() {
  return (
    <div className="App">
      <header>
        <ul className="navbar">
          {/* <li>
            <NavLink exact to="/signin" activeClassName="activeNavButton">
              Sign IN
            </NavLink>
          </li> */}
          <li>
            <NavLink exact to="/" activeClassName="activeNavButton">
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/instructor" activeClassName="activeNavButton">
              Sensei
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/instructor/classes" activeClassName="activeNavButton">
              Classes
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/" activeClassName="activeNavButton">
              Log Out
            </NavLink>
          </li>
          {/* <SearchBar /> */}
        </ul>
      </header>
    </div>
  );
}

export default DashNavBar;