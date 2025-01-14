import React, { useState, useEffect } from "react";
import Search from "../components/global/Search";
import Category from "../components/global/Category";
import ProductCard from "../components/global/ProductCard";
import { toast } from "react-toastify";

const ProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [categoriesLoading, setCategoriesLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products?limit=12");
        const data = await response.json();
        const transformedData = data.map((product: any) => ({
          id: product.id,
          name: product.title,
          description: product.description,
          price: product.price,
          category: product.category,
          image: product.image,
        }));
        setProducts(transformedData);
      } catch (error) {
        toast.error("Failed to fetch products!");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        toast.error("Failed to fetch categories!");
      } finally {
        setCategoriesLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container-fluid mx-6 p-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="w-full sm:w-1/3">
          <Search
            placeholder="Product Search..."
            onSearch={(term) => setSearchTerm(term)}
          />
        </div>
        <div className="w-full sm:w-1/3">
          {categoriesLoading ? (
            <p>Loading...</p>
          ) : (
            <Category
              options={categories}
              onFilterChange={(category) => setSelectedCategory(category)}
            />
          )}
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              productId={product.id}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
