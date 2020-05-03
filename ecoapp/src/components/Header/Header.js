import React from 'react';
import Logo from '../../img/shahrukshop_logo.png';
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <nav>
            <div class="nav-wrapper #263238 blue-grey darken-4">
            <img src={Logo} alt=""/>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="/shop">Shop</a></li>
                <li><a href="/review">Order Review</a></li>
                <li><a href="/manage">Manage Inventory</a></li>
            </ul>
            </div>
        </nav>
      </div>
    );
};

export default Header;