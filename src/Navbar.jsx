import React from "react";
import ParentComponent from "./ParentComponent";
import Card from "./Card";

function Navbar({setCart}) {
  
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ margin: 0 }}
      >
        <div className="container-fluid">
          <a className="navbar-brand navbar-brand mb-0 h1" href="#">
            All
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active navbar-brand mb-0 h1 "
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar-brand mb-0 h1 " href="#">
                  Men
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar-brand mb-0 h1" href="#">
                  Women
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar-brand mb-0 h1" href="#">
                  Kids
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle navbar-brand mb-0 h1"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Best Seller{" "}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Discounts
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Amazing Offers
                    </a>
                  </li>
                </ul>
              </li>
              
              <div className="cart" >
          <span className="cart-img">🛒</span>
          <span>Cart </span>
         
          <span className="count">0{setCart}</span>
        </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
