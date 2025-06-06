import React from 'react';
import { ArrowLeft, Heart, Share, ShoppingBag, Star, Plus, Minus } from 'lucide-react';

const ProductDetailPage = ({ product, onBack }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [selectedSize, setSelectedSize] = React.useState('M');
  const [quantity, setQuantity] = React.useState(1);

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const colors = ['Black', 'White', 'Navy', 'Brown'];

  const handleAddToCart = () => {
    // In a real app, this would add to cart
    alert(`Added ${quantity} ${product.name} (${selectedSize}) to cart!`);
  };

  const handleBuyNow = () => {
    // In a real app, this would go to checkout
    alert(`Proceeding to checkout with ${product.name}`);
  };

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-10">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-lg font-semibold">Product Details</h1>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Share size={24} />
          </button>
        </div>
      </div>

      {/* Product Image */}
      <div className="aspect-square bg-gray-100 relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
        >
          <Heart
            size={20}
            className={isFavorite ? 'text-red-500 fill-current' : 'text-gray-600'}
          />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-6">
        {/* Title and Rating */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">{product.name}</h2>
          <p className="text-lg text-gray-600 mb-3">{product.brand}</p>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  className="text-yellow-400 fill-current"
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">(4.8) 342 reviews</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold text-gray-900">${product.price}</span>
          <span className="text-lg text-gray-500 line-through">$399</span>
          <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm font-semibold">
            25% OFF
          </span>
        </div>

        {/* Description */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Description</h3>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>
        </div>

        {/* Size Selection */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Size</h3>
          <div className="flex gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 border rounded-lg font-medium transition-colors ${
                  selectedSize === size
                    ? 'border-gray-900 bg-gray-900 text-white'
                    : 'border-gray-300 text-gray-700 hover:border-gray-400'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color Selection */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Color</h3>
          <div className="flex gap-2">
            {colors.map((color) => (
              <button
                key={color}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:border-gray-400 transition-colors"
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quantity</h3>
          <div className="flex items-center gap-4">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 hover:bg-gray-100 transition-colors"
              >
                <Minus size={16} />
              </button>
              <span className="px-4 py-2 font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 hover:bg-gray-100 transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Product Features */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Features</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              Premium quality fabric
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              Machine washable
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              Free shipping & returns
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              1-year warranty
            </li>
          </ul>
        </div>
      </div>

      {/* Fixed Bottom Actions */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
        <div className="flex gap-3">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag size={20} />
            Add to Cart
          </button>
          <button
            onClick={handleBuyNow}
            className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-xl font-semibold transition-colors"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage; 