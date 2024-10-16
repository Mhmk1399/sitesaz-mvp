"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
interface HomeProps {
  step3data: {
    sectionOneH1: string;
    sectionOneH2: string;
    sectionOneP: string;
    sectionTwoH2: string;
    testimonial: {
      quote: string;
    };
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
    boxTitle7: string;
    boxDescription7: string;
    boxTitle8: string;
    boxDescription8: string;
    boxTitle9: string;
    boxDescription9: string;
    boxTitle10: string;
    boxDescription10: string;
    boxTitle11: string;
    boxDescription11: string;
    boxTitle12: string;
    boxDescription12: string;
  };
  homePalete: {
    background: string;
    textColor: string;
    primary: string;
    secondary: string;
  };
  fontStyle: string;
}
const Home2: React.FC<HomeProps> = ({ step3data, homePalete, fontStyle }) => {
  const [style, setStyle] = useState({
    bgColor: "",
    primaryColor: "",
    secondaryColor: "",
    textColors: ""
  });
  useEffect(() => {
    setStyle({
      bgColor: homePalete.background,
      primaryColor: homePalete.secondary,
      secondaryColor: homePalete.primary,
      textColors: homePalete.textColor
    });
  }, [homePalete]);
  useEffect(() => {
    setLiveFormData((prevState) => ({ ...prevState, ...step3data }));
  }, [step3data]);
  console.log(step3data);

  const [liveFormData, setLiveFormData] = useState({
    // section 1
    section1H1: "",
    section1P1: "",
    section1Btn1: "",
    section1Btn2: "",
    section1ImageBg: "",
    // section 2
    section2H2: "",
    section2P: "",
    section2ImageBg: "",
    // section 3
    section3H3: "",
    section3P: "",
    titleImage1: "",
    btnImage1: "",
    // section 4
    section4H4: "",
    section4boxTitle1: "",
    section4boxDescription1: "",
    section4Btn: "",
    boxImage1: "",
    section4boxTitle2: "",
    section4boxDescription2: "",
    boxImage2: "",
    section4boxTitle3: "",
    section4boxDescription3: "",
    boxImage3: "",
    section4boxTitle4: "",
    section4boxDescription4: "",
    boxImage4: "",
    // section 5
    section5H5: "",
    section5boxxTitle1: "",
    section5boxDescription1: "",
    blogImage1: "",
    section5Btn: "",
    section5boxTitle2: "",
    section5boxDescription2: "",
    blogImage2: "",
    section5boxTitle3: "",
    section5boxDescription3: "",
    blogImage3: "",
    section5boxTitle4: "",
    section5boxDescription4: "",
    blogImage4: "",
    // section 6
    section6H6: "",
    section6P: "",
    section6boxTitle1: "",
    section6boxDescription1: "",
    section6boxTitle2: "",
    section6boxDescription2: "",
    section6boxTitle3: "",
    section6boxDescription3: ""
  });

  const products = [
    {
      id: 1,
      name: "محصول 1",
      description:
        liveFormData.section4boxDescription1 || "توضیحات کوتاه محصول 1",
      image: liveFormData.boxImage1 || "/assets/images/top.jpg",
      customTitle: liveFormData.section4boxTitle1 || ""
    },
    {
      id: 2,
      name: "محصول 2",
      description:
        liveFormData.section4boxDescription2 || "توضیحات کوتاه محصول 2",
      image: liveFormData.boxImage2 || "/assets/images/top.jpg",
      customTitle: liveFormData.section4boxTitle2 || ""
    },
    {
      id: 3,
      name: "محصول 3",
      description:
        liveFormData.section4boxDescription3 || "توضیحات کوتاه محصول 3",
      image: liveFormData.boxImage3 || "/assets/images/top.jpg",
      customTitle: liveFormData.section4boxTitle3 || ""
    },
    {
      id: 4,
      name: "محصول 4",
      description:
        liveFormData.section4boxDescription4 || "توضیحات کوتاه محصول 4",
      image: liveFormData.boxImage4 || "/assets/images/top.jpg",
      customTitle: liveFormData.section4boxTitle4 || ""
    }
  ];
  const blogPosts = [
    {
      heading: liveFormData.section5boxxTitle1 || "وبلاگ 1",
      id: 1,
      content:
        liveFormData.section5boxDescription1 || "توضیحات کوتاه در مورد وبلاگ 1",
      image: liveFormData.blogImage1 || "/assets/images/top.jpg"
    },
    {
      heading: liveFormData.section5boxTitle2 || "وبلاگ 2",
      id: 2,
      content:
        liveFormData.section5boxDescription2 || "توضیحات کوتاه در مورد وبلاگ 2",
      image: liveFormData.blogImage2 || "/assets/images/top.jpg"
    },
    {
      heading: liveFormData.section5boxTitle3 || "وبلاگ 3",
      id: 3,
      content:
        liveFormData.section5boxDescription3 || "توضیحات کوتاه در مورد وبلاگ 3",
      image: liveFormData.blogImage3 || "/assets/images/top.jpg"
    },
    {
      heading: liveFormData.section5boxTitle4 || "وبلاگ 4",
      id: 4,
      content:
        liveFormData.section5boxDescription4 || "توضیحات کوتاه در مورد وبلاگ 4",
      image: liveFormData.blogImage4 || "/assets/images/top.jpg"
    }
  ];
  const testimonials = [
    {
      quote:
        liveFormData.section6boxTitle1 ||
        "بهترین سرمایه گذاری که انجام داده ایم.",
      author: liveFormData.section6boxDescription2 || "کلاینت 1"
    },
    {
      quote:
        liveFormData.section6boxTitle2 ||
        "بهترین سرمایه گذاری که انجام داده ایم.",
      author: liveFormData.section6boxDescription2 || "کلاینت 2"
    },
    {
      quote:
        liveFormData.section6boxTitle3 ||
        "بهترین سرمایه گذاری که انجام داده ایم.",
      author: liveFormData.section6boxDescription2 || "کلاینت 3"
    }
  ];

  return (
    <>
      <div
        className="flex flex-col  justify-center"
        style={{ fontFamily: fontStyle }}
      >
        <div
          className="  "
          dir="rtl"
          style={{ backgroundColor: style.bgColor }}
        >
          {/* Hero Section */}

          <section className="relative h-screen mx-auto max-w-screen-xl px-6 py-32   ">
            <Image
              id="hero-image"
              src={
                liveFormData.section1ImageBg
                  ? liveFormData.section1ImageBg
                  : "/assets/images/top.jpg"
              }
              alt="Feature background"
              objectFit="cover"
              layout="fill"
              quality={100}
              className="z-0"
            />
            <div className="relative mx-auto  px-4 py-32 sm:px-6 ">
              <div className="max-w-xl text-center rtl:sm:text-right">
                <h1
                  id="hero-title"
                  className="text-3xl font-extrabold"
                  style={{ color: style.primaryColor }}
                >
                  {liveFormData.section1H1
                    ? liveFormData.section1H1
                    : "بهترین سایت برای ساخت سایت"}
                </h1>

                <p
                  id="hero-description"
                  className="mt-4 max-w-lg font-bold text-xl/relaxed"
                  style={{ color: style.secondaryColor }}
                >
                  {liveFormData.section1P1
                    ? liveFormData.section1P1
                    : "لورم اپسیوم دومین سطر این سایت است که این سایت برای ساخت سایت برای شما ساخته شده است"}
                </p>

                <div className="mt-8 flex flex-wrap gap-4 text-center">
                  <Link
                    id="hero-button1"
                    href="/"
                    style={{
                      backgroundColor: style.secondaryColor,
                      color: style.textColors
                    }}
                    className="block  rounded-md px-12 py-3 hover:scale-105 transition-all duration-150 font-bold text-sm  hover:opacity-80 w-auto"
                  >
                    {liveFormData.section1Btn1
                      ? liveFormData.section1Btn1
                      : "شروع کنید"}
                  </Link>

                  <Link
                    id="hero-button2"
                    href="/services"
                    style={{
                      backgroundColor: style.primaryColor,
                      color: style.textColors
                    }}
                    className="block rounded bg-primary px-12 py-3 hover:scale-105 transition-all duration-150 font-bold text-sm hover:opacity-80 w-auto"
                  >
                    {liveFormData.section1Btn2
                      ? liveFormData.section1Btn2
                      : "خدمات"}
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}

          <section className="relative">
            <div className="relative z-10 mx-auto px-4 py-16  ">
              <h2
                id="FeaturesTitle"
                className="text-3xl font-bold  text-center "
                style={{ color: style.primaryColor }}
              >
                {liveFormData.section2H2 ? liveFormData.section2H2 : "خدمات ما"}
              </h2>

              <div className="mt-8 grid grid-cols-1 gap-8  ">
                <div className="relative h-64 overflow-hidden sm:h-80 ">
                  <Image
                    id="FeaturesImage"
                    alt="Features Image"
                    width={500}
                    height={500}
                    src={
                      liveFormData.section2ImageBg
                        ? liveFormData.section2ImageBg
                        : "/assets/images/top.jpg"
                    }
                    className="absolute inset-0 h-full  object-cover"
                  />
                </div>

                <div className="lg:py-16">
                  <article className="space-y-4">
                    <p
                      style={{ color: style.textColors }}
                      id="FeaturesDescription"
                      className="text-base lg:text-lg p-2 text-center"
                    >
                      {liveFormData.section2P
                        ? liveFormData.section2P
                        : "لورم اپسیوم دومین سطر این سایت است که این سایت برای ساخت سایت برای شما ساخته شده است  ورم اپسیوم دومین سطر این سایت است که این سایت برای ساخت سایت برای شما ساخته شده است ورم اپسیوم دومین سطر این سایت است که این سایت برای ساخت سایت برای شما ساخته شده است ورم اپسیوم دومین سطر این سایت است که این سایت برای ساخت سایت برای شما ساخته شده است ورم اپسیوم دومین سطر این سایت است که این سایت برای ساخت سایت برای شما ساخته شده است "}
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section 2 */}

          <section className="bg-primary text-white py-20 relative container mx-auto">
            <Image
              id="FeaturesImage2"
              src={
                liveFormData.titleImage1
                  ? liveFormData.titleImage1
                  : "/assets/images/top.jpg"
              }
              alt="Feature background"
              objectFit="cover"
              layout="fill"
              quality={100}
              className="z-0"
            />
            <div className="container mx-auto text-center relative z-50">
              <h2
                className="text-4xl font-bold "
                style={{ color: style.textColors }}
                id="FeaturesTitle2"
              >
                {liveFormData.section3H3
                  ? liveFormData.section3H3
                  : "بهترین سایت برای ساخت سایت"}
              </h2>
              <p
                className="mt-4 text-lg"
                style={{ color: style.textColors }}
                id="FeaturesDescription2"
              >
                {liveFormData.section3P
                  ? liveFormData.section3P
                  : "لورم اپسیوم دومین سطر این سایت است که این سایت برای ساخت سایت برای شما ساخته شده است"}
              </p>
              <button
                id="FeaturesBtn2"
                className="mt-6 py-2 px-4 rounded hover:bg-opacity-90 hover:scale-110 transition-all duration-300"
                style={{
                  backgroundColor: style.secondaryColor,
                  color: style.textColors
                }}
              >
                {liveFormData.btnImage1 ? liveFormData.btnImage1 : "شروع کنید"}
              </button>
            </div>
          </section>

          {/* Product Cards */}

          <section className="bg-bg py-10">
            <div className="container mx-auto px-4">
              <h2
                className="text-2xl font-semibold text-center"
                id="ProductCardsH2"
                style={{ color: style.textColors }}
              >
                {liveFormData.section4H4 ? liveFormData.section4H4 : "محصولات"}
              </h2>

              <div className="grid grid-cols-1 gap-6 mt-8 justify-center justify-items-center	">
                {products.map((product, index) => (
                  <div
                    key={product.id}
                    className=" p-6 rounded shadow-lg hover:shadow-2xl hover:scale-95 transition-all duration-300"
                  >
                    <Image
                      id={`ProductCardsImage-${index + 1}`}
                      width={400}
                      height={200}
                      src={
                        product.image !== ""
                          ? product.image
                          : "/assets/images/top.jpg"
                      }
                      alt={product.name}
                      className="rounded-lg w-full object-cover"
                    />

                    <h3
                      id={`ProductCardsH3-${index + 1}`}
                      className="text-lg md:text-xl font-bold mt-4"
                      style={{ color: style.primaryColor }}
                    >
                      {product.customTitle !== ""
                        ? product.customTitle
                        : product.name}
                    </h3>

                    <p
                      id={`ProductCardsP-${index + 1}`}
                      className="mt-2 text-sm md:text-base opacity-70"
                      style={{ color: style.textColors }}
                    >
                      {product.description !== "" ? product.description : ""}
                    </p>

                    <button
                      className="mt-4 py-2 px-4 rounded-md hover:bg-opacity-90"
                      id={`ProductCardsBtn-${index + 1}`}
                      style={{
                        backgroundColor: style.secondaryColor,
                        color: style.textColors
                      }}
                    >
                      {liveFormData.section4Btn
                        ? liveFormData.section4Btn
                        : "مشاهده محصول"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* {Blog Section} */}

          <h4
            className=" text-center text-3xl my-6"
            style={{ color: style.textColors }}
            id="blogSectionH4"
          >
            {liveFormData.section5H5 ? liveFormData.section5H5 : "بلاگ"}
          </h4>
          <section className="grid grid-cols-1  gap-4 mt-8 justify-center justify-items-center	px-4">
            {blogPosts.map((post, index) => (
              <div
                key={post.id}
                style={{ backgroundColor: style.bgColor }}
                className="   border-2 border-gray-300 hover:scale-105 transition-all duration-500 hover:shadow-2xl 
        rounded-[1.5em] p-4 flex flex-col items-center "
              >
                <div className="">
                  <Image
                    src={
                      post.image !== "" ? post.image : "/assets/images/top.jpg"
                    }
                    id={`blogImage-${index + 1}`}
                    width={500}
                    height={500}
                    alt={post.heading}
                    className="rounded-lg w-full h-[10em]  object-cover"
                  />
                </div>
                <div className="w-full p-3 flex flex-col justify-center">
                  <h1
                    id={`blogTitle-${index + 1}`}
                    className="text-lg md:text-xl font-semibold mt-2 lg:mt-0 border-b-2 border-gray-300"
                    style={{ color: style.secondaryColor }}
                  >
                    {post.heading !== "" ? post.heading : "No Title"}
                  </h1>
                  <p
                    id={`blogDescription-${index + 1}`}
                    className="text-sm md:text-base text-gray-600 mt-2 mb-4"
                    style={{ color: style.textColors }}
                  >
                    {post.content !== ""
                      ? post.content
                      : "No content available."}
                  </p>
                  <button
                    id={`blogBtn-${index + 1}`}
                    style={{ backgroundColor: style.primaryColor }}
                    className="self-start mt-auto p-2 border rounded-full text-sm text-white hover:scale-90 transition-transform duration-200 flex items-center gap-2"
                  >
                    <span
                      style={{ color: style.textColors }}
                      id={`blogBtn-${index + 1}`}
                    >
                      {liveFormData.section5Btn
                        ? liveFormData.section5Btn
                        : "مشاهده بیشتر"}
                    </span>
                    <svg
                      style={{ color: style.textColors }}
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                      stroke="currentColor"
                      strokeWidth="1"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </section>

          {/* Testimonials */}

          <section className="py-16">
            <div className="text-center">
              <h2
                className="text-3xl font-semibold text-primary"
                id="TestimonialsTitle"
                style={{ color: style.secondaryColor }}
              >
                {liveFormData.section6H6
                  ? liveFormData.section6H6
                  : "آنچه مشتریان ما می گویند"}
              </h2>
              <p
                className="mt-4 text-lg opacity-50 p-2"
                id="TestimonialsDescription"
                style={{ color: style.textColors }}
              >
                {liveFormData.section6P
                  ? liveFormData.section6P
                  : "لورم اپسیوم دومین سطر این سایت است که این سایت برای ساخت سایت برای شما ساخته شده است"}
              </p>
              <div className="flex flex-col justify-center items-center gap-4 mt-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className=" p-6 rounded-md shadow-md max-w-xs mx-1"
                    style={{
                      backgroundColor: style.primaryColor
                    }}
                  >
                    <p
                      className="text-lg italic"
                      style={{ color: style.textColors }}
                      id="TestimonialsQuote"
                    >
                      &quot;{testimonial.quote !== "" ? testimonial.quote : ""}
                      &quot;
                    </p>

                    <p
                      className="mt-4 text-secondary font-bold text-lg"
                      style={{ color: style.secondaryColor }}
                      id="TestimonialsAuthor"
                    >
                      - {testimonial.author !== "" ? testimonial.author : ""}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home2;
