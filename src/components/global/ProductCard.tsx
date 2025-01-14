import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/AppContext";
import { toast } from "react-toastify";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: number;
  currency?: string;
  productId: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  description,
  price,
  currency = "NGN",
  productId,
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const { addToCart } = useCart();

  const truncateText = (text: string, limit: number, showFull: boolean) =>
    showFull || text.length <= limit
      ? text
      : `${text.slice(0, limit)}...`;

  const handleAddToCart = () => {
    const product = {
      id: productId,
      name,
      price,
      image,
      quantity: 1,
    };

    addToCart(product);
    toast.success(`${product.name} added successfully to cart`);
  };

  return (
    <div className="bg-white border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col justify-between h-full">
      <Link to={`/product/${productId}`} className="block">
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h2 className="text-lg text-black font-medium mb-2">{name}</h2>
        <p className="text-customGrayFaint text-sm mb-4 font-sans">
          {truncateText(description, 100, showFullDescription)}
          {description.length > 100 && (
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowFullDescription(!showFullDescription);
              }}
              className="text-bloodRed text-sm ml-2"
            >
              {showFullDescription ? "See Less" : "See More"}
            </button>
          )}
        </p>
      </Link>
      <div className="flex justify-between items-center mt-auto">
        <span className="text-black font-bold text-lg">
          {price.toFixed(2)} {currency}
        </span>
        <button
          onClick={handleAddToCart}
          className="bg-bloodRed text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
