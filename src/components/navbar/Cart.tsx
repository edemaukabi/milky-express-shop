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
        'flex space-x-1 cursor-pointer hover:font-semibold',
        className
      )}
      onClick={onClick}
    >
      <img
        src={cartIcon}
        alt={altText}
        className="h-10 w-10 object-contain"
      />
      <div className='flex flex-col hover:font-semibold'>
        <span className="text-sm font-medium">Cart</span>
        <span className="text-xs font-medium">
          {itemCount} items
        </span>
      </div>
    </div>
  );
};

export default Cart;
