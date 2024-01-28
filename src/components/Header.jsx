import React, { useContext, useState } from 'react';
import { Button, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import Context from './contexts/Context';
import SignInModal from './modals/SignInModal';

const Header = () => {
  const { isSignedIn, setIsSignedIn } = useContext(Context);
  const [showSignInModal, setShowSignInModal] = useState(false);

  const toggleSignInModal = () => {
    setShowSignInModal(!showSignInModal);
  };

  return (
    <div id="header">
      <Navbar color="success" dark>
        <NavbarBrand href="/">GoMusic</NavbarBrand>
        <Nav className="fs-5">
          <NavItem>
            <NavLink href="/products" className="text-white">Products</NavLink>
          </NavItem>
          {isSignedIn &&
            <NavItem>
              <NavLink href="/orders" className="text-white">Orders</NavLink>
            </NavItem>
          }
          <NavItem>
            <NavLink href="/about" className="text-white">About</NavLink>
          </NavItem>
        </Nav>
        {isSignedIn ?
          <div className="ms-auto d-flex align-items-center">
            <div className="fs-5 text-white">Welcome, 낯선이여</div>
            <Button color="success" size="lg" onClick={() => setIsSignedIn(false)}>Sign Out</Button>
          </div> :
          <Button className="ms-auto" color="success" size="lg" onClick={toggleSignInModal}>Sign In</Button>
        }

      </Navbar>

      <SignInModal showSignInModal={showSignInModal} toggleSignInModal={toggleSignInModal}/>
    </div>
  );
};

export default Header;