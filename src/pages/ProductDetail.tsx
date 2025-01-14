import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ProductCard from "../components/global/ProductCard";
import ProductShowcase from "../components/global/ProductShowcase";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductAndRelated = async () => {
      try {
        setLoading(true);
        const productResponse = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!productResponse.ok) {
          throw new Error("Failed to fetch product");
        }
        const productData = await productResponse.json();
        setProduct(productData);

        const relatedResponse = await fetch(
          `https://fakestoreapi.com/products/category/${productData.category}?limit=4`
        );
        if (!relatedResponse.ok) {
          throw new Error("Failed to fetch related products");
        }
        const relatedData = await relatedResponse.json();
        setRelatedProducts(relatedData.filter((p: any) => p.id !== productData.id));

        setError(null);
      } catch (err: any) {
        setError(err.message);
        setProduct(null);
        setRelatedProducts([]);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProductAndRelated();
    }
  }, [id]);

  return (
    <div>
      <div className="p-4">
        {loading ? (
          <p className="text-center text-gray-600">Loading product...</p>
        ) : error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : product ? (
          <ProductShowcase
            mainImage={product.image}
            additionalImages={[product.image]} // Example: Reusing main image
            name={product.title}
            price={product.price}
            id={product.id}
            description={product.description}
            flavors={["Default"]} // Example flavor
          />
        ) : null}
      </div>

      <div className="py-4 bg-faintPink">
        <div className="container-fluid mx-6">
          <h3 className="text-center font-medium text-xl text-black sm:text-2xl my-8">
            Related Products
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link to={`/product/${relatedProduct.id}`} key={relatedProduct.id}>
                <ProductCard
                  image={relatedProduct.image}
                  name={relatedProduct.title}
                  description={relatedProduct.description}
                  price={relatedProduct.price}
                  productId={relatedProduct.id}
                  // onAddToCart={() =>
                  //   alert(`Added ${relatedProduct.title} to cart`)
                  // }
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
