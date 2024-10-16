"use client";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const NavbarOne = ({ color, textColor ,font , logo}: { color: string; textColor: string;font: string; logo: string  }) => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "خانه" },
    { id: 2, text: "کمپانی" },
    { id: 3, text: "منابع" },
    { id: 4, text: "درباره ما" },
    { id: 5, text: "ارتباط با ما" },
  ];

  return (
    <div className=" flex justify-between items-center h-20  mx-auto px-3  " style={{ backgroundColor: color, color: textColor,fontFamily: font }} >
      {/* Logo */}
      {!logo  && <div className=" text-2xl font-bold">
          LOGO
        </div>}
        {logo && <Image  src={logo} alt="Logo" width={64} height={64}/>}
      {/* Desktop Navigation */}
      <ul className="hidden ">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4  rounded-xl m-2 cursor-pointer duration-300"
          >
            <Link href="#"> {item.text}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="   " >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "absolute left-0 top-0  h-full border-r w-[60%]  ease-in-out duration-500 z-10 p-5"
            : "ease-in-out w-[60%] duration-500 absolute top-0 bottom-0 left-[-100%]"
        }
        style={{ backgroundColor: color, color: textColor }}>
        {/* Mobile Logo */}
        {!logo  && <div className=" text-2xl font-bold  ">
          LOGO
        </div>}
        {logo && <Image className="w-16 m-4" src={logo} alt="Logo" width={64} height={64}/>}
        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl duration-300  cursor-pointer hover:bg-white "
            >
            <Link href="#"> {item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};export default NavbarOne;
