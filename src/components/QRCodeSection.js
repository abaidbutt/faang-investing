import React from "react";
import StoreButtons from "./StoreButtons";

const QRCodeSection = () => {
  return (
    <div>
      <img
        src="/people.png"
        alt="QR Code"
        className="w-full md:block hidden"
        
      />
      <StoreButtons />
      <main
      id="app"
        className="grid grid-cols-1 md:grid-cols-12 items-center md:py-20 md:px-10 md:bg-primary"
        style={{
          backgroundImage: `url(/portfolio-back.png)`,
        }}
      >
        <div className="col-span-1 md:col-span-4 md:flex justify-center hidden items-center">
          <div className="bg-primary border-white rounded-3xl py-12 px-10 border-[12px] relative z-10 md:flex justify-center items-center h-full hidden">
            <img src="/qr-code.png" alt="QR Code" className="md:w-96 w-40" />
          </div>
        </div>
        <section className="col-span-1 md:col-span-8 flex items-center relative bg-white rounded-3xl h-full">
          <div className="grid grid-cols-12 gap-4 w-full items-center">
            <div className="col-span-4 relative z-10 md:block hidden">
              <img
                src="/Illistration.png"
                alt="Intro Panel"
                className="w-40 md:w-80 absolute z-10 left-[-4px] md:left-[-36px] top-1/2 transform -translate-y-1/2"
              />
            </div>
            <div className="md:col-span-8 col-span-12 relative z-10 md:p-10 p-5">
              <h2 className="md:text-3xl text-lg text-secondary md:text-left text-center font-medium">
                <span className="font-bold">Sign Up today </span>
                and manage your portfolio like a pro with a personalized
                assistant and access to a trusted tech community of 1,200
                members who connected $150M+ of total assets.
              </h2>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default QRCodeSection;
