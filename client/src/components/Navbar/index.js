import React from "react";
import "./style.css";
import {Link} from "react-router-dom"


function Navbar() {
      return (
  
        <nav className="navbar navbar-expand-md navbar-dark fixed-top" id="mainNav">
          <div className="container" id="nav">
            <Link className="navbar-brand js-scroll-trigger"><img className="chivalry-logo-black" alt="chivalry-logo-black" src="./assets/images/logo.png" /></Link>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/signup">SignUp</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
    export default Navbar;