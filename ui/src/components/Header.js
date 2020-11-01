import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Header = (props) => {
  const { toggle } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggled = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">AWS Cognito Portal</NavbarBrand>
        <NavbarToggler onClick={toggled} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink onClick={toggle}>Add New User</NavLink>
            </NavItem>
            
           
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;