
import React from 'react';

const pros = ["Pro 1", "Pro 2", "Pro 3"];
const cons = ["Con 1", "Con 2", "Con 3"];

const ComparisonGrid = () => {
  return (
    <div className="p-4">
    <div className="bg-[#0E1AC8] text-white p-4 rounded-t-lg">
        <h2 style={{fontSize:14, fontWeight:"900", color:"#FFFFFF"}}>AI Summary</h2>
    </div>
    <div className="grid grid-cols-5 gap-4">
        <div className="col-span-1 p-4">
            <p className="text-[#6B7280] ">Pros</p>
            <p className="text-[#6B7280]  mt-14">Cons</p>
        </div>
        {[...Array(4)].map((_, index) => (
            <div key={index} className="col-span-1 p-4">
                <div className="mb-4">
                    <ul className="list-disc list-inside text-[#374151]">
                        {pros.map((pro, i) => (
                            <li key={i}>{pro}</li>
                        ))}
                    </ul>
                </div>
                <div className="mb-4">
                    <ul className="list-disc list-inside text-[#374151]">
                        {cons.map((con, i) => (
                            <li key={i}>{con}</li>
                        ))}
                    </ul>
                </div>
                <button style={{borderRadius:8}} className="w-full bg-[#211A66] text-white py-2">
                    Add to cart
                </button>
            </div>
        ))}
    </div>
</div>
  );
};

export default ComparisonGrid;
