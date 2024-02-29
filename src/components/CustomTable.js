import React from 'react';
import { IoPeopleSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { ImPlus } from "react-icons/im";
import { MdOutlineHomeWork } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { PiPlanetFill } from "react-icons/pi";

const CustomTable = () => {
  return (
    <table className="border-collapse  xl:ml-40 sm:ml-4 mt-12 xl:w-[78%] sm:w-[95%]">
      <tbody className="">
        <tr className="xl:h-16 md:h-16 sm:h-24 sm:flex sm:flex-col md:flex-row sm:w-full">
          <td className="border-t sm:w-full font-bold w-[100%] h-16 flex items-center sm:pt-4 md:pt-0 md:w-[40%]"><FaCalendarAlt className="mr-2"/>Release date</td>
          <td className="border-t sm:border-t-0 sm:border-b-0 border-b sm:ml-6 md:ml-0 sm:mb-8 md:w-[60%] md:border-t md: flex md:items-center md:h-16">October 5, 2017</td>
        </tr>
        <tr className="xl:h-16 sm:h-24 md:h-16 sm:flex sm:flex-col md:flex-row">
          <td className="border-t w-[100%] h-16 flex items-center font-bold md:w-[40%]"><IoPeopleSharp className="mr-2"/>No. of players</td>
          <td className="xl:border-t xl:border-b text-red-600 sm:ml-6 sm:mb-8 md:w-[60%] md:border-t md:ml-0 md:flex md:items-center md:mb-0">
            <div className="flex flex-row ">
               <p className="underline hover:text-red-800">Single System (1)</p>
               <p className="ml-4 underline hover:text-red-800">Local wireless (1)</p>
               <p className="ml-4 underline hover:text-red-800">Online (1-4)</p>  
            </div>
            </td>
        </tr>
        <tr className="xl:h-16 sm:h-24 md:h-16 sm:flex sm:flex-col md:flex-row">
          <td className="border-t w-[100%] h-16 flex items-center font-bold md:w-[40%]"><ImPlus className="mr-2"/>Genre</td>
          <td className="xl:border-t xl:border-b text-red-600 sm:ml-6 sm:mb-8 md:w-[60%] md:flex md:items-center md:border-t md:ml-0 md:mb-0">
            <div className="flex flex-row  md:w-[50%]">
              <p className="underline hover:text-red-800">Role-Playing</p>
              <p className="ml-4 underline hover:text-red-800">Simulation</p>
            </div>
          </td>
        </tr>
        <tr className="xl:h-16 sm:h-24 sm:flex sm:flex-col md:flex-row md:h-16">
          <td className="border-t w-[100%] h-16 flex items-center font-bold md:w-[40%]"><MdOutlineHomeWork className="mr-2"/>Publisher</td>
          <td className="xl:border-t xl:border-b text-red-600 underline hover:text-red-800 sm:ml-6 sm:mb-8 md:w-[60%] md:flex md:items-center md:border-t md:ml-0 md:mb-0">ConcernedApe</td>
        </tr>
        <tr className="xl:h-16 sm:h-24 sm:flex sm:flex-col md:flex-row md:h-16">
          <td className="border-t w-[100%] h-16 flex items-center font-bold md:w-[40%]"><IoMdSettings className="mr-2"/>ESRB rating</td>
          <td className="xl:border-t xl:border-b text-red-600 underline hover:text-red-800 sm:ml-6 sm:mb-8 md:w-[60%] md:flex md:items-center md:border-t md:ml-0 md:mb-0">Everyone 10+</td>
        </tr>
        <tr className="xl:h-16 sm:h-24 sm:flex sm:flex-col md:flex-row md:h-16">
          <td className="border-t w-[100%] h-16 flex items-center font-bold md:w-[40%]"><MdOutlineVideogameAsset className="mr-2"/>Supported play modes</td>
          <td className="xl:border-t xl:border-b sm:ml-6 sm:mb-8 md:w-[60%] md:flex md:items-center md:border-t md:ml-0 md:mb-0">TV mode, Tabletop mode, Handheld mode</td>
        </tr>
        <tr className="xl:h-16 sm:h-24 sm:flex sm:flex-col md:flex-row md:h-16">
          <td className="border-t w-[100%] h-16 flex items-center font-bold md:w-[40%]"><FaDatabase className="mr-2"/>Game file size</td>
          <td className="xl:border-t xl:border-b sm:ml-6 sm:mb-8 md:w-[60%] md:flex md:items-center md:border-t md:ml-0 md:mb-0">1.5 GB</td>
        </tr>
        <tr className="xl:h-16 sm:h-24 sm:flex sm:flex-col md:flex-row md:h-16">
          <td className="border-t w-[100%] h-16 flex items-center font-bold md:w-[40%]"><PiPlanetFill className="mr-2"/>Supported languages</td>
          <td className="xl:border-t  border-b w-[95%] sm:ml-6 sm:mb-8 md:w-[60%] md:flex md:items-center md:border-t md:ml-0 md:mb-0">English, French, German, Italian, Japanese, Korean, Portuguese, Russian, Simplified Chinese, Spanish, Traditional Chinese</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CustomTable;
