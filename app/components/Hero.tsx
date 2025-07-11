"use client";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <>
      <div className=" bg-[url(@/assets/havuz.jpg)] bg-cover bg-center">
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col justify-center items-center gap-4">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-black/70 p-4 rounded-xl flex flex-col justify-center items-center text-white"
          >
            <motion.h3
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-2 text-xl md:text-2xl mb-3 "
            >
              Denizli&apos;de uzman bir havuz firması arıyorsanız
            </motion.h3>

            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-3xl sm:text-6xl lg:text-[66px]"
            >
              Safir Yapı hep yanınızda.
            </motion.h1>
            <motion.h3
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center gap-2 text-2xl lg:text-3xl mb-3 mt-3"
            >
              Hemen ücretsiz fiyat teklifi alın!{" "}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="max-w-2xl mx-auto"
            >
              Denizli havuz imalatı ustası Safir Yapı. Safir Yapı olarak havuz
              imalatı, süs havuzu imalatı, yüzme havuzu imalatı, sauna ve spa
              imalatında bir numarayız.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="flex border-2 py-4 px-8 rounded-full mt-5 bg-black  text-white hover:bg-gray-800 duration-500"
            >
              Teklif Al
            </motion.a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
