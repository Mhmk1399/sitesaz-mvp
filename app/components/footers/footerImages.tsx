import Image from 'next/image';
import React from 'react'
import vip  from '../../../public/images/vip.jpg'
import silver from '../../../public/images/silver.jpg'
import gold from '../../../public/images/gold.jpg.jpg'
interface FooterImage {
  src: string;
  alt: string;
}

const footerImages: FooterImage[] = [
  { src: vip.src , alt: "City 113" },
  { src: gold.src , alt: "City 113" },
  { src: silver.src , alt: "City 113" },
  { src: vip.src , alt: "City 113" },
  { src: gold.src , alt: "City 113" },
  { src: silver.src , alt: "City 113" },
];

export const SmallImageFooter = ({ color, textColor }: { color: string; textColor: string }) => {
  return (
    <footer className=" text-center " style={{ backgroundColor: color, color: textColor }}>
      <div className="container p-6">
        <div className="grid gap-3 md:grid-cols-3">
          {footerImages.map((image, index) => (
            <div key={index} className="mb-6 lg:mb-0">
              <Image
                src={image.src}
                alt={image.alt}
                width={100}
                height={100}
                className="w-full rounded-md shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

   
    </footer>
  );
}
