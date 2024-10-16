"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HomeIcon, UserIcon, CogIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
const navbarLinks = [
  { name: "خانه", href: "#", icon: HomeIcon, id: 1 },
  { name: "پروفایل", href: "#", icon: UserIcon, id: 2 },
  { name: "فروشگاه", href: "#", icon: CogIcon, id: 3 },

];
const navbarLinks2 = [
  { name: "خانه", href: "#", icon: HomeIcon, id: 1 },
  { name: "پروفایل", href: "#", icon: UserIcon, id: 2 },
  { name: "فروشگاه", href: "#", icon: CogIcon, id: 3 },

];
const NavbarFive = ({ color, textColor, font, logo }: { color: string; textColor: string; font: string ;  logo: string   }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" p-4" style={{ backgroundColor: color, color: textColor, fontFamily: font }}>
      <div className="container mx-auto flex justify-between items-center">
      {!logo  && <div className=" text-2xl font-bold  ">
          لوگو
        </div>}
        {logo && <Image className="w-16 m-4" src={logo} alt="Logo" width={64} height={64}/>}
        <button
          className=" "
          onClick={() => setIsOpen(!isOpen)}
        >
          منو
        </button>
        <ul className="hidden  space-x-6">
          {navbarLinks.map((link) => (
            <li key={link.name}>
              <Link href="#" className="">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <button className=" rounded-xl p-4">ورود</button>
      </div>
      {isOpen && (
        <div className="absolute inset-0 bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-6 top-0 bottom-0 right-0 h-full bg-gray-800">
          <button
            className=" text-4xl absolute top-6 right-6 "
            onClick={() => setIsOpen(false)}
          >
            X
          </button>
          {navbarLinks2.map((link) => (
            <Link
              key={link.name}
              href="#"
              className=" text-2xl text-white hover:text-gray-300"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavbarFive;
