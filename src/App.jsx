import React from 'react';
import { mockLooks } from './data/mockData';
import Look from './components/Look.jsx';
import ProductCard from './components/ProductCard.jsx';
import ProductDetailPage from './components/ProductDetailPage.jsx';

function App() {
  const [currentLookIndex, setCurrentLookIndex] = React.useState(0);
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [showProductDetail, setShowProductDetail] = React.useState(false);
  const [touchStart, setTouchStart] = React.useState(null);

  const currentLook = mockLooks[currentLookIndex];

  const handlePrevLook = () => {
    setCurrentLookIndex((prev) => (prev > 0 ? prev - 1 : mockLooks.length - 1));
  };

  const handleNextLook = () => {
    setCurrentLookIndex((prev) => (prev + 1) % mockLooks.length);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleShopClick = (product) => {
    setSelectedProduct(product);
    setShowProductDetail(true);
  };

  const handleCloseProductCard = () => {
    setSelectedProduct(null);
  };

  const handleBackFromDetail = () => {
    setShowProductDetail(false);
    setSelectedProduct(null);
  };

  // Touch handlers for swipe gestures
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;

    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStart.x;
    const deltaY = touch.clientY - touchStart.y;
    const minSwipeDistance = 50;

    // Vertical swipes for look navigation
    if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > minSwipeDistance) {
      if (deltaY < 0) {
        // Swipe up - next look
        handleNextLook();
      } else {
        // Swipe down - previous look
        handlePrevLook();
      }
    }

    setTouchStart(null);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          handlePrevLook();
          break;
        case 'ArrowDown':
          e.preventDefault();
          handleNextLook();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (showProductDetail && selectedProduct) {
    return (
      <ProductDetailPage
        product={selectedProduct}
        onBack={handleBackFromDetail}
      />
    );
  }

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Look Indicators - Instagram Style */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-20">
        {mockLooks.map((_, index) => (
          <div
            key={index}
            className={`w-16 h-1 rounded-full transition-all duration-300 ${
              index === currentLookIndex 
                ? 'bg-white' 
                : 'bg-white/30'
            }`}
          />
        ))}
      </div>

      {/* Main Content */}
      <div
        className="w-full h-screen"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Look
          look={currentLook}
          onProductClick={handleProductClick}
          onTapLeft={handlePrevLook}
          onTapRight={handleNextLook}
        />
      </div>

      {/* Swipe Instructions (desktop only) */}
      <div className="hidden md:block fixed bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 text-sm text-center bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
        <p>Use ↑↓ arrow keys or swipe to navigate looks</p>
      </div>

      {/* Product Card Modal */}
      {selectedProduct && !showProductDetail && (
        <ProductCard
          product={selectedProduct}
          onClose={handleCloseProductCard}
          onShop={handleShopClick}
        />
      )}
    </div>
  );
}

export default App; 