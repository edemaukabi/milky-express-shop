import React, { useState } from "react";

interface ProductMoreDetailProps {
  name: string;
  price: number;
  currency?: string;
  description: string;
  flavors: string[];
  flavorText?: string;
  onAddToCart: (quantity: number, selectedFlavor: string) => void;
}

const ProductMoreDetail: React.FC<ProductMoreDetailProps> = ({
  name,
  price,
  currency = "NGN",
  description,
  flavors,
  flavorText,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedFlavor, setSelectedFlavor] = useState("");

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    if (selectedFlavor) {
      onAddToCart(quantity, selectedFlavor);
    }
  };

  return (
    <div className="p-6 bg-white max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-black mb-2">{name}</h1>

      <p className="text-xl text-black font-medium mb-4">
        {price.toFixed(2)} {currency || "NGN"}
      </p>

      <p className="text-gray-600 text-sm mb-6">{description}</p>

      <div className="mb-6 text-xs text-bloodRed font-medium">
        <select
          id="flavor"
          value={selectedFlavor}
          onChange={(e) => setSelectedFlavor(e.target.value)}
          className="w-2/5 bg-white border-2 px-2 py-1 border-bloodRed rounded-md focus:outline-none focus:ring focus:ring-red-300"
        >
          <option value="">
          {flavorText || "Choose a flavour"}
          </option>
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
            onClick={handleIncrement}
            className="px-3 py-1 bg-white text-gray-700 rounded-r-md "
          >
            +
          </button>
          <input
            type="number"
            value={quantity}
            readOnly
            className="w-12 text-center border border-gray-30 rounded-md"
          />
          
          <button
            onClick={handleDecrement}
            className="px-3 py-1 bg-white text-gray-700 rounded-l-md"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductMoreDetail;
