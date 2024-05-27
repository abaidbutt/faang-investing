import React from 'react';
import { motion } from 'framer-motion';

const InvestorReportsSection = () => {
  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Investor Reports</h2>
        <p className="mt-4">Receive personalized investor reports and understand how your trading activities contribute to your overall wealth.</p>
        <div className="mt-8 flex justify-center">
          <motion.img
            src="/images/investor-reports.png"
            alt="Investor Reports"
            className="rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>
      </div>
    </section>
  );
};

export default InvestorReportsSection;
