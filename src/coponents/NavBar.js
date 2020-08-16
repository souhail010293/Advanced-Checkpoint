import React from "react";

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark d-flex justify-content-center">
      <span className="navbar-brand mb-0 h1">Dashboard</span>
      <ul className="nav nav-tabs  ">
        <li className="nav-item ">
          <a className="nav-link text-light" href="#!">
            Clients
          </a>
        </li>
        <li className="nav-item ">
          <a className="nav-link text-light" href="#!">
            Stats
          </a>
        </li>
        <li className="nav-item  ">
          <a className="nav-link  active" href="#!">
            Products
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;