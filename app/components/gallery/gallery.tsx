"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import defult from "../../../public/images/vip.jpg";
const Gallery = ({
  homePalete,
  formDataGallery,
  fontStyle
}: {
  homePalete: {
    textColor: string;
    navbar_footer: string;
    navbar_footertext: string;
    background: string;
    primary: string;
    secondary: string;
  };
  formDataGallery: {
    sectionOneH1: string;
    sectionOneP: string;
    boxImage1: string;
    image1File: string;
    boxImage2: string;
    image2File: string;
    boxImage3: string;
    image3File: string;
    boxImage4: string;
    image4File: string;
    boxImage5: string;
    image5File: string;
    boxImage6: string;
    image6File: string;
  };
  fontStyle: string;
}) => {
  const [selectedImage, setSelectedImage] = useState<{
    id: number;
    src: string;
    caption: string;
  } | null>(null);
  const [style, setStyle] = useState({
    backgroundColor: "",
    textColor: "",
    primary: "",
    secondary: ""
  });

  useEffect(() => {
    setStyle({
      backgroundColor: homePalete.background,
      textColor: homePalete.textColor,
      primary: homePalete.primary,
      secondary: homePalete.secondary
    });
  }, [homePalete]);
  

  const galleryImages = [
    {
      id: 1,
      src: formDataGallery.image1File,
      caption: formDataGallery.boxImage1
    },
    {
      id: 2,
      src: formDataGallery.image2File,
      caption: formDataGallery.boxImage2
    },
    {
      id: 3,
      src: formDataGallery.image3File,
      caption: formDataGallery.boxImage3
    },
    {
      id: 4,
      src: formDataGallery.image4File,
      caption: formDataGallery.boxImage4
    },
    {
      id: 5,
      src: formDataGallery.image5File,
      caption: formDataGallery.boxImage5
    },
    {
      id: 6,
      src: formDataGallery.image6File,
      caption: formDataGallery.boxImage6
    }
  ];

  const openModal = (image: { id: number; src: string; caption: string }) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-row" style={{fontFamily:fontStyle}}>
      <div
        dir="rtl"
        className="mx-auto py-12 px-6 "
        style={{ backgroundColor: style.backgroundColor }}
      >
        {/* Header */}
        <header className="text-center mb-12">
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ color: style.primary }}
          >
            {formDataGallery.sectionOneH1 || "تیتر صفحه گالری"}
          </h1>
          <p
            className="text-lg md:text-xl opacity-70"
            style={{ color: style.secondary }}
          >
            {formDataGallery.sectionOneP || "توضیحات صفحه گالری"}
          </p>
        </header>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1   gap-8">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
              onClick={() => openModal(image)}
            >
              <div className="w-full h-64 overflow-hidden">
                <Image
                  src={image.src || defult.src}
                  alt={image.caption}
                  layout="responsive"
                  width={4000}
                  height={4000}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Overlay Text */}
              <div
                className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ color: style.secondary }}
              >
                <p className="text-lg font-semibold">
                  {image.caption || "موضوع"}
                </p>
              </div>
              {/* Caption */}
              <div className="text-center mt-2">
                <p
                  className="inline-block px-4 py-2 rounded-full mb-2 border-2 border-x-gray-200"
                  style={{
                    backgroundColor: style.secondary,
                    color: style.textColor
                  }}
                >
                  {image.caption || "موضوع"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {selectedImage && (
          <div
            className="absolute inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
            onClick={closeModal}
          >
            <div className="relative bg-white rounded-lg overflow-hidden shadow-xl max-w-3xl w-full mx-4">
              <button
                className="absolute top-4 right-4 text-2xl font-bold text-gray-700 hover:text-gray-900"
                onClick={closeModal}
                aria-label="Close Modal"
              >
                ×
              </button>
              <Image
                src={selectedImage.src || defult.src}
                width={800}
                height={600}
                alt={selectedImage.caption}
                className="w-full h-auto object-contain"
              />
              <div className="p-6">
                <p
                  className="text-center text-xl font-semibold"
                  style={{ color: style.primary }}
                >
                  {selectedImage.caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
