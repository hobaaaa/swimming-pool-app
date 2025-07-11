"use client";
import { assets, workData } from "@/assets/assets";
import { motion } from "motion/react";
import Image from "next/image";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-background min-h-screen flex flex-col"
    >
      <motion.div
        className="flex-1 flex flex-col items-center justify-center"
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
          Referanslarımız
        </motion.h4>
        <motion.h2
          className="text-center text-5xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Son projelerimiz
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto text-center mt-5 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Hayalinizdeki havuzu inşa etmek veya mevcut havuzunuzu yenilemek mi
          istiyorsunuz? Profesyonel ekibimizle, size en iyi hizmeti sunmak için
          buradayız. Kaliteli malzemeler ve uzmanlıkla, havuzunuzun her
          aşamasında yanınızdayız. Müşteri memnuniyetini ön planda tutarak,
          beklentilerinizi aşmayı hedefliyoruz. Bizimle iletişime geçin ve
          hayalinizdeki havuza kavuşmanın keyfini çıkarın!
        </motion.p>
      </motion.div>
      <motion.div
        className="grid grid-cols-auto gap-6 my-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            className="aspect-2/3 bg-cover bg-no-repeat bg-center rounded-lg relative cursor-pointer group flex items-center justify-center "
            style={{ backgroundImage: `url(${project.bgImage})` }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="absolute left-1/2 transition-all duration-500 -translate-x-1/2 -translate-y-1/2
              w-10/12 bg-white py-3 px-5 rounded-md flex items-center justify-between z-10
              top-4/5 group-hover:top-[75%]"
            >
              <div>
                <h3 className="font-semibold text-black">{project.title}</h3>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-11 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition duration-500">
                <Image src={assets.send_icon} alt="send-icon" className="w-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
