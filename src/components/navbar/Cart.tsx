import React from "react";
import classNames from "classnames";
import { useCart } from "../../context/AppContext";

interface CartProps {
  cartIcon: string;
  altText?: string;
  onClick?: () => void;
  className?: string;
}

const Cart: React.FC<CartProps> = ({
  cartIcon,
  altText = "Cart Icon",
  onClick,
  className,
}) => {
  const { totalItems } = useCart();

  return (
    <div
      className={classNames(
        "flex space-x-1 cursor-pointer hover:font-semibold",
        className
      )}
      onClick={onClick}
    >
      <img
        src={cartIcon}
        alt={altText}
        className="h-10 w-10 object-contain"
      />
      <div className="flex flex-col hover:font-semibold">
        <span className="text-sm font-medium">Cart</span>
        <span className="text-xs font-medium">
          {totalItems} {totalItems === 1 ? "item" : "items"}
        </span>
      </div>
    </div>
  );
};

export default Cart;
