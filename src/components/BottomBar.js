import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHeart, faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const BottomBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const threshold = 1; 

      setIsScrolled(scrollTop > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`xl:hidden fixed bottom-0 border rounded-full border-r w-[50%] h-16 bg-white text-white py-4 flex justify-between items-center transition-transform duration-300 ml-[25%]  ${
        isScrolled ? 'transform translate-y-0' : 'transform translate-y-full'
      }`}
    >
      <FontAwesomeIcon icon={faBars} className="text-xl ml-4 text-black" />
      <FontAwesomeIcon icon={faHeart} className="text-xl text-black"/>
      <FontAwesomeIcon icon={faSearch} className="text-xl text-black"/>
      <FontAwesomeIcon icon={faShoppingCart} className="text-xl text-black"/>
      <FontAwesomeIcon icon={faUser} className="text-xl mr-4 text-black"/>
    </div>
  );
};

export default BottomBar;
