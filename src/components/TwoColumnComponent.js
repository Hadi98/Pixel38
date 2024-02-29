import React from 'react';

const TwoColumnComponent = () => {
  return (
    <div className="flex mt-20 bg-white  justify-between sm:flex-col md:flex-row">
      <div className=" bg-gray-100 rounded-xl h-50  xl:w-[38%] md:w-[90%] sm:w-[95%] xl:ml-40 sm:ml-4 md:pt-8 xl:pt-4 md:h-[40%] md:mt-[10%] md:pb-[5%] xl:pb-[2%]">
        <h2 className="text-center font-bold mt-4">ESRB rating</h2>
        <div className="mx-auto xl:mt-8 sm:mt-4 sm:mb-12 md:mb-0 md:px-0 md:py-0 p-4 rounded-lg shadow-lg bg-white w-3/4 h-24 ">
          <div class="container text-left flex flex-row h-26 text-xs mb-6 md:mb-0 md:px-8 ">
            <img src={process.env.PUBLIC_URL + '/E.PNG'} alt="Nintendo Icon" height="32px" width="40px" className="mb-6 mr-1 md:mb-4 md:mt-4"></img>
            <div class="container text-left flex flex-col ">
              <div class="mb-2 mt-2 text-xs">
                <p className="font-sans text-gray-400 ">Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated</p>
                <p className="font-sans text-gray-400 ">Gambling, Mild Language, Mild Blood</p>
              </div>
              <hr class="my-1 border-t-2 border-gray-500 w-80 md:w-[98%]"></hr>
              <p className="font-sans text-gray-400 text-12 mb-4">Users Interact</p>
            </div>
          </div>
        </div>
      </div>

      <div className="xl:w-[38%] sm:w-[95%] h-55 bg-gray-100 rounded-xl xl:mr-40 sm:ml-4 sm:mt-8 md:h-[80%] md:mt-[10%]">
        <h2 className="text-center font-bold mt-4">Supported play modes</h2>
        <div className="mx-auto mt-8 flex justify-between xl:mb-12 sm:mb-16">
          <div style={{ backgroundColor: 'rgb(72, 72, 72)' }} className="w-[27%] h-24 rounded-lg shadow-lg ml-8 flex flex-col space-y-12"><img src={process.env.PUBLIC_URL + '/tv.PNG'} alt="Nintendo Icon" height="32px" width="40px" className="mt-10 ml-12"></img><h3 className="ml-16">TV</h3></div>
          <div style={{ backgroundColor: 'rgb(72, 72, 72)' }} className="w-[27%] h-24 rounded-lg shadow-lg flex flex-col space-y-12"><img src={process.env.PUBLIC_URL + '/computer.PNG'} alt="Nintendo Icon" height="32px" width="40px" className="mt-10 ml-12"></img><h3 className="ml-8">Tabletop</h3></div>
          <div style={{ backgroundColor: 'rgb(72, 72, 72)' }} className="w-[27%] h-24 rounded-lg shadow-lg mr-8 flex flex-col space-y-12"><img src={process.env.PUBLIC_URL + '/handheld.PNG'} alt="Nintendo Icon" height="32px" width="40px" className="mt-10 ml-12"></img><h3 className="ml-8">Handheld</h3></div>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnComponent;
