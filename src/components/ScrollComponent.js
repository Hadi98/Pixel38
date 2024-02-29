import React, { useState, useEffect } from 'react';
import { GoDownload } from "react-icons/go";

const ScrollComponent = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowComponent(true);
      } else {
        setShowComponent(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showComponent && (
        <div className="fixed xl:top-0 lg:top-0 lg:ml-0 lg:pl-0 md:h-[10%] sm:bottom-12 xl:left-0 lg:left-0 sm:ml-44 md:ml-56 p-4 bg-white border border-gray-300 shadow-lg xl:w-full lg:w-full sm:w-[50%] xl:px-36 lg:px-12" style={{backgroundColor: 'rgb(239, 239, 239)',}}>
          <div className="flex items-center">
            <div>
              <p className="font-bold sm:hidden lg:block">Stardew Valley</p>
            </div>
            <div className="ml-auto flex xl:flex-row lg:flex-row sm:mb-3">
              <div className="sm:flex-col sm:mr-16 lg:flex-row lg:flex lg:mt-2 lg:mr-2 lg:font-bold"><p className="mr-5 mt-3 lg:mt-0 lg:mr-1">Digital</p><p> $14.99</p></div>
              <button className="bg-[#E60012] text-white px-4 xl:py-2 lg:py-2 lg:px-8 sm:py-4 rounded-full font-bold flex flex-row hover:bg-red-600 border-red-500 hover:border-red-600 transform hover:scale-105 transition-all duration-300"><GoDownload className="mr-2 mt-1 text-xl"/>Direct download</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollComponent;
