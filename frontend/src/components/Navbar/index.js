import React from 'react';
import { Nav, NavLink, NavMenu } from './NavbarElements';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <Nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Joel's website</span>
        <NavMenu className="navbar-nav me-auto mb-2 mb-lg-0">
          <NavLink
            to="/"
            className="nav-item nav-link"
            activeStyle={{ fontWeight: 'bold' }}
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className="nav-item nav-link"
            activeStyle={{ fontWeight: 'bold' }}
          >
            Movies
          </NavLink>
          <NavLink
            to="/podcast"
            className="nav-item nav-link"
            activeStyle={{ fontWeight: 'bold' }}
          >
            Podcast
          </NavLink>
        </NavMenu>
      </div>
    </Nav>
  );
};

export default Navbar;
