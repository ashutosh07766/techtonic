import MediaViewer from './MediaViewer.jsx';

const Lookbook = ({ looks }) => {
  const [currentLookIdx, setCurrentLookIdx] = useState(0);
  const [currentMediaIdx, setCurrentMediaIdx] = useState(0);

  const handlePrevMedia = () => {
    if (currentMediaIdx > 0) {
      setCurrentMediaIdx(currentMediaIdx - 1);
    } else if (currentLookIdx > 0) {
      setCurrentLookIdx(currentLookIdx - 1);
      setCurrentMediaIdx(looks[currentLookIdx - 1].media.length - 1);
    }
  };

  const handleNextMedia = () => {
    if (currentMediaIdx < looks[currentLookIdx].media.length - 1) {
      setCurrentMediaIdx(currentMediaIdx + 1);
    } else if (currentLookIdx < looks.length - 1) {
      setCurrentLookIdx(currentLookIdx + 1);
      setCurrentMediaIdx(0);
    }
  };

  const handleSwipe = (direction) => {
    if (direction === 'up' && currentLookIdx < looks.length - 1) {
      setCurrentLookIdx(currentLookIdx + 1);
      setCurrentMediaIdx(0);
    } else if (direction === 'down' && currentLookIdx > 0) {
      setCurrentLookIdx(currentLookIdx - 1);
      setCurrentMediaIdx(0);
    }
  };

  return (
    <div className="relative w-full h-full">
      {/* Colorful Lookbook Logo/Header */}
      <div className="w-full flex justify-center items-center py-4 z-40 absolute top-0 left-0 pointer-events-none">
        <h1
          className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg tracking-wide"
          style={{ letterSpacing: '0.1em' }}
        >
          Lookbook
        </h1>
      </div>
      <div
        className="absolute left-0 top-0 w-1/2 h-full z-30"
        onClick={handlePrevMedia}
      />
      <div
        className="absolute right-0 top-0 w-1/2 h-full z-30"
        onClick={handleNextMedia}
      />
      <MediaViewer
        media={looks[currentLookIdx].media[currentMediaIdx]}
        products={looks[currentLookIdx].products}
        isActive={true}
        onNext={handleNextMedia}
        onProductClick={() => {}}
      />
    </div>
  );
};

export default Lookbook;
