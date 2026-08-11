"use client";
import { motion } from "framer-motion";
import { SiMongodb, SiExpress, SiReact } from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat px-5 py-20 text-white md:px-15 lg:px-18"
      style={{
        backgroundImage: `url(${"../Images/about.png"})`,
      }}
    >
      {/* Content */}
      <div className="grid min-h-[70vh] w-full items-center lg:grid-cols-[0.9fr_1.4fr]">
        {/* Left */}
        <div className="hidden lg:block" />
        <div className="flex flex-col justify-center">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-10 text-5xl font-extrabold leading-tight md:text-6xl"
          >
            Hello!
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="max-w-3xl text-lg font-semibold leading-8 text-white md:text-xl"
          >
            Hi, my name is{" "}
            <span className="font-extrabold text-black">BRINCI</span>, an
            aspiring software engineer dedicated to crafting clean, functional,
            and highly scalable applications.
          </motion.p>

          {/* Skills Icons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
            className="mt-10 flex items-start gap-12"
          >
            <div className="mt-8 flex items-start gap-12">
              <div className="flex flex-col items-center">
                <div className="mt-5 flex items-start gap-14">
                  {/* MongoDB */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="flex flex-col items-center"
                  >
                    <SiMongodb className="text-5xl text-green-500" />
                    <span className="mt-4 text-sm font-bold">MONGODB</span>
                  </motion.div>

                  {/* Express */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                    className="flex flex-col items-center"
                  >
                    <SiExpress className="text-5xl text-white" />
                    <span className="mt-4 text-sm font-bold">EXPRESS</span>
                  </motion.div>

                  {/* React */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.55 }}
                    className="flex flex-col items-center"
                  >
                    <SiReact className="text-5xl text-cyan-400" />
                    <span className="mt-4 text-sm font-bold">REACT</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
