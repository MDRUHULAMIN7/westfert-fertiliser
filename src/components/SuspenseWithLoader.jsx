import React, { useEffect, useState, Suspense } from 'react';

const SuspenseWithLoader = ({ children }) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const minTime = 500;
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, minTime);

    return () => clearTimeout(timer);
  }, []);

  const Loader = () => (
    <div className="flex justify-center items-center h-40">
      <div className="flex gap-2 text-4xl font-bold text-[#2c3e57] animate-pulse">
        <span className="animate-[blink_1.4s_infinite]">.</span>
        <span className="animate-[blink_1.4s_infinite_0.2s]">.</span>
        <span className="animate-[blink_1.4s_infinite_0.4s]">.</span>
      </div>

      <style>
        {`
          @keyframes blink {
            0%, 80%, 100% { opacity: 0; }
            40% { opacity: 1; }
          }

          .animate-[blink_1.4s_infinite] {
            animation: blink 1.4s infinite;
          }

          .animate-[blink_1.4s_infinite_0.2s] {
            animation: blink 1.4s infinite;
            animation-delay: 0.2s;
          }

          .animate-[blink_1.4s_infinite_0.4s] {
            animation: blink 1.4s infinite;
            animation-delay: 0.4s;
          }
        `}
      </style>
    </div>
  );

  return (
    <Suspense fallback={<Loader />}>
      {showLoader ? <Loader /> : children}
    </Suspense>
  );
};

export default SuspenseWithLoader;
