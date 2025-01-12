import React from 'react';
import classNames from 'classnames';

interface CartProps {
  itemCount: number;
  cartIcon: string;
  altText?: string;
  onClick?: () => void;
  className?: string;
}

const Cart: React.FC<CartProps> = ({
  itemCount,
  cartIcon,
  altText = 'Cart Icon',
  onClick,
  className,
}) => {
  return (
    <div
      className={classNames(
        'flex items-center space-x-2 cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      <img
        src={cartIcon}
        alt={altText}
        className="h-6 w-6 object-contain"
      />

      <span className="text-lg font-medium text-gray-800">Cart</span>
      <span className="bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
        {itemCount}
      </span>
    </div>
  );
};

export default Cart;
