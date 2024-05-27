import React from "react";
import LoginSection from "./LoginSection";

const HeroSection = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
      <section className="md:text-left text-center md:p-20  p-5">
        <h1 className="md:text-6xl text-2xl font-bold md:px-12 px-5 text-primary ">
          FAANG INVESTING COMMUNITY
        </h1>
        <p className="mt-4 text-2xl text-secondary md:px-12 px-5">
          We help people working in BigTech make better financial decisions with
          the data and insights provided by AI
        </p>
      </section>
      <div className="mt-8 justify-center text-xl md:block hidden">
        <LoginSection />
      </div>
    </main>
  );
};

export default HeroSection;
