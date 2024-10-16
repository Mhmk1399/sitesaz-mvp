"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavbarTwo = ({ color, textColor,font , logo}: { color: string; textColor: string ; font:string ; logo:string }) => {
  const [navTwo, setNavTwo] = useState(false);

  const handleNavTwo = () => {
    setNavTwo(!navTwo);
  };
  
  const navItems2 = [
    { id: 1, text: "خانه" },
    { id: 2, text: "کمپانی" },
    { id: 3, text: "پروفایل" },
    { id: 4, text: "فروشگاه" },
    // { id: 6, text: "Login" },
  ];
  return (
    <div className="">
    <nav className=" p-4 mx-auto" style={{ backgroundColor: color, color: textColor,fontFamily: font }}>
      <div className="bg-transparent flex justify-between items-center h-14 max-w-[1240px] mx-auto px-4 " style={{ backgroundColor: color, color: textColor }}>
      {!logo  && <div className=" text-2xl font-bold  ">
          LOGO
        </div>}
        {logo && <Image className="w-16" src={logo} alt="Logo" width={64} height={64} />}
        {/* Desktop Navigation */}

        <ul className="hidden "style={{ backgroundColor: color, color: textColor,fontFamily: font }}>
          {navItems2.map((item) => (
            <li key={item.id} className=" mx-3">
              <Link href="#">{item.text}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNavTwo} className="ml-auto" style={{ backgroundColor: color, color: textColor }}>
          {navTwo ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul 
          className={
            navTwo
              ? "absolute ease-in-out top-16 right-0 w-[50%] h-[90%] bottom-0 border-r border-r-gray-500 duration-500 z-10"
              : "ease-in-out w-[50%] duration-500 absolute top-16 h-[90%] right-[-100%]"
          }
          style={{ backgroundColor: color, color: textColor }} >
          {/* Mobile Logo */}
          {!logo  && <div className=" text-2xl font-bold  text-right">
          LOGO
        </div>}
        {logo && <Image className="w-16 m-4" src={logo} alt="Logo" width={64} height={64}/>}
          {/* Mobile Navigation Items */}
          {navItems2.map((item) => (
            <li
              key={item.id}
              className="p-3 border-b items-center rounded-md  cursor-pointer text-right  z-10"
            >
              <Link href="#"> {item.text}</Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-row items-center justify-center" style={{ backgroundColor: color, color: textColor }}>
          <div className="">
            <input
              type="text"
              className="bg-slate-50 text-gray-600 rounded-md pl-4 pr-10 py-2 focus:outline-none hidden "
              placeholder="Search..."
            />
          </div>
                 </div>
      </div>
    </nav>
    </div>
  );
};

export default NavbarTwo;
