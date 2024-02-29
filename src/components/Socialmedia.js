import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Socialmedia = () => {
  return (
    <div className="flex items-center bg-[#E60012] p-4  mt-36 justify-center sm:flex-col md:flex-row">
      <img src={process.env.PUBLIC_URL + '/nintendo2.PNG'} alt="Nintendo Icon" height="32px" width="200px" className="mb-6 mr-1 md:mr-80 lg:mr-96"></img>
      <div className="flex items-center xl:ml-auto lg:ml-24 ">
        <FaFacebook className="text-white mr-12 text-4xl" />
        <FaTwitter className="text-white mr-12 text-4xl"/>
        <FaInstagram className="text-white mr-12 text-4xl"/>
        <FaYoutube className="text-white text-4xl"/>
      </div>
    </div>
  );
};

export default Socialmedia;
