import React from "react";
import ProductCardLib from "./ProductCardLib";
import ProductMoreDetail from "./ProductMoreDetail";
import thingsApart from "../../assets/cookies.svg";
import cookies2 from "../../assets/cookies2.svg"

const ProductShowcase: React.FC = () => {
  const product = {
    mainImage: thingsApart,
    additionalImages: [cookies2, cookies2, cookies2],
    title: "Amazing Product",
    name: "Delicious Ice Cream",
    price: 4.99,
    description: "A creamy and delightful treat for any occasion.",
    flavors: ["Vanilla", "Chocolate", "Strawberry"],
  };

  const handleAddToCart = (quantity: number, selectedFlavor: string) => {
    console.log(`Added ${quantity} of ${selectedFlavor} to cart!`);
  };

  return (
    <div className="">
      <div className="flex flex-col lg:flex-row lg:justify-around">
        <div className="flex-shrink-0 lg:w-1/2 mb-6 lg:mb-0">
          <ProductCardLib
            mainImage={product.mainImage}
            additionalImages={product.additionalImages}
          />
        </div>

        <div className="lg:w-1/2">
          <ProductMoreDetail
            name={product.name}
            price={product.price}
            description={product.description}
            flavors={product.flavors}
            onAddToCart={handleAddToCart}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
