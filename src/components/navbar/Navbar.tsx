import React from 'react';
import Logo from './Logo';
import Cart from './Cart';
import cartIcon from '../../assets/cart-icon.svg'
import logoIcon from  '../../assets/logo-milky.svg'


const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
      <div className="flex-shrink-0">
        <Logo
          src={logoIcon}
          alt="Milky Express logo"
        />
      </div>

      <div className="flex items-center space-x-6">
        <a
          href="#home"
          className="text-gray-800 text-sm sm:text-base hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          HOME
        </a>
        <a
          href="#my-order"
          className="text-gray-800 text-sm sm:text-base hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          MY ORDER
        </a>

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
