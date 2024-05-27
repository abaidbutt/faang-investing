import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa"; // Importing icons from react-icons

const StoreButtons = () => {
  return (
    <div className="md:hidden flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mx-auto w-1/2">
      {/* Play Store Button */}

      {/* App Store Button */}
      <a
        href="https://www.apple.com/app-store/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#000] text-white flex items-center justify-center px-4 py-2 rounded-md gap-2"
      >
        <img src="/appstore.png" className="h-10" />
        <div className="flex flex-col items-start">
          <span className="text-xs">Download on the</span>
          <span className="font-bold text-lg">App Store</span>
        </div>
      </a>
      <a
        href="https://play.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#000] text-white flex items-center justify-center px-4 py-2 rounded-md gap-1"
      >
        {/* <FaGooglePlay className="text-white mr-2" /> */}
        <img src="/play.png" className="h-10 w-10" />
        <div className="flex flex-col items-start">
          <span className="text-xs">Get it on</span>
          <span className="font-bold text-lg">Google Play</span>
        </div>
      </a>
    </div>
  );
};

export default StoreButtons;
