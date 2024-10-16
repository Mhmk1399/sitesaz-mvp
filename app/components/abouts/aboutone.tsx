"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import about from "../../../public/images/about.svg";
const AboutOne = ({
  homePalete,
  fontStyle,
  formDataAbout
}: {
  font: string;
  formDataAbout: {
    sectionOneH1: string;
    sectionOneH2: string;
    sectionOneP: string;
    sectionTwoH2: string;
    sectionTwoP: string;
    sectionTwoLink: string;
    boxTitle1: string;
    boxDescription1: string;
    boxTitle2: string;
    boxDescription2: string;
    boxTitle3: string;
    boxDescription3: string;
    boxTitle4: string;
    boxDescription4: string;
    boxTitle5: string;
    boxDescription5: string;
    boxTitle6: string;
    boxDescription6: string;
  };
  homePalete: {
    background: string;
    textColor: string;
    primary: string;
    secondary: string;
  };
  fontStyle: string;
}) => {
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
  

  const [liveFormData, setLiveFormData] = useState({
    sectionOneH1: "",
    sectionOneH2: "",
    sectionOneP: "",
    sectionTwoH2: "",
    sectionTwoP: "",
    sectionTwoLink: "",
    boxTitle1: "",
    boxDescription1: "",
    boxTitle2: "",
    boxDescription2: "",
    boxTitle3: "",
    boxDescription3: "",
    boxTitle4: "",
    boxDescription4: "",
    boxTitle5: "",
    boxDescription5: "",
    boxTitle6: "",
    boxDescription6: "",
    newProperty: ""
  });

  useEffect(() => {
    setLiveFormData((prevState) => ({
      ...prevState,
      ...formDataAbout,
      newProperty: "This is a new property"
    }));
    // console.log(liveFormData);

    // console.log(formDataAbout)
  }, [formDataAbout]);

  const boxes = [
    {
      title: liveFormData.boxTitle1 || "باکس 1",
      description: liveFormData.boxDescription1 || "توضیحات باکس 1"
    },
    {
      title: liveFormData.boxTitle2 || "باکس 2",
      description: liveFormData.boxDescription2 || "توضیحات باکس 2"
    },
    {
      title: liveFormData.boxTitle3 || "باکس 3",
      description: liveFormData.boxDescription3 || "توضیحات باکس 3"
    },
    {
      title: liveFormData.boxTitle4 || "باکس 4",
      description: liveFormData.boxDescription4 || "توضیحات باکس 4"
    },
    {
      title: liveFormData.boxTitle5 || "باکس 5",
      description: liveFormData.boxDescription5 || "توضیحات باکس 5"
    },
    {
      title: liveFormData.boxTitle6 || "باکس 6",
      description: liveFormData.boxDescription6 || "توضیحات باکس 6"
    }
  ];

  return (
    <>
      <div className="flex flex-col  justify-center space-y-8 " style={{fontFamily:fontStyle}}>
        <div
          className="space-y-8 w-full "
          style={{
            backgroundColor: style.backgroundColor
          }}
        >
          {/* Section One */}
          <section
            className="shadow-lg rounded-lg p-6 "
            style={
             
                 { backgroundColor: style.backgroundColor }
                
            }
          >
            <h1
              id="sectionOneH1"
              className="text-4xl font-bold mb-6 text-center"
              style={{
                color: style.primary
              }}
            >
              {liveFormData.sectionOneH1
                ? liveFormData.sectionOneH1
                : "درباره ما"}
            </h1>
            <div className="flex flex-col  items-center justify-center gap-8">
              <div className="w-full ">
                {/* Uncomment and provide the correct src when ready */}
                <Image
                  id="sectionOneImage"
                  src={about}
                  alt="درباره ما"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <div className="w-full ">
                <div
                  className="shadow-lg rounded-lg p-6"
                  style={{ backgroundColor: style.backgroundColor }}
                >
                  <h2
                    id="sectionOneH2"
                    className="text-xl font-bold mb-4  text-center p-3 rounded-lg"
                    style={{
                      color: style.primary,
                      backgroundColor: style.secondary
                    }}
                  >
                    {liveFormData.sectionOneH2
                      ? liveFormData.sectionOneH2
                      : "ماموریت ما"}
                  </h2>
                  <p
                    id="sectionOneP"
                    className="font-semibold text-lg text-center  p-2"
                    style={{
                      color: style.primary
                    }}
                  >
                    {liveFormData.sectionOneP ||
                      "در این قسمت توضیحات مربوط به ماموریت  می باشد"}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section Two */}
          <section>
            <div
              className="  px-6 py-12   rounded-lg"
              style={{
                backgroundColor: style.backgroundColor
              }}
            >
              <h2
                id="sectionTwoH2"
                style={{ color: style.primary }}
                className=" font-bold text-4xl mx-auto text-center pb-5"
              >
                {liveFormData.sectionTwoH2 || "متن تستی برای سربرگ خدمات شما"}
              </h2>
              <div className="grid grid-cols-1 gap-y-8 ">
                <div className="mx-auto text-center  ">
                  <p
                    id="sectionTwoP"
                    className="my-5 p-6 rounded-xl text-center"
                    style={{
                      color: style.textColor,
                      backgroundColor: style.secondary
                    }}
                  >
                    {liveFormData.sectionTwoP ||
                      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،"}
                  </p>
                </div>

                <div className="grid  gap-4 grid-cols-1 ">
                  {/* SVG One to Six */}
                  {boxes.map((num, index) => (
                    <a
                      key={index}
                      className="block rounded-xl border border-gray-200 p-4 shadow-sm text-right hover:border-gray-300 hover:ring-1 hover:ring-gray-300 transition duration-200"
                      href="#"
                    >
                      <span
                        className="inline-block rounded-lg p-3 mb-2"
                        style={{ backgroundColor: style.secondary }}
                      >
                        <svg
                          className="w-6 h-6 text-right"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                          ></path>
                        </svg>
                      </span>

                      <h3
                        id="boxTitle1"
                        className="mt-2 font-bold text-lg"
                        style={{ color: style.primary }}
                      >
                        {num.title !== "" ? num.title : "باکس 1"}
                      </h3>

                      <p
                        id="boxDescription1"
                        style={{ color: style.primary }}
                        className="text-sm  font-extralight mt-1"
                      >
                        {num.description !== ""
                          ? num.description
                          : "توضیجااق 1"}
                      </p>
                    </a>
                  ))}
                </div>

                <div className="col-span-1  flex justify-center">
                  <Link href="/">
                    <button
                      id="sectionTwoLink"
                      style={{
                        backgroundColor: style.secondary,
                        color: style.textColor
                      }}
                      className="mt-6 px-6 py-3 rounded-xl shadow-lg font-bold text-lg transition duration-200 hover:shadow-xl"
                    >
                      {liveFormData.sectionTwoLink || "مشاهده خدمات"}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Form Section */}
      </div>
    </>
  );
};
export  {AboutOne}
