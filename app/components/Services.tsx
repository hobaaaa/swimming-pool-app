"use client";
import { serviceData } from "@/assets/assets";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <>
      <motion.div
        id="services"
        className=" w-full px-[12%] py-10 scroll-mt-20 min-h-screen flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-2 text-lg"
        >
          Ne sunuyoruz
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-5xl"
        >
          Servislerimiz
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="max-w-2xl mx-auto text-center mt-5 mb-12"
        >
          Havuz, Spa ve Sauna üretiminde yılların verdiği tecrube ve yenilikçi
          bakış açımızla siz değerli müşterilerimize en iyi hizmeti vermekten
          gurur duyuyoruz.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="grid grid-cols-auto gap-6 my-10"
        >
          {serviceData.map(({ icon, title, description }, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={index}
              className="border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:bg-light-hover hover:-translate-y-1 hover:bg-hover hover-shadow duration-500"
            >
              <Image src={icon} alt={title} className="w-10" />
              <h3 className="text-lg my-4 font-semibold text-gray-700 dark:text-gray-200">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-5">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Services;
