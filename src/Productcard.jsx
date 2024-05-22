import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <>
    <div style={{backgroundColor:"#F0F6FE", padding: 10}} className='flex flex-col gap-y-10'>
      <div className="bg-white shadow-md rounded-lg p-4">
        <img src={`src/assets/images/monitor.jpeg`} alt={product.name} className="mb-4 rounded-lg" />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 mt-10">
        <h2 style={{ color: "#181E7F", fontSize:14 }} className=" font-bold mb-2 ">{product.name}</h2>
        <button style={{ width: "100%", fontSize: 14, fontWeight: "500" }} className="bg-[#211A66] text-white px-4 py-2 pt-17pr-17 pl-17 pb-17 h-38 rounded-md">Buy Now</button>
      </div>
      <div>
      <p style={{fontWeight:"800", fontSize:36, color:"#181E7F"}} >{product.price}</p>
      </div>
    </div>
   
    </>
    

  );
};

export default ProductCard;