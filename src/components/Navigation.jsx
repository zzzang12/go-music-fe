import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const showModalWindow = () => {
    console.log('hi');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
        <div className="container">
          <button type="button" className="navbar-brand order-1 btn btn-success" onClick={() => {
            showModalWindow();
          }}>Sign in
          </button>
          <div className="navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <div className="nav-item nav-link" to="/">Home</div>
              <div className="nav-item nav-link" to="/promotions">promotions</div>
              <div className="nav-item nav-link" to="/about">About</div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;