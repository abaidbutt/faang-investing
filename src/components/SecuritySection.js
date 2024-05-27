import React from "react";
import { motion } from "framer-motion";

const securityFeatures = [
  {
    title: "Cloud Infrastructure",
    description:
      "Our application is built on the same reliable, scalable infrastructure used to power AMAZON.com’s global web properties. We ensure that the data can only be accessed by authorized roles and services with audited access.",
    image: "/aws.png",
  },
  {
    title: "Secure Broker Connection",
    description:
      "The linking and importing of your financial account information is done through our partner Plaid which handles credential management (including multi-factor authentication) for each institution it supports and provide your account transaction history and holdings structure to StockClubs using secure access tokens.",
    image: "/broker.png",
  },
  {
    title: "Data Encryption",
    description:
      "We have implemented the Advanced Encryption Standard (AES-256) and Transport Layer Security (TLS) keeps your personal information safe. We encrypt data in transit between our services and at rest.",
    image: "/encryption.png",
  },
];

const SecuritySection = () => {
  return (
    <section
      className="py-10 bg-[#009bcc] text-white mx-auto"
      style={{
        backgroundImage: `url(/security-back.png)`,
      }}
    >
      <div className="container mx-auto text-center">
        <h2 className="md:text-3xl text-xl font-bold">SECURITY IS OUR PRIORITY</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 md:gap-12 p-5">
          {securityFeatures.map((feature, index) => (
            <SecurityFeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          ))}
        </div>

        <button className="px-12 py-2 mt-10 bg-[#ffc730] text-white rounded">
          Learn More About Security
        </button>
      </div>
    </section>
  );
};

const SecurityFeatureCard = ({ title, description, image }) => {
  return (
    <div className="bg-white p-10 shadow-lg rounded-xl flex flex-col items-center mx-auto md:border-0 border-b-secondary border-b-4">
      <div className="mt-8 flex justify-center">
        <motion.img
          src={image}
          alt={title}
          className=""
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </div>
      <h3 className="text-xl font-semibold mt-6 text-secondary ">{title}</h3>
      <p className="mt-2 text-center text-lg text-secondary">{description}</p>
    </div>
  );
};

export default SecuritySection;
