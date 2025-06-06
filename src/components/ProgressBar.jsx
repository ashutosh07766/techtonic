import React from 'react';

const ProgressBar = ({ duration, isActive, onComplete }) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (!isActive) {
      setProgress(0);
      return;
    }

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / (duration * 1000)) * 100, 100);
      
      setProgress(newProgress);
      
      if (newProgress >= 100) {
        clearInterval(interval);
        onComplete();
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isActive, duration, onComplete]);

  return (
    <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
      <div 
        className="h-full bg-white transition-all duration-75 ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar; 