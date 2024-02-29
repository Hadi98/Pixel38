import React from 'react';

const Footer = () => {
  return (
    <div className="flex items-center justify-between 2xl:justify-between xl:justify-normal bg-[#242424] text-white p-4 xl:h-24 sm:h-60 sm:flex-col xl:flex-row">
      <div className="h-[3%] text-xs px-6 sm:text-center xl:flex xl:flex-row">
        <p >© Nintendo. Games are property of their respective owners.</p>
        <p> Nintendo of America Inc. Headquarters are in Redmond, Washington, USA</p>
      </div>
      <div className="flex space-x-4 h-[3%] text-xs px-6 sm:flex-col xl:flex-row sm:mb-32 xl:mb-2 xl:w-[45%]">
        <div className="xl:flex xl:flex-row ">
          <a href="#" className="hover:underline ">Contact us</a>
          <a href="#" className="hover:underline sm:ml-4 xl:ml-3 sm:font-bold">Website feedback</a>
          <a href="#" className="hover:underline sm:ml-4  xl:ml-3 sm:font-bold">Terms of Use</a>
          <a href="#" className="hover:underline sm:ml-4 xl:ml-3 sm:font-bold">Documents & Policies</a>
        </div>
        
        <di className="sm:mt-8 xl:mt-1 ">
          <a href="#" className="hover:underline flex flex-row sm:ml-16 xl:ml-1"><img src={process.env.PUBLIC_URL + '/usa.PNG'} alt="Nintendo Icon" className="w-8 h-6 ml-0 mr-4 xl:mr-0" />English (United States)</a></di>
      </div>
    </div>
  );
};

export default Footer;
