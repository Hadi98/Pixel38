import React, { useState, useEffect } from 'react';
import './ImageSlider.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { LuDownload } from "react-icons/lu";
import HeartIcon from '../../components/HeartIcon';

const GameCard = () => {

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsActive(prevActive => !prevActive);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const imgs = [
    { id: 0, value: "1.PNG" },
    { id: 1, value: "2.PNG" },
    { id: 2, value: "3.PNG" },
    { id: 3, value: "4.PNG" },
    { id: 4, value: "5.PNG" },
    { id: 5, value: "6.PNG" },
  ];

  const [val, setVal] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageClick = (index) => {
    if (index !== selectedImage) {
      setSelectedImage(index);
      setVal(index); 
    }
  };

  const handleNext = () => {
    setVal((prevVal) => (prevVal < imgs.length - 1 ? prevVal + 1 : prevVal));
  };

  const handlePrevious = () => {
    setVal((prevVal) => (prevVal > 0 ? prevVal - 1 : prevVal));
  };

  return (
    <div className="xl:h-[100%] flex xl:flex-row md:flex-row sm:flex-col main xl:w-[100%] max-w-7xl xl:border xl:rounded-2xl xl:ml-20  bg-white xl:pl-12 md:pl-12 sm:pl-4 relative xl:top-10  mb-8 xl:shadow-lg sm:shadow-bottom md:shadow-lg grid-cols-2">
      <div className="flex flex-col xl:max-w-[54%] max-w-4xl md:max-w-lg">
      <div className="flex flex-row mt-5 sm:text-xs sm:font-bold">
      <div className="mr-2">Store</div>
      <IoIosArrowForward className="text-gray-300 mt-1"/>
      <div className="mr-2">Games</div>
      <IoIosArrowForward className="text-gray-300 mt-1"/>
      <div>Stardew Valley</div>
      </div>
      <div
        className={`absolute top-40 left-0 w-full flex transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <button className="p-2 ml-8 text-white" onClick={handlePrevious}>
          <IoIosArrowBack className="h-16 w-16"/>
        </button>
        <button className="custom-margin-left p-2 text-white  " onClick={handleNext}>
          <IoIosArrowForward className="h-16 w-16"/>
        </button>
      </div>
      <img src={val !== null ? imgs[val].value : imgs[0].value} height="350px" width="75%" className="xl:border xl:rounded-xl md:border md:rounded-xl mt-3 sm:w-[98%] md:w-[80%] xl:w-[100%]" />
      <div className="w-2xl flex_row md:w-[80%] xl:w-[96%]">
        {imgs.map((data, i) => (
          <div className="thumbnail" key={i}>
            <img
              className={` rounded-xl cursor-pointer ${selectedImage === i ? "border-b-4 border-red-500" : ""}`}
              src={data.value}
              onClick={() => handleImageClick(i)}
              height="70"
              width="100"
            />
          </div>
        ))}
      </div>
      <div class="sm:hidden md:flex container text-left flex flex-row md:flex-row h-26 mb-10 mt-2 text-xs">
      <img src={process.env.PUBLIC_URL + '/E.PNG'} alt="Nintendo Icon" height="32px" width="40px" className="mt-4 mr-1"></img>
      <div class="container text-left flex flex-col">
        <div class="mb-2 mt-4 text-xs">
          <p className="font-sans text-gray-400 ">Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated</p>
          <p className="font-sans text-gray-400 ">Gambling, Mild Language, Mild Blood</p>
        </div>
  <hr class="my-1 border-t-2 border-gray-500 w-80 "></hr>
  <p className="font-sans text-gray-400 text-12 ">Users Interact</p>
</div>
      </div>
      </div>

      <div class="flex flex-col xl:mt-24 md:mt-24  sm:mt-8 mr-12 xl:ml-16">
  
  <div class="flex items-center mb-4">
    <div class="w-1 xl:h-6 md:h-6 sm:h-6 bg-red-500 mr-4"></div>
    <p class="xl:text-lg md:text-lg sm:text-sm xl:font-bold ">Nintendo Switch</p>
  </div>

 
  <div class="mb-4 text-start">
    <p class="sm:text-2xl font-bold">Stardew Valley</p>
  </div>

  
  <div class="flex items-center mb-4">
    <p class="sm:text-2xl sm:font-bold mr-auto">$14.99</p>
    <div className="text-red-500 sm:text-2xl"><HeartIcon isActive={isActive} /></div>
  </div>

  
  <div class="mb-4 xl:text-start md:text-start sm:flex sm:flex-row">
    <p className="sm:text-sm">Eligible for up to</p><p className="sm:font-bold sm:ml-1 sm:mb-1">75</p><p className="sm:text-sm sm:ml-1">Gold Points</p>
  </div>

  <button class="xl:px-4 xl:py-2 md:px-4 md:py-4 sm:py-4 sm:px-8 rounded bg-[#E60012] text-white flex flex-row justify-center items-center sm:font-bold  hover:bg-red-600 border-red-500 hover:border-red-600 transform hover:scale-105 transition-all duration-300"><LuDownload className="sm:mr-1"/>Direct download</button> 

  <div class="mb-4 text-xs text-start">
    
    <p class="mt-2">This item will be sent to your system automatically after purchase.</p>
  </div>
</div>


    
    </div>
    
  );
};

export default GameCard;
