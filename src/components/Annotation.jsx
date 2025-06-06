import React from 'react';

const Annotation = ({ annotation, product, onClick }) => {
  if (!product) {
    console.warn(`No product found for annotation with productId: ${annotation.productId}`);
    return null; // Skip rendering if the product is not found
  }

  const handleClick = (e) => {
    e.stopPropagation();
    onClick(product);
  };

  return (
    <div
      className="absolute cursor-pointer group z-20"
      style={{ 
        left: `${annotation.x}%`, 
        top: `${annotation.y}%`,
        transform: 'translate(-50%, -50%)'
      }}
      onClick={handleClick}
    >
      {/* Pulsing dot */}
      <div className="relative">
        <div className="w-6 h-6 bg-white rounded-full border-2 border-yellow-400 shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200">
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
        </div>
        
        {/* Animated pulse ring */}
        <div className="absolute inset-0 w-6 h-6 bg-yellow-400/30 rounded-full animate-ping"></div>
        
        {/* Hover tooltip */}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="bg-black/90 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-lg backdrop-blur-sm">
            <div className="font-semibold">{product.name}</div>
            <div className="text-yellow-300">${product.price}</div>
            {/* Arrow pointing down */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-black/90"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Annotation;