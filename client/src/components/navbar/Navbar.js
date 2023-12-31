import React from "react";
import "./navbar.css";

function NavBar() {
  return (
    <header className="d-flex flex-row align-items-center justify-content-center p-3 px-4 mb-3 bg-white border-bottom fixed-top shadow-sm">
      <nav className="my-2 text-uppercase fs-4">
        <a className="p-2 navbar-link">Home</a>
        <a className="p-2 navbar-link">Sing up</a>
        <a className="p-2 navbar-link">Browse shop</a>
      </nav>
    </header>
  );
}

export { NavBar };
