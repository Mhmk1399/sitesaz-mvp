

import React from 'react'

// Define types for our data structures
type SocialLink = {
  href: string;
  icon: React.ReactNode;
};

type FooterLink = {
  title: string;
  items: { text: string; href: string }[];
};

// Define our data
const socialLinks: SocialLink[] = [
  {
    href: "#!",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg>
  },
  // Add other social links here...
];

const footerLinks: FooterLink[] = [
  {
    title: "Links",
    items: [
      { text: "Link 1", href: "#!" },
      { text: "Link 2", href: "#!" },
      { text: "Link 3", href: "#!" },
      { text: "Link 4", href: "#!" },
    ]
  },
  {
    title: "Links",
    items: [
{ text: "Link 1", href: "#!" },
      { text: "Link 2", href: "#!" },
      { text: "Link 3", href: "#!" },
      { text: "Link 4", href: "#!" },
    ]
  },
 

  // Add other footer link sections here...
];
export const EmailInoputFooter = ({ color, textColor ,font }: { color: string; textColor: string ;font:string }) => {
  return (
    <footer className="flex flex-col items-center text-center text-surface dark:bg-neutral-700 dark:text-white "  style={{ backgroundColor: color, color: textColor,fontFamily: font }}>
      <div className="container px-6 pt-6">
        <div className="mb-6 flex justify-center space-x-2">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              type="button"
              className="rounded-full  p-3 uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 " style={{ backgroundColor: color, color: textColor }}
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5" style={{ color: textColor }}>
                {link.icon}
              </span>
            </a>
          ))}
        </div>

    <div>
      <form action="">
        <div
          className="gird-cols-1 grid items-center justify-center gap-4 " style={{ backgroundColor: color, color: textColor }}>
          <div className="">
            <p>
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>

          <div className="relative md:mb-6" data-twe-input-wrapper-init>
            <input
              type="email"
              className="peer block min-h-[auto] bg-white w-full rounded  border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-0 transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInputEmail"
              placeholder="Email address" />
            <label
              htmlFor="exampleFormControlInputEmail"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6]  transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary" 
              >Email address
            </label>
          </div>

          
          
        </div>
      </form>
    </div>

    <div className="mb-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
           
          </p>
        </div>

        <div className="grid grid-cols-2 ">
          {footerLinks.map((section, index) => (
            <div key={index} className="mb-6" style={{ backgroundColor: color, color: textColor }}>
              <h5 className="mb-2.5 font-bold uppercase">{section.title}</h5>
              <ul className="mb-0 list-none">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a href={item.href}>{item.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
      </div>

     
    </footer>
  )
}
