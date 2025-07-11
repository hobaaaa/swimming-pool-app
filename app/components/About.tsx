"use client";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <motion.div
        id="about"
        className="w-full px-[12%] py-10 scroll-mt-20 min-h-screen flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h4
          className="text-center mb-2 text-lg"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Bizi Tanıyın
        </motion.h4>
        <motion.h2
          className="text-center text-5xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Hakkımızda
        </motion.h2>
        <motion.div
          className="flex w-full flex-col lg:flex-row items-center justify-center gap-20 my-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-full sm:w-150 rounded-3xl max-w-none"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Image
              src={assets.giriş}
              alt="giriş"
              className="w-full rounded-3xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <p className="mb-10 max-w-2xl ">
              Havuzlar, spa ve sauna konularında uzman ekibimizle, hayalinizdeki
              tesisleri hayata geçiriyoruz. Yılların getirdiği deneyim ve
              profesyonellikle, müşterilerimize en iyi hizmeti sunuyor ve
              projelerini en ince detayına kadar düşünüyoruz. Her adımda
              kaliteyi ve güvenilirliği ön planda tutarak, müşterilerimizin
              beklentilerini aşmayı hedefliyoruz. Sadece havuz, spa ve sauna
              inşası değil, aynı zamanda bakım ve onarım konularında da size
              yardımcı olmak için buradayız. Bizimle çalışarak, hayalinizdeki
              tesislere kavuşmanın keyfini yaşayın!
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default About;
