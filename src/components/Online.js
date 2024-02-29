import React from 'react';
import { IoLogoReact } from 'react-icons/io5';


const Online = () => {
  return (
    <div className="flex flex-row items-start justify-start bg-[#F8F8F8]  rounded-lg xl:w-[80%] sm:w-[95%] xl:ml-36 sm:ml-4 mt-32">
      <div className="flex flex-col xl:w-[50%] sm:w-[100%] pl-12 xl:pt-12 sm:pt-8 sm:pb-8">
      <img src={process.env.PUBLIC_URL + '/online1.PNG'} alt="Nintendo Icon" height="32px" width="200px" className="mb-6 mr-1"></img>
        <p className="text-lg font-bold mb-2 w-[75%]">Play online, access classic NES™ and Super NES™ games, and more with a Nintendo Switch Online membership.</p>
        <div className="flex flex-row">
        <p className="text-base text-[#484848] mb-2">This game supports:</p>
        <p className="text-[#E60012] underline ml-2">Online Play </p>
        <p className="text-[#E60012] underline ml-2">Save Data Cloud</p>
        </div>
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg mb-2 w-[25%] font-bold hover:bg-red-800 hover:bg-red-600 border-red-500 hover:border-red-600 transform hover:scale-105 transition-all duration-300">Learn more</button>
      </div >
      <div className="items-start justify-start md:items- flex sm:hidden md:flex md:h-[100%] md:self-end">
      <img src={process.env.PUBLIC_URL + '/play.PNG'} alt="Nintendo Icon" height="1000px" width="550px" className="md:h-[100%] "></img>
      </div>
    </div>
  );
};

export default Online;
