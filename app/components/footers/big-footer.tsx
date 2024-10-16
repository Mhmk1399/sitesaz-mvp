
interface FooterLink {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}
const footerSections: FooterSection[] = [
  {
    title: "شرکت",
    links: [
      { name: "درباره ما", href: "#" },
      { name: "فرصت‌های شغلی", href: "#" },
      { name: "مرکز برند", href: "#" },
      { name: "وبلاگ", href: "#" },
    ]
  },
  {
    title: "مرکز پشتیبانی",
    links: [
      { name: "سرور دیسکورد", href: "#" },
      { name: "توییتر", href: "#" },
      { name: "فیسبوک", href: "#" },
      { name: "تماس با ما", href: "#" },
    ]
  },
  {
    title: "قوانین",
    links: [
      { name: "حریم خصوصی", href: "#" },
      { name: "مجوزها", href: "#" },
      { name: "شرایط و ضوابط", href: "#" },
    ]
  },
  {
    title: "دانلود",
    links: [
      { name: "آی‌او‌اس", href: "#" },
      { name: "اندروید", href: "#" },
      { name: "ویندوز", href: "#" },
      { name: "مک‌او‌اس", href: "#" },
    ]
  },
]

const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
      </svg>
    )
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
      </svg>
    )
  },  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
      </svg>
    )
  },  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
      </svg>
    )
  },  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
      </svg>
    )
  },  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
      </svg>
    )
  },  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
      </svg>
    )
  },
  // Add other social links here...
]

export const BigFooter = ({ color, textColor,font }: { color: string; textColor: string;font:string }) => {
 


  return (
    <footer className= 'text-center force-sm '  style={{ backgroundColor: color, color: textColor,fontFamily: font }}>
      <div className="mx-auto ">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 ">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h2 className="mb-6 text-sm font-semibold  uppercase dark:text-white" style={{ color: textColor }}>{section.title}</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-4">
                    <a href={link.href} className="hover:underline " style={{ color: textColor }}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="px-4 py-6  dark:bg-gray-700 " style={{ backgroundColor: color }}>
          <span className="text-sm   text-center" style={{ color: textColor }}>© 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights Reserved.</span>
          <div className="flex mt-4 justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} className=" hover:text-gray-900 dark:hover:text-white"  style={{ color: textColor }}>
                {link.icon}
                <span className="sr-only" style={{ color: textColor }}>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
