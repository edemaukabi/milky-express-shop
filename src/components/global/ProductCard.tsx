import React from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: number;
  currency?: string;
  onAddToCart: () => void;
  productId: number; // Add productId to handle the redirection
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  description,
  price,
  currency = "NGN",
  onAddToCart,
  productId,
}) => {
  return (
    <div className="bg-white border rounded-lg p-4 shadow hover:shadow-lg transition">
      <Link to={`/product/${productId}`} className="block">
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h2 className="text-lg text-black font-medium mb-2">{name}</h2>
        <p className="text-customGrayFaint text-sm mb-4 font-sans">{description}</p>
      </Link>
      <div className="flex justify-between items-center">
        <span className="text-black font-bold text-lg">
          {price.toFixed(2)} {currency}
        </span>
        <button
          onClick={onAddToCart}
          className="bg-bloodRed text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
