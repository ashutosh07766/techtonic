import React from 'react';
import Annotation from './Annotation.jsx';
import ProgressBar from './ProgressBar.jsx';
import { Volume2, VolumeX } from 'lucide-react';

const MediaViewer = ({
  media,
  products,
  isActive,
  onNext,
  onProductClick,
}) => {
  const [isMuted, setIsMuted] = React.useState(true);
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (media.type === 'video' && videoRef.current) {
      if (isActive) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isActive, media.type]);

  const handleVideoEnd = () => {
    onNext();
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <div className="relative w-full h-full">
      {/* Media Content */}
      {media.type === 'image' ? (
        <img
          src={media.url}
          alt="Look"
          className="w-full h-full object-cover"
        />
      ) : (
        <video
          ref={videoRef}
          src={media.url}
          className="w-full h-full object-cover"
          muted={isMuted}
          onEnded={handleVideoEnd}
          playsInline
          loop={false}
        />
      )}

      {/* Annotations Overlay */}
      <div className="absolute inset-0 z-20">
        {media.annotations?.map((annotation) => {
          const product = products?.find(p => String(p.id) === String(annotation.productId));
          if (!product) return null;
          
          return (
            <Annotation
              key={annotation.id}
              annotation={annotation}
              product={product}
              onClick={onProductClick}
            />
          );
        })}
      </div>

      {/* Progress Bar for Images */}
      {media.type === 'image' && (
        <div className="absolute top-20 left-4 right-4 z-10">
          <ProgressBar
            duration={5}
            isActive={isActive}
            onComplete={onNext}
          />
        </div>
      )}

      {/* Video Controls */}
      {media.type === 'video' && (
        <button
          onClick={toggleMute}
          className="absolute top-20 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      )}
    </div>
  );
};

export default MediaViewer;