import React from "react";
import { IoIosArrowBack } from "@react-icons/all-files/io/IoIosArrowBack";
import { Link } from "react-router-dom";
import { useCart } from "../context/AppContext"; // Import the cart context
import CartItem from "../components/cart/CartItem";
// import Checkout from "../components/cart/Checkout";
import { toast } from "react-toastify";

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateCartItemQuantity } = useCart();

  const handleDelete = (id: number) => {
    removeFromCart(id);
    toast.success("Item removed from cart.");
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    updateCartItemQuantity(id, quantity);
    toast.success("Cart updated successfully.");
  };

  // Calculate the total quantity of items in the cart
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6">
        <Link to={"/"}>
          <button className="flex bg-white px-4 py-2 shadow-md font-medium rounded-md mb-6">
            <IoIosArrowBack className="mt-1" />
            <p className="ml-3">Continue Shopping</p>
          </button>
        </Link>

        <h2 className="text-2xl font-semibold text-black mb-4">Cart</h2>
        <p className="text-gray-600 mb-6">
          You have{" "}
          <span className="font-medium text-gray-800">{totalItems}</span> item
          {totalItems !== 1 ? "s" : ""} in your cart.
        </p>

        <div className="space-y-4">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              imageUrl={item.image}
              onDelete={() => handleDelete(item.id)}
              onUpdateQuantity={(newQuantity) =>
                handleUpdateQuantity(item.id, newQuantity)
              }
              id={item.id}
            />
          ))}
        </div>
      </div>

      {/* {cart.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <Checkout
            subTotal={cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
            shipping={10}
            discount={5}
          />
        </div>
      )} */}
    </div>
  );
};

export default CartPage;
