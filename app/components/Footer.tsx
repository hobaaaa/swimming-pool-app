"use client";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <>
      <div className="mt-20">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center md:flex gap-20 justify-center items-center p-4 mx-5"
        >
          <p className="text-gray-400">
            <span className="font-semibold text-gray-700">Adres: </span>
            Şemikler Mahallesi, Gümüşler Bulvarı, No:124/A ve 124/B
            Merkezefendi/DENİZLİ
          </p>
          <p className="text-gray-400 pt-5 md:pt-0">
            <span className="font-semibold text-gray-700">Telefon: </span>0
            (531) 701 5664
          </p>
          <p className="text-gray-400 pt-5 md:pt-0">
            <span className="font-semibold text-gray-700">Mail: </span>
            info@safiryapı.com.tr
          </p>
        </motion.div>
        <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 gap-8">
          <p className="text-gray-400">
            © 2025 Safir Yapı. All rights reserved.
          </p>
          <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
            <li>
              <motion.a
                href="#"
                target="_blank"
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                İnstagram
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#"
                target="_blank"
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Facebook
              </motion.a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
