import React from "react";
import { Header, CauseNav, NavLink, NavMenu } from "./NavbarElements";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);


const Navbar = () => {
  return (
    <>
      <Header>
        <CauseNav to="/cause">#btbooks</CauseNav>
        <NavMenu>
          <NavLink to="/">
            <FontAwesomeIcon icon={['fas', 'home']} />
            {' '}Home
          </NavLink>
          <NavLink to="/menu">
            <FontAwesomeIcon icon={['fas', 'coffee']} />
            {' '}Menu
          </NavLink>
          <NavLink to="/events">
            <FontAwesomeIcon icon={['fas', 'music']} />
            {' '}Events
          </NavLink>
          <NavLink to="/about">
            <FontAwesomeIcon icon={['fas', 'info-circle']} />
            {' '}About
          </NavLink>
        </NavMenu>
      </Header>
    </>
  );
};

export default Navbar;
