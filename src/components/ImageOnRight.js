import React from 'react';

const ImageOnRight = ({ imageSrc }) => {
  return (
    <div className="flex xl:items-center xl:justify-between xl:p-4  sm:justify-center sm:mt-12">
      <div>
      </div>
      <div className="ml-4">
      <img src={process.env.PUBLIC_URL + '/ESRB.PNG'} alt="Nintendo Icon" height="95px" width="70px" className="mb-6 mr-1"></img>
      </div>
    </div>
  );
};

export default ImageOnRight;
