import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-dark d-flex p-0">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="src/assets/logo.webp"
              alt="Logo"
              width="140"
              height="120"
            />
            <h1 className="text-white">
              Inter Miami <span className="text-pink">Shop</span>
            </h1>
          </a>
          <div>🛒</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
