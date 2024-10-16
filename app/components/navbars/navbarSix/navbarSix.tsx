"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavbarSix= ({ color, textColor , font,logo}: { color: string; textColor: string;font:string;  logo: string   }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const icons = document.querySelectorAll('.icon');
  icons.forEach (icon => {  
    icon.addEventListener('click', () => {
      icon.classList.toggle("open");
    });
  });
  return (
    <>
      <div className="flex flex-row overflow-hidden mx-auto" style={{ backgroundColor: color, color: textColor,fontFamily: font }}>
        {/* Sidebar */}
        <div style={{ backgroundColor: color, color: textColor }}
          className={`absolute top-0 left-1/2 transform -translate-x-1/2 z-40  bg-opacity-90  w-48 px-4 h-auto overflow-y-auto transition-transform ${
            isSidebarOpen ? "translate-y-0" : "-translate-y-full"
          } ease-in-out duration-500 rounded-lg shadow-lg`}
          id="sidebar"
        >
          <div className="p-4 text-start ">
         
            <ul className="mt-4 font-semibold" dir="rtl">
              <li className="mb-2">
                <Link href="/" className="block ">
                  خانه
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/guarantee" className="block 0">
                  درباره ما
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/hard-drive-repair"
                  className="block"
                >
                    خدمات
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/Store" className="block ">
                فروشگاه
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col overflow-hidden"style={{ backgroundColor: color, color: textColor }}>
          {/* Navbar */}
          <div className="bg-gradient-to-r rounded-lg shadow-lg w-full">
            <div className="container mx-auto">
              <div className="flex justify-between items-center py-4 px-2">
                {/* Left: Image */}
                <div className="flex-shrink-0"style={{ backgroundColor: color, color: textColor }}>
                  <button
                    className="text-orange-500 text-2xl font-bold  transition-transform transform hover:scale-110"
                    onClick={toggleSidebar}
                  >
                    <svg
                      height="35px"
                      width="35px"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 60.671 60.671"
                      xmlSpace="preserve"
                      fill="#ff9500"
                      stroke="#ff9500"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <g>
                          <g>
                            <ellipse
                              style={{ fill: "#ef4444" }}
                              cx="30.336"
                              cy="12.097"
                              rx="11.997"
                              ry="12.097"
                            ></ellipse>
                            <path
                              style={{ fill: "#ef4444" }}
                              d="M35.64,30.079H25.031c-7.021,0-12.714,5.739-12.714,12.821v17.771h36.037V42.9 C48.354,35.818,42.661,30.079,35.64,30.079z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </button>
                </div>

                {/* Center: Search Bar */}
                <div className="flex-1 mx-4" dir="rtl">
                  <div
                    id="search-bar"
                    className="w-full bg-orange-400 rounded-md shadow-lg"
                    dir="rtl"
                  >
                    <form className="flex items-center justify-center p-2">
                      <input
                        type="text"
                        placeholder=" سریع محصولات"
                        className="w-full rounded-md px-2 py-1 mx-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                      />
                      <button
                        type="submit"
                        className="bg-gray-800 text-white rounded-md px-4 py-1 ml-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transition-transform transform hover:scale-105"
                      >
                        جستجو
                      </button>
                    </form>
                  </div>
                </div>

                {/* Right: SVG Button */}
                <div className="flex-shrink-0 font-bold text-white text-2xl">
                {!logo  && <div className=" text-2xl font-bold  ">
          LOGO
        </div>}
        {logo && <Image className="w-16 m-4" src={logo} alt="Logo" width={64} height={64}/>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 ease-in-out duration-300 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeSidebar}
      ></div>
    </>
  );
};

export { NavbarSix };
