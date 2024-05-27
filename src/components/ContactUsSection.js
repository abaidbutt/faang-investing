import React from "react";
import { motion } from "framer-motion";
const ContactUsSection = () => {
  return (
    <div className="bg-secondary text-white text-center md:p-10 p-5">
      <div
        className="mx-auto"
        style={{
          backgroundImage: `url(/contact-back.png)`,
        }}
      >
        <h2 className="text-3xl font-bold">CONTACT US</h2>
        <p className="mt-4 md:text-xl text-md">
          We are here to answer any question you might have.{" "}
          <br className="md:block hidden" /> We look forward to hearing from
          you!
        </p>
        <main className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center ">
          <section className="mt-8 flex justify-center">
            <motion.img
              src="/contact.png"
              alt="ContactUs"
              className=""
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </section>
          <section className="max-w-md mx-auto  md:p-6">
            <form className="mt-8 max-w-xl mx-auto rounded-3xl md:shadow-lg p-10 md:bg-primary">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-2 border border-gray-300 rounded-lg text-secondary focus:outline-primary"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-2 border border-gray-300 rounded-lg text-secondary focus:outline-primary"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="mt-4 p-2 w-full border border-gray-300 rounded-lg text-secondary focus:outline-primary"
              />
              <textarea
                placeholder="Write a message"
                className="mt-4 p-2 w-full border border-gray-300 rounded-lg text-secondary focus:outline-primary"
              ></textarea>
              <button className="mt-4 px-4 py-2 bg-warning rounded-lg w-full ">
                Submit
              </button>
              <h2 className="md:text-lg text-sm mt-4">
                Thanks for submitting!
              </h2>
            </form>
          </section>
        </main>
      </div>
      <h2 className="md:text-xl text-md">©2024 by Smartine Inc.</h2>
      <p className="mt-4 md:text-lg text-sm">
        2010 El Camino Real #1349, Santa Clara, CA 95050
      </p>
    </div>
  );
};

export default ContactUsSection;
