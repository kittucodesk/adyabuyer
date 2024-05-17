import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={`src/assets/images/monitor.jpeg`} alt={product.name} className="mb-4 rounded-lg" />
      <h2 className="text-xl font-bold mb-2 ">{product.name}</h2>
      {/* <p className="text-gray-700 mb-4">{product.description}</p> */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Buy Now</button>
    </div>
  );
};

export default ProductCard;