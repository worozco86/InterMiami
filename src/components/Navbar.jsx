import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-dark d-flex p-0">
        <div className="container-fluid">
          <Link to="/" className="text-decoration-none">
            <div className="navbar-brand d-flex align-items-center">
              <img
                src="src/assets/logo.webp"
                alt="Logo"
                width="140"
                height="120"
              />
              <h1 className="text-white ">
                Inter Miami <span className="text-pink">Shop</span>
              </h1>
            </div>
          </Link>
          <div>
            <Link to="/cart" className="text-decoration-none">🛒</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
