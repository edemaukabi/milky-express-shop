import React from "react";
import ProductCardLib from "./ProductCardLib";
import ProductMoreDetail from "./ProductMoreDetail";

interface ProductShowcaseProps {
  mainImage: string;
  additionalImages: string[];
  name: string;
  price: number;
  description: string;
  flavors?: string[];
  id: number;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  mainImage,
  additionalImages,
  name,
  price,
  id,
  description,
  flavors = [],
}) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:justify-around">
        <div className="flex-shrink-0 lg:w-1/2 mb-6 lg:mb-0">
          <ProductCardLib mainImage={mainImage} additionalImages={additionalImages} />
        </div>

        <div className="lg:w-1/2">
          <ProductMoreDetail
            name={name}
            price={price}
            image={mainImage}
            description={description}
            flavors={flavors}
            id={id}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
