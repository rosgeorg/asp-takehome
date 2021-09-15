import React from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

const NavBar = () => {

  return (
    <div>
      <Navbar color="dark" dark expand="md" style={{padding: '10px'}}>
        <NavbarBrand href="/">React Github GraphQL App</NavbarBrand>
      </Navbar>
    </div>
  );
}

export default NavBar;