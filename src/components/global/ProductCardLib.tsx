import React from "react";

interface ProductCardLibProps {
  mainImage: string;
  additionalImages: string[];
}

const ProductCardLib: React.FC<ProductCardLibProps> = ({
  mainImage,
  additionalImages,
}) => {
  return (
    <div className=" w-3/5 mx-auto">
      <div className="mb-4 bg-white border rounded-lg p-4 shadow-lg hover:shadow-xl transition">
        <img
          src={mainImage}
          alt="Main Product"
          className="w-3/5 h-72 object-cover rounded-md mx-auto"
        />
      </div>

      <div className="flex justify-around">
        {additionalImages.slice(0, 3).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Additional ${index + 1}`}
            className="w-20 h-20 object-cover rounded-sm"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCardLib;
