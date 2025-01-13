import React from 'react';
import { IoIosArrowBack } from "@react-icons/all-files/io/IoIosArrowBack";
import { Link } from 'react-router-dom'
import CartItem from "../components/cart/CartItem"
import Checkout from "../components/cart/Checkout"
import milkyImage from "../assets/cookies2.svg"

const CartPage: React.FC = () => {
  const itemsInCart = [
    { id: 1, name: 'Milky Cookies', price: 20.0, quantity: 2, image: milkyImage },
    { id: 2, name: 'Milky Enrich', price: 50.0, quantity: 1, image: milkyImage },
  ];

  return (
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6">
        <Link
            to={'/'}
        >
            <button className="flex bg-white px-4 py-2 shadow-md font-medium rounded-md  mb-6">
            <IoIosArrowBack className='mt-1'></IoIosArrowBack><p className='ml-3'>Continue Shopping</p>
            </button>
        </Link>
        
        <h2 className="text-2xl font-semibold text-black mb-4">Cart</h2>
        <p className="text-gray-600 mb-6">
          You have <span className="font-medium text-gray-800">{itemsInCart.length}</span> items in your cart.
        </p>
        
        <div className="space-y-4">
          {itemsInCart.map(item => (
            <CartItem
              key={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              imageUrl={item.image}
              onDelete={()=> console.log("deleted")}
              onUpdateQuantity={() => console.log("updated")}
              id={item.id}
            />
          ))}
        </div>
      </div>

      {/* <div className="bg-white shadow-lg rounded-lg p-6">
        <Checkout subTotal={90} shipping={10} discount={5} />
      </div> */}
    </div>
  );
};

export default CartPage;
