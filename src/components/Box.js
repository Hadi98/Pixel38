import React, { useState } from 'react';

const Box = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: 'slider1.PNG', title: 'Title 1', description: 'Description 1' },
    { src: 'slider2.PNG', title: 'Title 2', description: 'Description 2' },
    { src: 'slider3.PNG', title: 'Title 3', description: 'Description 3' },
    { src: 'slider4.PNG', title: 'Title 4', description: 'Description 4' },
    { src: 'slider5.PNG', title: 'Title 5', description: 'Description 5' },
    { src: 'slider6.PNG', title: 'Title 6', description: 'Description 6' },
    { src: 'slider7.PNG', title: 'Title 7', description: 'Description 7' },
    { src: 'slider8.PNG', title: 'Title 8', description: 'Description 8' },
    { src: 'slider9.PNG', title: 'Title 9', description: 'Description 9' },
    { src: 'slider10.PNG', title: 'Title 10', description: 'Description 10' },
    { src: 'slider11.PNG', title: 'Title 11', description: 'Description 11' },
    { src: 'slider12.PNG', title: 'Title 12', description: 'Description 12' },
    { src: 'slider13.PNG', title: 'Title 13', description: 'Description 13' },
    { src: 'slider14.PNG', title: 'Title 14', description: 'Description 14' },
    { src: 'slider15.PNG', title: 'Title 15', description: 'Description 15' },
    { src: 'slider16.PNG', title: 'Title 16', description: 'Description 16' },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 1));
  };

  return (
    <div className="relative xl:ml-32 sm:ml-2 mt-32 xl:w-[80%] sm:w-[95%]">
      <div className="flex xl:overflow-hidden  rounded-xl h-[70%] ">
        {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
          <div key={index} className="w-1/4 ml-8 h-[90%] border rounded-xl ">
           <div className="mb-4 transition duration-500 ease-in-out transform hover:-translate-y-4">
            <img
              src={image.src}
              alt={image.title}
              className="w-full rounded-t-xl h-[40%]"
            />
           </div>
            
            
              <h1>{image.title}</h1>
            <p>{image.description}</p>
            <p>{image.description}</p>
            <p>{image.description}</p>
            <p>{image.description}</p>
            <p>{image.description}</p>
          </div>
        ))}
      </div>
      <button
  className="sm:hidden md:flex absolute md:items-center top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-30 border-none text-white text-7xl text-opacity-50 ml-8 h-[100%] rounded-xl w-[5%] hover:bg-opacity-70 hover:text-opacity-70"
  onClick={handlePrev}
  disabled={currentIndex === 0}
>
  {'<'}
</button>
<button
  className="sm:hidden md:flex md:items-center absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-30 border-none text-white text-7xl text-opacity-50 ml-16 h-[100%] rounded-xl w-[5%] hover:bg-opacity-70 hover:text-opacity-70"
  onClick={handleNext}
  disabled={currentIndex + 4 >= images.length}
>
  {'>'}
</button>

    </div>
  );
};

export default Box;
