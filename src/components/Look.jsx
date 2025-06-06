import React from 'react';
import MediaViewer from './MediaViewer.jsx';
import ProductCard from './ProductCard.jsx';
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Bookmark, Share2, X, MoreHorizontal } from 'lucide-react';

const Look = ({ look, onProductClick, onTapLeft, onTapRight }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = React.useState(0);
  const [isLiked, setIsLiked] = React.useState(false);
  const [isSaved, setIsSaved] = React.useState(false);
  const [showProductsModal, setShowProductsModal] = React.useState(false);

  // Reset media index when look changes
  React.useEffect(() => {
    setCurrentMediaIndex(0);
  }, [look]);

  const handleNext = () => {
    if (currentMediaIndex < look.media.length - 1) {
      setCurrentMediaIndex(currentMediaIndex + 1);
    } else {
      onTapRight();
    }
  };

  const handlePrev = () => {
    if (currentMediaIndex > 0) {
      setCurrentMediaIndex(currentMediaIndex - 1);
    } else {
      onTapLeft();
    }
  };

  const currentMedia = look.media[currentMediaIndex] || look.media[0];

  const handleMediaClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const centerX = rect.width / 2;
    
    if (x < centerX) {
      handlePrev();
    } else {
      handleNext();
    }
  };

  const handleLike = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handleSave = (e) => {
    e.stopPropagation();
    setIsSaved(!isSaved);
  };

  return (
    <div className="relative w-full h-full bg-black flex flex-col">
      {/* Time Bar */}
      {look.media.length > 1 && (
        <div className="absolute top-2 left-4 right-4 flex gap-1 z-20">
          {look.media.map((_, index) => (
            <div
              key={index}
              className={`flex-1 h-0.5 rounded-full transition-all duration-300 ${
                index === currentMediaIndex ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      )}

      {/* Main Media Area */}
      <div onClick={handleMediaClick} className="w-full h-full flex-1 relative">
        <MediaViewer
          media={currentMedia}
          products={look.products}
          isActive={true}
          onNext={handleNext}
          onProductClick={onProductClick}
        />
        {/* Right Sidebar */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 z-20 items-center">
          <button onClick={handleLike} className="text-white hover:scale-110 transition-transform pointer-events-auto">
            <Heart size={28} className={isLiked ? 'fill-current text-red-500 animate-heart-beat' : ''} />
            <div className="text-xs mt-1 text-white/80">15k</div>
          </button>
          <button className="text-white hover:scale-110 transition-transform pointer-events-auto">
            <MessageCircle size={28} />
            <div className="text-xs mt-1 text-white/80">1.2k</div>
          </button>
          <button onClick={handleSave} className="text-white hover:scale-110 transition-transform pointer-events-auto">
            <Bookmark size={28} className={isSaved ? 'fill-current' : ''} />
          </button>
          <button className="text-white hover:scale-110 transition-transform pointer-events-auto">
            <Share2 size={28} />
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30 flex flex-col items-center pb-6">
        <button
          className="w-[90%] py-4 border-2 border-white text-white rounded-xl text-lg font-bold tracking-wide bg-black/30 backdrop-blur-sm hover:bg-white/10 transition-colors"
          onClick={() => setShowProductsModal(true)}
        >
          SHOP THIS LOOK
        </button>
      </div>

      {/* Products Modal */}
      {showProductsModal && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center px-4 animate-fade-in"
          onClick={() => setShowProductsModal(false)}
        >
          <div 
            className="w-full max-w-lg bg-white rounded-2xl p-6 overflow-y-auto max-h-[80vh] shadow-2xl animate-scale-in"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Products in this Look</h2>
              <button
                className="text-gray-500 hover:text-gray-700 transition-colors"
                onClick={() => setShowProductsModal(false)}
              >
                <X size={24} />
              </button>
            </div>
            <div className="space-y-6">
              {look.products.map((product) => (
                <div key={product.id} className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-colors">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.brand}</p>
                    <p className="text-lg font-bold text-gray-900 mt-1">${product.price}</p>
                  </div>
                  <button
                    onClick={() => onProductClick(product)}
                    className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
                  >
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Look; 