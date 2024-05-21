import React from 'react';

const text = "Loremipsum is the text that can be used to type the description to create a feel of the what the product holds";

const TextGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-0 p-0">
      {Array(4).fill().map((_, index) => (
        <div key={index} className="p-4 bg-blue-100 rounded-md">
          {text}
        </div>
      ))}
    </div>
  );
};

export default TextGrid;