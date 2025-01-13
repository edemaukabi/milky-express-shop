import React from 'react';
import { Link } from "react-router-dom";
import Logo from './Logo';
import Cart from './Cart';
import cartIcon from '../../assets/cart-icon.svg'
import logoIcon from  '../../assets/logo-milky.svg'


const Navbar: React.FC = () => {
  return (
    <nav className="container-fluid mx-6 flex items-center justify-between px-4 py-2 bg-white">
      <div className="flex-shrink-0">
        <Logo
          src={logoIcon}
          alt="Milky Express logo"
        />
      </div>

      <div className="flex items-center space-x-6">
        <Link
          to="/"
          className="text-sm sm:text-base hover:font-semibold"
        >
          HOME
        </Link>
        <Link
          to="/orders"
          className="text-sm sm:text-base hover:font-semibold"
        >
          MY ORDER
        </Link>

        <Cart
          itemCount={5}
          cartIcon={cartIcon}
          altText="Shopping Cart"
          onClick={() => console.log('Cart clicked!')}
        />
      </div>
    </nav>
  );
};

export default Navbar;
