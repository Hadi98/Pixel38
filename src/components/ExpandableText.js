import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const ExpandableText = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className=" mx-auto flex xl:flex-row sm:flex-col xl:items-center md:flex-row">
        <div className="flex flex-col xl:w-[50%] md:w-1/2 sm:w-[100%] mt-16">
          <h2 className="text-2xl font-bold mb-4 xl:ml-40  sm:ml-4">You're moving to the valley...</h2>
      <p className="text-md text-gray-700 mb-4 xl:ml-40  sm:ml-4 w-3/4 md:w-[100%] xl:w-[90%]">
      You’ve inherited your grandfather’s old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home? It won’t be easy. Ever since Joja Corporation came to town, the old ways of life have all but disappeared. The community center, once the town’s most vibrant hub of activity, now lies in shambles. But the valley seems full of opportunity. With a little dedication, you might just be the one to restore Stardew Valley to greatness!
      </p>
      <p className="text-md text-gray-700 xl:ml-40  sm:ml-4 ">
        Now with Multiplayer! Invite 1-3 players to join you in the valley!
      </p>
      {expanded ? (
        <p className="text-md text-gray-700 mb-4 xl:ml-40  sm:ml-4">
         Players can work together to build a thriving farm, share resources, and build relationships with townspeople or each other. As more hands are better than one, players have the option to scale profit margin on produce sold for a more challenging experience.
        </p>
      ) : null}
      <button onClick={toggleExpansion} className="text-red-600 w-28 font-bold flex flex-row xl:ml-40  sm:ml-4 mt-4 hover:text-red-800 ">
          {expanded ? <FaMinus className="mt-1 mr-1" /> : <FaPlus className="mt-1 mr-1" />}
          Read {expanded ? "less" : "more"}
        </button> 
      <p className="text-xs text-gray-700 mt-2 xl:ml-40  sm:ml-4">Software description provided by the publisher.</p>
      <button className="bg-[#E60012] xl:w-80 md:w-80 sm:w-[50%] h-12 border rounded-xl xl:ml-40  sm:ml-4 font-bold text-white mt-3 hover:bg-red-600 border-red-500 hover:border-red-600 transform hover:scale-105 transition-all duration-300">Explore this game's official website</button>
        </div>
      <div className="xl:w-1/2 md:w-1/2 sm:w-[95%] xl:mt-16 md:mt-16 sm:mt-8 xl:ml-24">
      <img src="/2.PNG" alt="Your Image" className="rounded-2xl xl:w-3/4 xl:h-1/2 md:w-[85%] md:h-1/2 sm:w-[100%] sm:h-[100%] ml-12" />
      </div>
    </div>
  );
};

export default ExpandableText;
