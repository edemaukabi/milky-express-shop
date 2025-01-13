import React from "react";
import { useParams, Link } from "react-router-dom";
import ProductCard from "../components/global/ProductCard"
import thingsApart from "../assets/things-fall-apart.jpg"


const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const allProducts = [
    {
      id: 1,
      image: thingsApart,
      name: "Smartphone",
      description: "Latest model with advanced features.",
      price: 799.99,
      category: "Electronics",
    },
    {
      id: 2,
      image: thingsApart,
      name: "T-shirt",
      description: "Comfortable and stylish.",
      price: 19.99,
      category: "Fashion",
    },
    {
      id: 3,
      image: thingsApart,
      name: "Cookbook",
      description: "Delicious recipes for every meal.",
      price: 29.99,
      category: "Books",
    },
    {
      id: 4,
      image: thingsApart,
      name: "Vacuum Cleaner",
      description: "Powerful and efficient cleaning.",
      price: 149.99,
      category: "Home",
    },
    {
      id: 5,
      image: thingsApart,
      name: "Spoon",
      description: "Delicious recipes for every meal.",
      price: 29.99,
      category: "Home",
    },
    {
      id: 6,
      image: thingsApart,
      name: "Trouser",
      description: "Powerful and efficient cleaning.",
      price: 149.99,
      category: "Fashion",
    },
    {
      id: 7,
      image: thingsApart,
      name: "Trous",
      description: "Powerful and efficient cleaning.",
      price: 149.99,
      category: "Electronics",
    },
  ];

  // Fetch or find product details using the ID
  // Example data fetching (replace with actual logic):
  const product = {
    id: id,
    name: "Sample Product",
    description: "Detailed description of the product.",
    price: 99.99,
    image: "/path/to/image.jpg",
  };

  return (
    <div>
      <div className="container-fluid mx-6 p-4">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <img src={product.image} alt={product.name} className="w-64 h-64 object-cover my-4" />
        <p>{product.description}</p>
        <p className="text-lg font-semibold mt-2">Price: ${product.price}</p>
      </div>
      <div className="py-4 bg-faintPink">
        <div className="container-fluid mx-6 p-4">
        <h3 className="text-center font-semibold text-xl sm:text-2xl">Related Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <ProductCard
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
              onAddToCart={() => alert(`Added ${product.name} to cart`)}
            />
          </Link>
        ))}
      </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
