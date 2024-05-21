
import React from 'react';

const pros = ["Pro 1", "Pro 2", "Pro 3"];
const cons = ["Con 1", "Con 2", "Con 3"];

const ComparisonGrid = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1">
          <div className="bg-blue-800 text-white p-2 rounded-t-md">AI Summary</div>
          <div className="p-4 bg-blue-100 space-y-4 rounded-b-md">
            <div>
              <div className="font-bold">Pros</div>
              <ul className="list-disc list-inside">
                {pros.map((pro, index) => (
                  <li key={index}>{pro}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-bold">Cons</div>
              <ul className="list-disc list-inside">
                {cons.map((con, index) => (
                  <li key={index}>{con}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {Array(3).fill().map((_, index) => (
          <div key={index} className="col-span-1">
            <div className="bg-blue-100 p-4 space-y-4 rounded-md">
              <div>
                <div className="font-bold">Pros</div>
                <ul className="list-disc list-inside">
                  {pros.map((pro, index) => (
                    <li key={index}>{pro}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-bold">Cons</div>
                <ul className="list-disc list-inside">
                  {cons.map((con, index) => (
                    <li key={index}>{con}</li>
                  ))}
                </ul>
              </div>
              <button className="w-full bg-blue-800 text-white py-2 rounded-md">Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonGrid;
