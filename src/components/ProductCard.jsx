import React from 'react';
import { X, ShoppingBag, Heart, Share2, Bookmark } from 'lucide-react';

const ProductCard = ({ product, onClose, onShop }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-end justify-center z-50 p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-t-3xl w-full max-w-md transform transition-all duration-300 ease-out animate-slide-up"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
              <img
                src={product.brandLogo || 'https://via.placeholder.com/32'}
                alt={product.brand}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-800">{product.brand}</h3>
              <p className="text-xs text-gray-500">Sponsored</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Product Content */}
        <div className="p-4">
          <div className="aspect-square mb-4 rounded-lg overflow-hidden relative group">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button
                onClick={() => onShop(product)}
                className="bg-white text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 transform scale-90 hover:scale-100 transition-transform"
              >
                <ShoppingBag size={18} />
                Shop Now
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="text-gray-800 hover:text-red-500 transition-colors">
                  <Heart size={24} />
                </button>
                <button className="text-gray-800 hover:text-gray-600 transition-colors">
                  <Share2 size={24} />
                </button>
                <button className="text-gray-800 hover:text-gray-600 transition-colors">
                  <Bookmark size={24} />
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-900">{product.name}</h4>
              <p className="text-sm text-gray-600 mt-1">{product.brand}</p>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center justify-between pt-2">
              <span className="text-2xl font-bold text-gray-900">
                ${product.price}
              </span>
              <button
                onClick={() => onShop(product)}
                className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-colors"
              >
                <ShoppingBag size={18} />
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;