import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

function Navbar() {
  useEffect(() => {
    let sidenav = document.querySelector("#slide-out");
    M.Sidenav.init(sidenav, {});
  }, []);
  return (
    <nav style={{ backgroundColor: "#7785AC" }}>
      <a href="#" data-target="slide-out" class="sidenav-trigger hide-on-large">
        <i class="material-icons">menu</i>
      </a>
      <div className="container">
        <div class="nav-wrapper">
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/about"> About</Link>
            </li>
            <li>
              <Link to="/message"> Contact Us</Link>
            </li>
            <li>
              <Link to="/map"> Map</Link>
            </li>
          </ul>
          <ul id="slide-out" class="sidenav">
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/about"> About</Link>
            </li>
            <li>
              <Link to="/message"> Contact Us</Link>
            </li>
            <li>
              <Link to="/map"> Map</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
