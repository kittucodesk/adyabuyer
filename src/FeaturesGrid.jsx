import React from 'react';

const features = [
    { id: 1, description: "Feature in one line." },
    { id: 2, description: "Feature in one line." },
    { id: 3, description: "Feature in one line." },
    { id: 4, description: "Feature in one line." },
  ];
  const FeatureGrid = () => {
    return (
      <div className="grid grid-cols-4 gap-0 p-0">
        {Array(4).fill().map((_, columnIndex) => (
          <div key={columnIndex} className="space-y-1s">
            {features.map(feature => (
              <div
                key={feature.id}
                className={`p-4 ${feature.id === 5 ? 'bg-blue-50' : 'bg-blue-100'} md`}
              >
                {feature.description}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };
  
  export default FeatureGrid;

