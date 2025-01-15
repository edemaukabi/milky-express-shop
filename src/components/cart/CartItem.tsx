import React, { useState } from "react";
import { RiDeleteBin6Line } from "@react-icons/all-files/ri/RiDeleteBin6Line";
import { useCart } from "../../context/AppContext";
import { toast } from "react-toastify";

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  quantity,
  imageUrl,
}) => {
  const { removeFromCart, updateCartItemQuantity } = useCart();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleIncrement = () => {
    updateCartItemQuantity(id, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      updateCartItemQuantity(id, quantity - 1);
    } else {
      handleDelete(id);
    }
  };

  const handleDelete = (id: number) => {
    removeFromCart(id);
    toast.success("Item removed from cart.");
  };

  const truncatedName = isExpanded
    ? name
    : name.split(" ").slice(0, 3).join(" ") + (name.split(" ").length > 3 ? "..." : "");

  return (
    <div className="flex items-center justify-between space-x-4 p-4 bg-white rounded-lg shadow-md mb-4 overflow-hidden">
      <img
        src={imageUrl}
        alt={name}
        className="w-16 h-16 object-contain rounded-md flex-shrink-0"
      />

      <div className="flex flex-col flex-shrink-0 max-w-[150px]">
        <p
          className={`font-medium text-sm mr-2 ${isExpanded ? "break-words" : "truncate"}`}
          style={{
            wordWrap: "break-word",
            maxWidth: isExpanded ? "none" : "150px",
          }}
        >
          {truncatedName}
        </p>
        {name.split(" ").length > 3 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-500 text-xs mt-1"
          >
            {isExpanded ? "See less" : "See more"}
          </button>
        )}
      </div>

      <div className="flex items-center space-x-2 flex-shrink-0">
        <button
          onClick={handleDecrement}
          className="px-2 py-1 bg-white text-gray-700 rounded-md"
        >
          -
        </button>
        <input
          type="number"
          value={quantity}
          readOnly
          className="w-12 text-center border border-gray-300 rounded-md"
        />
        <button
          onClick={handleIncrement}
          className="px-2 py-1 bg-white text-gray-700 rounded-md"
        >
          +
        </button>
      </div>

      <div className="text-sm font-semibold text-black flex-shrink-0">
        N{(price * quantity).toFixed(2)}
      </div>

      <button
        onClick={() => handleDelete(id)}
        className="text-red-500 hover:text-red-700"
      >
        <RiDeleteBin6Line size={20} className="text-bloodRed" />
      </button>
    </div>
  );
};

export default CartItem;
