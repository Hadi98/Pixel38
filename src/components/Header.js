import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { MdContactSupport } from "react-icons/md";
import { GoHeartFill } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import { CiMedicalCross } from "react-icons/ci";
import { IoLogoGameControllerB } from "react-icons/io";
import { BiSolidTShirt } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { ImPlus } from "react-icons/im";
import { MdCampaign } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaRegFaceSmile } from "react-icons/fa6";
import { FaFaceSmile } from "react-icons/fa6";
import { BsChatLeftTextFill } from "react-icons/bs";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isMyNintendoStoreOpen, setIsMyNintendoStoreOpen] = useState(false);
  const [isGamesOpen, setIsGamesOpen] = useState(false);
  const [isNintendoSwitchOpen, setIsNintendoSwitchOpen] = useState(false);
  const [isPlayNintendoOpen, setIsPlayNintendoOpen] = useState(false);

  
  const toggleMyNintendoStoreDropdown = () => {
    setIsMyNintendoStoreOpen(!isMyNintendoStoreOpen);
  };

  const toggleGamesDropdown = () => {
    setIsGamesOpen(!isGamesOpen);
  };

  const toggleNintendoSwitchDropdown = () => {
    setIsNintendoSwitchOpen(!isNintendoSwitchOpen);
  };

  const togglePlayNintendoDropdown = () => {
    setIsPlayNintendoOpen(!isPlayNintendoOpen);
  };
  return (
    <header className="bg-white">      
      <div>
        <div className="xl:flex xl:items-center lg:flex lg:items-center">          
          <div className="xl:flex xl:items-center sm:bg-[#E60012] lg:bg-white lg:flex lg:items-center bg-[#E60012]">
            <img src={process.env.PUBLIC_URL + '/nintendo.PNG'} alt="Nintendo Icon" className="xl:w-36 xl:h-16 sm:h-12 lg:h-16 xl:ml-0 lg:w-36 h-12" />
          </div>
          <div className="sm:hidden hidden md:show lg:flex lg:items-center lg:ml-4 lg:relative lg:border-b-2 lg:border-black lg:hover:border-red-500 xl:flex xl:items-center xl:ml-4 xl:relative xl:border-b-2 xl:border-black xl:hover:border-red-500">
            <IoSearchSharp className="lg:absolute lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:text-black lg:h-14 lg:w-8 lg:hover:text-red-500 xl:absolute xl:top-1/2 xl:transform xl:-translate-y-1/2 xl:text-black xl:h-14 xl:w-8 xl:hover:text-red-500"/>
            <input
              type="text"
              placeholder="Search"
              className="xl:pl-10 lg:pl-10 px-6 py-1 focus:outline-none text-lg  placeholder-gray-500 hover:placeholder-red-500"
            />
            <button
              className="ml-4 px-4 py-2 flex items-center focus:outline-none"
              onClick={toggleDropdown}
            >
             <div className="text-red-500 mr-3">All categories</div> {isDropdownOpen ? <IoIosArrowUp className="text-red-500" /> : <IoIosArrowDown className="text-red-500" />}
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-0 bg-white border border-gray-300 rounded-xl shadow-lg w-36 lg:z-50">
                <ul>
                  <li className="px-2 py-1 cursor-pointer font-bold text-xs hover:bg-gray-100 mt-1">All categories</li>
                  <li className="px-2 py-1 cursor-pointer font-bold text-xs hover:bg-gray-100">Games</li>
                  <li className="px-2 py-1 cursor-pointer font-bold text-xs hover:bg-gray-100">Hardware</li>
                  <li className="px-2 py-1 cursor-pointer font-bold text-xs hover:bg-gray-100">Merchandise</li>
                  <li className="px-2 py-1 cursor-pointer font-bold text-xs hover:bg-gray-100">News & Events</li>
                  <li className="px-2 py-1 cursor-pointer font-bold text-xs hover:bg-gray-100 mb-1">Support</li>
                </ul>
              </div>
            )}
            </div>
           <div className=" lg:ml-16 lg:flex lg:space-x-4  xl:ml-80 xl:flex xl:space-x-4 2xl:ml-[29%]">
              <div className="hidden sm:hidden lg:flex  items-center text-gray-500 hover:text-red-500">
                <MdContactSupport  />
                <a href="#" className="font-bold">Support</a>
              </div>
              <div className="hidden sm:hidden lg:flex  items-center text-gray-500 hover:text-red-500">
                <GoHeartFill className=" mr-1" />
                <a href="#" className=" font-bold">Wish List</a>
              </div>
              <div className="hidden sm:hidden lg:flex  items-center text-gray-500 hover:text-red-500">
                <FaShoppingCart className=" mr-1" />
                <a href="#" className=" font-bold">Cart</a>
              </div>
              <div className="hidden sm:hidden lg:flex  items-center text-gray-500 hover:text-red-500">
                <FaUser className=" mr-1" />
                <a href="#" className=" font-bold">Log in / Sign up</a>
              </div>
              <div className="lg:flex lg:items-center xl:flex xl:items-center">
              <img src={process.env.PUBLIC_URL + '/usa.PNG'} alt="Nintendo Icon" className="w-8 h-6 lg:ml-0 lg:mr-4 xl:ml-0 xl:mr-4 sm:absolute sm:right-4 sm:top-3 lg:top-5" />
              <div className="lg:hidden sm:w-40 sm:text-white sm:flex-row sm:flex sm:absolute sm:right-16 sm:top-3"><img src={process.env.PUBLIC_URL + '/m.PNG'} alt="Nintendo Icon" className="w-4 h-4 mt-1 mr-1" />My Nintendo Store</div>
              </div>
            </div>
          
        </div>
      </div>

      <div className="hidden sm:hidden md:show lg:block border-t-2 border-gray"></div>

      <div className="hidden justify-center mt-4 sm:hidden md:show lg:flex lg:flex-row">
        <button
          className="ml-4 px-4 py-2 flex items-center focus:outline-none"
          onClick={toggleMyNintendoStoreDropdown}
        >
          <div className="text-red-500 mr-3 flex flex-col-reverse">
            <div className="bg-red-500 border-t-2 border-b-0 border-red h-1 mt-1"></div>
            <div className="flex flex-row"><img src={process.env.PUBLIC_URL + '/m.PNG'} alt="Nintendo Icon" className="w-4 h-4 mt-1 mr-1" />My Nintendo Store</div>
          </div>
          {isMyNintendoStoreOpen ? <IoIosArrowUp className="text-red-500" /> : <IoIosArrowDown className="text-red-500" />}
        </button>
        {isMyNintendoStoreOpen && (
  <div className="absolute  right-0 mt-0 top-32 bg-white border border-gray-300 rounded-xl shadow-lg w-full z-50">
    <div className="relative">
  <img src={process.env.PUBLIC_URL + '/wave.PNG'} alt="Nintendo Icon" className="w-full h-24 ml-0" />
  <div className="absolute top-4 text-white left-0 right-0 text-center font-bold flex justify-center items-center"><img src={process.env.PUBLIC_URL + '/m.PNG'} alt="Nintendo Icon" className=" h-5 " />My Nintendo Store</div>
  <button className="absolute top-0 right-0 p-2 " onClick={toggleMyNintendoStoreDropdown}><FaTimesCircle/></button>
</div>

    <div className="grid grid-cols-6 justify-items-center px-40 gap-0">
      <div className="col-span-1 flex flex-col">
        <div className="font-bold py-1 flex flex-row"><CiMedicalCross className="text-red-500 mt-1"/>Games</div>
        <ul className="flex flex-col">
          <a className=" py-1 cursor-pointer  text-xs hover:bg-gray-100">Nintendo Switch games</a>
          <a className=" py-1 cursor-pointer  text-xs hover:bg-gray-100">New releases</a>
          <a className=" py-1 cursor-pointer  text-xs hover:bg-gray-100">Sales & deals</a>
        </ul>
      </div>
      <div className="col-span-1 mx-0">
        <div className="font-bold px-2 py-1 flex flex-row"><IoLogoGameControllerB className="text-red-500 mt-1"/>Hardware</div>
        <ul>
          <li className=" py-1 cursor-pointer  text-xs hover:bg-gray-100">Nintendo Switch systems</li>
          <li className=" py-1 cursor-pointer  text-xs hover:bg-gray-100">Joy-Con & controllers</li>
          <li className=" py-1 cursor-pointer  text-xs hover:bg-gray-100">Cases & more</li>
          <li className=" py-1 cursor-pointer  text-xs hover:bg-gray-100">Replacement parts</li>
        </ul>
      </div>
      <div className="col-span-1 mx-0">
        <div className="font-bold px-2 py-1 flex flex-row"><BiSolidTShirt className="text-red-500 mt-1"/>Merchandise</div>
        <ul>
          <li className="px-2 py-1 cursor-pointer  text-xs hover:bg-gray-100">Apparel & accessories</li>
          <li className="px-2 py-1 cursor-pointer  text-xs hover:bg-gray-100">Home & office</li>
          <li className="px-2 py-1 cursor-pointer  text-xs hover:bg-gray-100">Plush</li>
          <li className="px-2 py-1 cursor-pointer  text-xs hover:bg-gray-100">Toys</li>
        </ul>
      </div>
      <div className="col-span-1 mx-0">
        <div className="font-bold px-2 py-1 flex flex-row"><FaStar className="text-red-500 mt-1"/>Store exclusives</div>
        <ul>
          <li className="px-2 py-1 cursor-pointer  text-xs hover:bg-gray-100">Exclusive products</li>
          <li className="px-2 py-1 cursor-pointer  text-xs hover:bg-gray-100">My Nintendo rewards</li>
          <li className="px-2 py-1 cursor-pointer  text-xs hover:bg-gray-100">Nintendo Switch Online offers</li>
        </ul>
      </div>
      <div className="col-span-1 mx-0">
        <div className="font-bold px-2 py-1 flex flex-row"><img src={process.env.PUBLIC_URL + '/mario.PNG'} alt="Nintendo Icon" className="h-5"/>Characters</div>
        <ul>
          <li className="px-2 py-1 cursor-pointer  text-xs hover:bg-gray-100">Pikmin</li>
          <li className="px-2 py-1 cursor-pointer  text-xs hover:bg-gray-100">Splatoon</li>
          <li className="px-2 py-1 cursor-pointer  text-xs hover:bg-gray-100">Super Mario</li>
          <li className="px-2 py-1 cursor-pointer  text-xs hover:bg-gray-100">The Legend of Zelda</li>
        </ul>
      </div>
      <div className="col-span-1 mx-0">
        <div className="font-bold px-2 py-1 flex flex-row"><img src={process.env.PUBLIC_URL + '/sales.PNG'} alt="Nintendo Icon" className="h-5"/>Sales & deals</div>
      </div>
    </div>
    <div className="flex justify-center pb-4">
    <button className="bg-red-500 text-white px-4 py-2 rounded-md">Shop all</button>
  </div>
  </div>
)}


        
        <button
          className="ml-4 px-4 py-2 flex items-center focus:outline-none"
          onClick={toggleGamesDropdown}
        >
          <div className="text-red-500 mr-3 flex flex-row"><ImPlus className="h-4 w-4 mt-1 mr-1"/>Games</div>
          {isGamesOpen ? <IoIosArrowUp className="text-red-500" /> : <IoIosArrowDown className="text-red-500" />}
        </button>
        
        {isGamesOpen && (
          <div className="z-50 absolute flex justify-center items-center right-0 mt-0 top-32 bg-white border border-gray-300 rounded-xl shadow-lg w-full">
            <button className="absolute top-0 right-0 p-2 " onClick={toggleGamesDropdown}><FaTimesCircle/></button>
            <div className="grid grid-cols-4 justify-items-center pl-40 pr-40 gap-x-0 top-32 max-w-4xl pt-10 pb-3">
  <div className="group flex flex-col items-center hover:text-red-600">
   <button className="border border-gray-400 rounded-xl group-hover:bg-red-600 group-hover:text-white"><IoGameController className="h-16 w-28 "/></button> 
    <h3 className="mt-2  text-center">Nintendo Switch games</h3>
  </div>
  <div className="group flex flex-col items-center hover:text-red-600">
  <button className="border border-gray-400 rounded-xl group-hover:bg-red-600 group-hover:text-white"><MdCampaign className="h-16 w-28 "/></button>
    <h3 className="mt-2 =">New releases</h3>
  </div>
  <div className="group flex flex-col items-center hover:text-red-600">
  <button className="border border-gray-400 rounded-xl py-2 group-hover:bg-red-600 group-hover:text-white"><FaCalendarAlt className="h-10 w-28 "/></button>
    <h3 className="mt-2 =">Coming soon</h3>
  </div>
  <div className="group flex flex-col items-center hover:text-red-600">
  <button className="border border-gray-400 rounded-xl py-2 group-hover:bg-red-600 group-hover:text-white"><ImPlus className="h-10 w-28 "/></button>
    <h3 className="mt-2 ">Shop games</h3>
  </div>
  
</div>

          </div>
        )}

        
        <button
          className="ml-4 px-4 py-2 flex items-center focus:outline-none"
          onClick={toggleNintendoSwitchDropdown}
        >
          <div className="text-red-500 mr-3 flex flex-row "><IoGameController className="h-4 w-4 mr-1 mt-1"/>Nintendo Switch</div>
          {isNintendoSwitchOpen ? <IoIosArrowUp className="text-red-500" /> : <IoIosArrowDown className="text-red-500" />}
        </button>
        
        {isNintendoSwitchOpen && (
          <div className="z-50 absolute flex justify-center items-center right-0 mt-0 top-32 bg-white border border-gray-300 rounded-xl shadow-lg w-full">
          <button className="absolute top-0 right-0 p-2 " onClick={toggleNintendoSwitchDropdown}><FaTimesCircle/></button>
          <div className="grid grid-cols-5 justify-items-center px-30 gap-x-0 top-32 max-w-4xl pt-10 pb-3">
<div className="group flex flex-col items-center hover:text-red-600 ml-12">
 <button className="flex justify-center items-center border border-gray-400 rounded-xl group-hover:bg-red-600 group-hover:text-white w-60"><img src={process.env.PUBLIC_URL + '/phones.PNG'} alt="Nintendo Icon" className="w-40 h-16 ml-0" /></button> 
  <h3 className="mt-2  text-center">Nintendo Switch lineup</h3>
</div>
<div className="group flex flex-col items-center hover:text-red-600 ml-32">
<button className="border border-gray-400 rounded-xl group-hover:bg-red-600 group-hover:text-white py-1"><FaArrowRightArrowLeft className="w-32 h-16 ml-0"/></button>
  <h3 className="mt-2 =">Compare systems</h3>
</div>
<div className="group flex flex-col items-center hover:text-red-600 ml-16">
<button className="border border-gray-400 rounded-xl py-2 px-8 group-hover:bg-red-600 group-hover:text-white"><img src={process.env.PUBLIC_URL + '/online.PNG'} alt="Nintendo Icon" className="w-12 h-12 ml-0" /></button>
  <h3 className="mt-2 =">Online service</h3>
</div>
<div className="group flex flex-col items-center hover:text-red-600 ml-2">
<button className="border border-gray-400 rounded-xl py-2 px-4 group-hover:bg-red-600 group-hover:text-white"><img src={process.env.PUBLIC_URL + '/control.PNG'} alt="Nintendo Icon" className="w-30 h-12 ml-0" /></button>
  <h3 className="mt-2 ">Accessories</h3>
</div>
<div className="group flex flex-col items-center hover:text-red-600 mr-16">
<button className="border border-gray-400 rounded-xl py-2 px-4 group-hover:bg-red-600 group-hover:text-white"><img src={process.env.PUBLIC_URL + '/hand.PNG'} alt="Nintendo Icon" className="w-30 h-12 ml-0" /></button>
  <h3 className="mt-2 ">Shop systems</h3>
</div>
</div>

        </div>
        )}


        <button  className="ml-4 px-4 py-2 flex items-center focus:outline-none"  >
          <div className="text-red-500 mr-1 flex flex-row"><BsChatLeftTextFill className="mt-1 mr-1"/>News & Events</div>
        </button>
       
        <button
          className="ml-4 px-4 py-2 flex items-center focus:outline-none"
          onClick={togglePlayNintendoDropdown}
        >
          <div className="text-red-500 mr-1 flex flex-row"><FaStar className="mr-1 mt-1"/>Play Nintendo</div>
          {isPlayNintendoOpen ? <IoIosArrowUp className="text-red-500" /> : <IoIosArrowDown className="text-red-500" />}
        </button>
        
        {isPlayNintendoOpen && (
          <div className="z-50 absolute flex justify-center items-center right-0 mt-0 top-32 bg-white border border-gray-300 rounded-xl shadow-lg w-full">
          <button className="absolute top-0 right-0 p-2 " onClick={togglePlayNintendoDropdown}><FaTimesCircle/></button>
          <div className="grid grid-cols-2 justify-items-center px-30 gap-x-0 top-32 max-w-4xl pt-10 pb-3">


<div className="group flex flex-col items-center hover:text-red-600 ml-16">
<button className="flex flex-row border border-gray-400 rounded-xl py-6 px-10 group-hover:bg-red-600 group-hover:text-white"><FaRegFaceSmile className="mr-1"/><FaRegFaceSmile /></button>
  <h3 className="mt-2 =">For kids</h3>
</div>
<div className="group flex flex-col items-center hover:text-red-600 ml-2 relative">
      <button className="flex flex-row border border-gray-400 rounded-xl py-4 px-8 group-hover:bg-red-600 group-hover:text-white relative z-10">
      <FaRegFaceSmile className="text-xl absolute top-1/2 left-1/2 transform -translate-x-1/10 -translate-y-1/2" />
        <FaFaceSmile className="text-3xl mr-5" /> 
      </button>
      <h3 className="mt-2">For parents</h3>
    </div>

</div>

        </div>
        )}
      </div>
      <div className="hidden sm:hidden md:show lg:block border-t-2 border-gray"></div>

      <div className="flex items-center justify-center bg-[#F8F8F8] h-12">
  <div className=" hidden lg:flex sm:hidden md:show  flex-row items-center mr-1">
  <img src={process.env.PUBLIC_URL + '/star1.PNG'} alt="Nintendo Icon" className="w-6 h-6 mt-1 mr-1" />
    <div className="font-bold mr-2">Free shipping</div>
    <div className="mr-2">on orders $50 or more.</div>
    <div className="underline">Restrictions apply.</div>
  </div>
  <div className="border-l border-gray-500 h-8 ml-4 mr-2 mt-1 sm:hidden md:show lg:block hidden"></div>
  <div className="flex sm:flex-row sm:items-center">
  <img src={process.env.PUBLIC_URL + '/star2.PNG'} alt="Nintendo Icon" className="w-6 h-6 mt-1 mr-1" />
    <div className="mr-2">Earn</div>
    <div className="font-bold underline mr-2">My Nintendo Points</div>
    <div>on digital games</div>
  </div>
</div>

    </header>
  );
};

export default Header;
