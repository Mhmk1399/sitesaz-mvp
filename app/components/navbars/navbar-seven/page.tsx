"use client";
import { HomeIcon, UserIcon, CogIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
const navLinks = [
  { name: "خانه", href: "#", icon: HomeIcon, id: 1 },
  { name: "پروفایل", href: "#", icon: UserIcon, id: 2 },
  { name: "فروشگاه", href: "#", icon: CogIcon, id: 3 },

];
const NavbarSeven = ({ color, textColor ,font ,logo }: { color: string; textColor: string;font:string ; logo: string  }) => {
  const isOpen=false 

  return (
    <div className="flex "style={{ backgroundColor: color, color: textColor,fontFamily: font }}>
      {/* Sidebar */}
      <div
        className={` w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }   transition-transform duration-300 ease-in-out z-50`}
        style={{ backgroundColor: color, color: textColor }}>
        {/* Logo */}
        {!logo  && <div className=" text-2xl font-bold  ">
          LOGO
        </div>}
        {logo && <Image className="w-10 " src={logo} alt="Logo" width={64} height={64}/>}
        {/* Nav Items */}
        <nav>
          <ul className="mt-10 space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center px-2 py-2 hover:bg-gray-700 rounded-md"
              >
                <HomeIcon className="h-6 w-6 mr-2" /> خانه
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-2 py-2 hover:bg-gray-700 rounded-md"
              >
                <UserIcon className="h-6 w-6 mr-2" /> پروفایل
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-2 py-2 hover:bg-gray-700 rounded-md"
              >
                <CogIcon className="h-6 w-6 mr-2" /> درباره ما
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-2 py-2 hover:bg-gray-700 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 mr-2"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
                Log Out
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col"style={{ backgroundColor: color, color: textColor,fontFamily: font }}>
        <div className=" p-4 flex items-center justify-center ">
          <div className=" font-bold flex flex-row items-center">
          {!logo  && <div className=" text-xl font-bold  ">
          LOGO
        </div>}
        {logo && <img className="w-14 " src={logo} alt="Logo" />}
           {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className=" hover:text-gray-600 mx-3 text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        {/* Main Content */}
        
      </div>
    </div>
  );
};
export default NavbarSeven;
