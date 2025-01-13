
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../components/global/Search"
import Category from "../components/global/Category"
import ProductCard from "../components/global/ProductCard"
import { ToastContainer, toast } from 'react-toastify';
import thingsApart from "../assets/cookies.svg"


const ProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = ["Electronics", "Fashion", "Books", "Home"];
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

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container-fluid mx-6 p-4">
      <div className="flex justify-between items-center mb-6">
        <div className="w-1/3">
          <Search
            placeholder="Product Search..."
            onSearch={(term) => setSearchTerm(term)}
          />
        </div>
        <div className="w-1/3">
          <Category
            options={categories}
            onFilterChange={(category) => setSelectedCategory(category)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            productId={product.id}
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
            onAddToCart={() => toast.success(`${product.name} added successfully to cart`)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

