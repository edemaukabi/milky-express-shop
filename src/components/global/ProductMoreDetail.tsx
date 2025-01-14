import React, { useState } from "react";
import { useCart } from "../../context/AppContext";
import { toast } from "react-toastify";

interface ProductMoreDetailProps {
  id: number;
  name: string;
  price: number;
  currency?: string;
  description: string;
  image: string;
  flavors: string[];
  flavorText?: string;
}

const ProductMoreDetail: React.FC<ProductMoreDetailProps> = ({
  id,
  name,
  price,
  image,
  currency = "NGN",
  description,
  flavors,
  flavorText,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedFlavor, setSelectedFlavor] = useState("");

  const { addToCart } = useCart();

  const handleIncrement = () => setQuantity((prev) => prev + 1);

  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price,
      image,
      quantity,
    });
    toast.success(`${quantity} ${name} added to cart.`);
  };

  return (
    <div className="p-6 bg-white max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-black mb-2">{name}</h1>

      <p className="text-xl text-black font-medium mb-4">
        {price.toFixed(2)} {currency}
      </p>

      <p className="text-gray-600 text-sm mb-6">{description}</p>

      <div className="mb-6 text-xs text-bloodRed font-medium">
        <select
          id="flavor"
          value={selectedFlavor}
          onChange={(e) => setSelectedFlavor(e.target.value)}
          className="w-2/5 bg-white border-2 px-2 py-1 border-bloodRed rounded-md focus:outline-none focus:ring focus:ring-red-300"
        >
          <option value="">{flavorText || "Choose a flavour"}</option>
          {flavors.map((flavor, index) => (
            <option key={index} value={flavor}>
              {flavor}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={handleAddToCart}
          className="bg-bloodRed text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Add to Cart
        </button>
        <div className="flex items-center">
          <button
            onClick={handleDecrement}
            className="px-3 py-1 bg-white text-gray-700 rounded-l-md"
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
            className="px-3 py-1 bg-white text-gray-700 rounded-r-md"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductMoreDetail;
