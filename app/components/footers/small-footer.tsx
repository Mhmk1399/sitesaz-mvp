import React from 'react';

export const SmallFooter = ({ color, textColor }: { color: string; textColor: string }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { text: 'About', href: '#' },
     { text: 'Press', href: '#' },
    { text: 'Licensing', href: '#' },
    { text: 'Contact', href: '#' },
    
    { text: 'Careers', href: '#' },
    { text: 'Support', href: '#' },
    { text: 'Terms', href: '#' },
   
    { text: 'Privacy', href: '#' },
  ];

  const companyInfo = {
    name: 'Flowbite™',
    website: 'https://flowbite.com/',
  };

  return (
    <footer className="rounded-lg shadow m-2  " style={{ backgroundColor: color, color: textColor }}>
      <div className="w-full mx-auto ">
        <span className="text-sm  text-center m-1 ">
          © {currentYear}{' '}
          <a href={companyInfo.website} className="hover:underline">
            {companyInfo.name}
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap justify-evenly mt-3 p-2 text-sm font-medium  items-center  mx-auto">
          {footerLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className={`hover:underline ${
                  index < footerLinks.length - 1 ? 'mx-2 ' : ''
                }`}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
