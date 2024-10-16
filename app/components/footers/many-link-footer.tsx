import React from "react";
import { FaInstagram, FaTwitter, FaTelegram } from 'react-icons/fa';

interface SocialLink {
  href: string;
  icon: React.ReactNode;
}

interface FooterSection {
  title: string;
  items: { text: string; href: string }[];
}

interface ContactInfo {
  icon: React.ReactNode;
  text: string;
}

interface FooterProps {
  socialLinks: SocialLink[];
  sections: FooterSection[];
  contactInfo: ContactInfo[];
  copyright: string;
  color: string;
  textColor: string;
}

export const ManyLinkFooter: React.FC<FooterProps> = ({ color, textColor }: { color: string; textColor: string }) => {
  const socialLinks = [
    { href: "https://instagram.com", icon: <FaInstagram /> },
    { href: "https://twitter.com", icon: <FaTwitter /> },
    { href: "https://telegram.org", icon: <FaTelegram /> }
  ];

  const sections = [
    {
      title: "Products",
      items: [
        { text: "Angular", href: "#!" },
        { text: "React", href: "#!" },
        { text: "Angular", href: "#!" },
        { text: "React", href: "#!" },
        { text: "Angular", href: "#!" },
        { text: "React", href: "#!" },
        { text: "Angular", href: "#!" },
        { text: "React", href: "#!" },
        { text: "Angular", href: "#!" },
        { text: "React", href: "#!" },
        { text: "Angular", href: "#!" },
        { text: "React", href: "#!" }
      ]
    },
    {
      title: "Products",
      items: [
        { text: "Angular", href: "#!" },
        { text: "React", href: "#!" },
        { text: "Angular", href: "#!" },
        { text: "React", href: "#!" },
        { text: "Angular", href: "#!" },
        { text: "React", href: "#!" },
        { text: "Angular", href: "#!" },
        { text: "React", href: "#!" },
        { text: "Angular", href: "#!" },
        { text: "React", href: "#!" },
        { text: "Angular", href: "#!" },
        { text: "React", href: "#!" }
      ]
    }
    // ... other sections
  ];
  const contactInfo = [
    { icon: ` `, text: "New York, NY 10012, US" },
    { icon: ` `, text: "info@example.com" }
    // ... other contact info
  ];

  return (
    <div >
     
      <footer className=" text-center text-surface/75 lg:text-left force-sm w-full" style={{ backgroundColor: color, color: textColor }}>
        <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between">
          <div className="me-12 hidden lg:block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div className="flex justify-center">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="me-6 [&>svg]:h-4 [&>svg]:w-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >{link.icon}</svg>
              </a>
            ))}
          </div>
        </div>

        <div className="mx-3 py-10 text-center md:text-left  gap-2">
          <div className="grid-cols-2 grid">
            {sections.map((section, index) => (
              <div className="w-fit col-span-1 text-center mx-auto" key={index}>
                <h6 className="mb-4 w-fit flex justify-center font-semibold uppercase ">
                  {section.title}
                </h6>
                {section.items.map((item, itemIndex) => (
                  <p key={itemIndex} className="mb-4 w-full text-center ">
                    <a className="text-center w-full" href={item.href}>{item.text}</a>
                  </p>
                ))}
              </div>
            ))}
            <div>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Contact
              </h6>
              {contactInfo.map((info, index) => (
                <p
                  key={index}
                  className="mb-4 flex items-center justify-center md:justify-start"
                >
                  <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                    {info.icon}
                  </span>
                  {info.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
