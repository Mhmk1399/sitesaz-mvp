"use client";
import React, { useState, useEffect } from "react";
import { HomeIcon, UserIcon, CogIcon } from "@heroicons/react/24/outline";

import {
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "خانه", href: "#", icon: HomeIcon, id: 1 },
  { name: "پروفایل", href: "#", icon: UserIcon, id: 2 },
  { name: "فروشگاه", href: "#", icon: CogIcon, id: 3 }
];

const iconList = [
  { icon: <FaUser /> },
  { icon: <FaHeart /> },
  { icon: <FaShoppingCart /> }
];

const NavbarThree = ({
  color,
  textColor,
  font,
  logo
}: {
  color: string;
  textColor: string;
  font: string;
  logo: string;
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth > 769);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 769);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleBarsIconClick = () => {
    toggleModal();
  };
  return (
    <>
      {!isMobile ? (
        // Laptop Navbar Code Here
        <nav
          style={{ backgroundColor: color, color: textColor, fontFamily: font }}
        >
          <div
            className="flex justify-between mx-auto items-center py-4 px-24"
            style={{ backgroundColor: color, color: textColor }}
          >
            <div className=" font-bold text-xl">Logo</div>
            <ul className="flex gap-8  items-center justify-center text-center cursor-pointer">
              {navLinks.map((link, index) => (
                <li key={index} className="text-white text-sm">
                  <Link href="#"> {link.name}</Link>
                </li>
              ))}
            </ul>
            <ul
              className="flex  gap-6 items-center cursor-pointer"
              style={{ backgroundColor: color, color: textColor }}
            >
              {iconList.map((item, index) => (
                <div key={index}>{item.icon}</div>
              ))}
            </ul>
          </div>
        </nav>
      ) : (
        // Mobile Navbar Code Here
        <nav
          className={`  py-4 px-4`}
          style={{ backgroundColor: color, color: textColor }}
        >
          <div
            className="mx-auto flex justify-between items-center "
            style={{ backgroundColor: color, color: textColor }}
          >
            {!logo && <div className=" text-2xl font-bold  ">LOGO</div>}
            {logo && <Image className="w-16 m-4" src={logo} alt="Logo" width={64} height={64}/>}
            <div className="flex justify-end items-center gap-6  cursor-pointer">
              {iconList.map((item, index) => (
                <div
                  key={index}
                  onClick={
                    index === iconList.length - 1
                      ? handleBarsIconClick
                      : undefined
                  }
                >
                  {item.icon}
                </div>
              ))}
              <FaBars
                onClick={handleBarsIconClick}
                className="cursor-pointer"
              />
            </div>
          </div>
          {showModal && (
            <div
              className="absolute inset-0 flex justify-center items-center z-10"
              style={{ backgroundColor: color, color: textColor }}
            >
              <div
                className={`absolute inset-0 `}
                style={{ backgroundColor: color, color: textColor }}
              />
              <FaTimes
                className="absolute top-6 right-4 cursor-pointer"
                onClick={toggleModal}
                style={{ fontSize: "16px" }}
              />
              <div className="relative  w-full">
                <div className="flex flex-col gap-8 items-center justify-center h-full">
                  {navLinks.map((link, index) => (
                    <span
                      key={index}
                      className=" font-light text-2xl cursor-pointer hover:opacity-70"
                    >
                      <Link href="#"> {link.name}</Link>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </nav>
      )}
    </>
  );
};

export { NavbarThree};
