import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <NavLink exact to="/dogs">
        Dogs
      </NavLink>
    </>
  );
};

export default Nav;
