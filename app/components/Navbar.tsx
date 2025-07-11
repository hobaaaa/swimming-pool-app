"use client";

import { assets } from "@/assets/assets";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef<HTMLUListElement>(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[%8] py-4 flex items-center justify-between z-50 ${
          isScroll ? "bg-white/50 backdrop-blur-lg shadow-person" : ""
        } duration-200`}
      >
        <motion.a
          href="/."
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={assets.logo}
            alt="logo"
            className={`w-40  cursor-pointer lg:mr-14 rounded-full py-3 px-5 ${
              isScroll ? "" : "bg-white/50 shadow-person "
            } duration-200`}
          />
        </motion.a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-10 rounded-full py-3 px-12   ${
            isScroll ? "" : "bg-white/50 shadow-person "
          } duration-200`}
          ref={sideMenuRef}
        >
          <motion.li
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a href="#">Anasayfa</a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a href="#services">Hizmetlerimiz</a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a href="#projects">Projelerimiz</a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a href="#about">Hakkımızda</a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a href="#contact">İletişim</a>
          </motion.li>
        </ul>
        <motion.a
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          href="#contact"
          className={`hidden  ${
            isScroll
              ? "lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full hover:bg-gray-500 hover:text-white transition-all duration-300 bg-white"
              : ""
          }`}
        >
          Fiyat
        </motion.a>
        <button className="cursor-pointer md:hidden ml-3">
          <Image
            src={assets.menu_black}
            alt="menu"
            className="w-6"
            onClick={openMenu}
          />
        </button>
        {/* MOBILE MENU */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-mobil-background transition duration-500"
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt="close-menu"
              className="w-5 cursor-pointer dark:hidden"
            />
          </div>

          <li>
            <a className="font-ovo" onClick={closeMenu} href="#top">
              Anasayfa
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#services">
              Hizmetlerimiz
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#projects">
              Projelerimiz
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#about">
              Hakkımızda
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#contact">
              İletişim
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
