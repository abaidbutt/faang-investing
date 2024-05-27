import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const features = [
  {
    title: "Connect your brokerage accounts",
    description:
      "and get access to trading ideas, aggregated stats and discussions in your tech investing community right away.",
    image: "/first-group-1.png",
    image2: "/first-group-2.png",
    order: 1,
    background: "#3994E9",
    srcback: "/connect-back.png",
  },
  {
    title: "Track your net worth",
    description:
      "and automatically track your net worth and spend less time managing your personal finances.",
    image: "/track-1.png",
    image2: "/track-2.png",
    order: -1, // Changed to 3
    background: "#31CE5D",
    srcback: "/track-back.png",
  },
  {
    title: "Automate monitoring",
    description:
      "and automate monitoring of your trading accounts 24/7. Control your risks and manage your portfolio like a PRO.",
    image: "/automate-1.png",
    image2: "/automate-2.png",
    order: -1, // Changed to 2
    background: "#FBBC12",
    srcback: "/automate-back.png",
  },
  {
    title: "Receive personalized investor reports",
    description:
      "and understand how your trading activities contribute to your overall wealth.",
    image: "/investor-report-1.png",
    image2: "/investor-report-2.png",
    order: 1,
    background: "#9F73C2",
    srcback: "/report-back.png",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-blue-50">
      <div
        style={{
          background: features[0].background,
          backgroundImage: `url(${features[0].srcback})`,
        }}
      >
        <div className="flex flex-col gap-6 py-12 px-5">
          <FeatureCard
            title={features[0].title}
            description={features[0].description}
            image={features[0].image}
            image2={features[0].image2}
            order={features[0].order}
            background={features[0].background}
            srcback={features[0].srcback}
          />
        </div>
      </div>
      <div
        style={{
          background: features[1].background,
          backgroundImage: `url(${features[1].srcback})`,
        }}
      >
        <div className="flex flex-col gap-6 py-12 px-5">
          <FeatureCard2
            title={features[1].title}
            description={features[1].description}
            image={features[1].image}
            image2={features[1].image2}
            order={features[1].order}
            background={features[1].background}
            srcback={features[1].srcback}
          />
        </div>
      </div>
      <div
        style={{
          background: features[2].background,
          backgroundImage: `url(${features[2].srcback})`,
        }}
      >
        <div className="flex flex-col gap-6 py-12 px-5">
          <FeatureCard
            title={features[2].title}
            description={features[2].description}
            image={features[2].image}
            image2={features[2].image2}
            order={features[2].order}
            background={features[2].background}
            srcback={features[2].srcback}
          />
        </div>
      </div>
      <div
        style={{
          background: features[3].background,
          backgroundImage: `url(${features[3].srcback})`,
        }}
      >
        <div className="flex flex-col gap-6 py-12 px-5">
          <FeatureCard2
            title={features[3].title}
            description={features[3].description}
            image={features[3].image}
            image2={features[3].image2}
            order={features[3].order}
            background={features[3].background}
            srcback={features[3].srcback}
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ title, description, image, image2, order, srcback }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (isInView) {
      controls.start({ scale: 1 });
    }
  }, [controls, isInView]);

  const handleHover = async () => {
    await controls.start({ scale: 1.15 });
  };

  const handleHoverExit = async () => {
    await controls.start({ scale: 1 });
  };

  return (
    <div
      className={`bg-white p-6 shadow-lg flex flex-col md:flex-row items-center h-full rounded-xl order-${order}`}
    >
      <div className="bg-white p-6 rounded-[15px] w-full md:w-1/2 md:ml-6 mt-4 md:mt-0">
        <h3 className="md:text-4xl text-2xl mb-2 md:px-12 px-2 text-secondary font-medium">
          <span className="font-semibold">{title} </span>
          {description}
        </h3>
      </div>
      <motion.div
        ref={ref}
        whileHover={{ scale: 1.05 }}
        animate={controls}
        transition={{ type: "spring", stiffness: 300 }}
        onHoverStart={handleHover}
        onHoverEnd={handleHoverExit}
        className="md:order-last order-first"
      >
        <img
          src={isInView ? image : image2}
          alt={title}
          className="h-full object-contain rounded-md flex-1"
        />
      </motion.div>
    </div>
  );
};

const FeatureCard2 = ({
  title,
  description,
  image,
  image2,
  order,
  srcback,
}) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (isInView) {
      controls.start({ scale: 1 });
    }
  }, [controls, isInView]);

  const handleHover = async () => {
    await controls.start({ scale: 1.15 });
  };

  const handleHoverExit = async () => {
    await controls.start({ scale: 1 });
  };

  return (
    <div
      className={`bg-white p-6 shadow-lg flex md:flex-row flex-col items-center h-full rounded-xl order-${order}`}
    >
      <motion.div
        ref={ref}
        whileHover={{ scale: 1.05 }}
        animate={controls}
        transition={{ type: "spring", stiffness: 300 }}
        onHoverStart={handleHover}
        onHoverEnd={handleHoverExit}
      >
        <img
          src={isInView ? image : image2}
          alt={title}
          className="h-full object-contain rounded-md flex-1"
        />
      </motion.div>
      <div className="bg-white p-6 rounded-[15px] w-full md:w-1/2 md:ml-6 mt-4 md:mt-0">
        <h3 className="md:text-4xl text-2xl mb-2 md:px-12 px-2 text-secondary font-medium">
          <span className="font-semibold">{title} </span>
          {description}
        </h3>
      </div>
    </div>
  );
};

export default FeaturesSection;
