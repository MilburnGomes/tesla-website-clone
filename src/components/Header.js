import React from 'react';
import './Header.css';
import TeslaLogo from '../assets/teslaLogoSmall.svg';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img
          src={TeslaLogo}
          alt="Tesla Logo"
          style={{ height: '50%', width: '100%' }}
        ></img>
      </div>

      <div className="header__center">
        <p>Model S</p>
        <p>Model 3</p>
        <p>Model X</p>
        <p>Model Y</p>
        <p>Solar Roof</p>
        <p>Solar Panels</p>
      </div>

      <div className="header__right">
        <p>Shop</p>
        <p>Tesla Account</p>
        <p>
          <MenuIcon />
        </p>
      </div>
    </div>
  );
}

export default Header;
