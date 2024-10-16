"use client";
import Image from "next/image";
import {  useEffect, useState } from "react";
import Link from "next/link";
import bronze from '../../../public/images/bronz.jpg'
import gold from '../../../public/images/gold.jpg.jpg'
import vip from '../../../public/images/vip.jpg'

interface HomeProps {


  step3data: {
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
    text: string;
    primary: string;
    secondary: string;
  };
  fontStyle:string
}


const Home1: React.FC<HomeProps> = ({ step3data ,homePalete,fontStyle}) => {
  const [style, setStyle] = useState({
    bgColor: "",
    primaryColor: "",
    secondaryColor: "",
    textColor: ""
  });
 useEffect(() => {
  setStyle({
    bgColor: homePalete.background,
    primaryColor: homePalete.secondary,
    secondaryColor: homePalete.primary,
    textColor:homePalete.text
  });
  
 },[homePalete]);  

  const [liveFormData, setLiveFormData] = useState({
    section1P1: "",
    section1H1: "",
    section1P2: "",
    section1Btn1: "",
    section1Btn2: "",
    section2H2: "",
    section2P: "",
    section2box1: "",
    section2Description1: "",
    section2box2: "",
    section2Description2: "",
    section2box3: "",
    section2Description3: "",
    section2box4: "",
    section2Description4: "",
    section2box5: "",
    section2Description5: "",
    section2box6: "",
    section2Description6: "",
    section2Btn: "",
    section3H3: "",
    section3P: "",
    titleImage1: "",
    btnImage1: "",
    titleImage2: "",
    btnImage2: "",
    titleImage3: "",
    btnImage3: "",
    blogsSection: "",
    blogsSectionTitle: "",
    blogsSectionDescription: "",
    blogsSectionBtn: "",
    blogsSectionTitle2: "",
    blogsSectionDescription2: "",
    blogsSectionBtn2: "",
    blogsSectionTitle3: "",
    blogsSectionDescription3: "",
    blogsSectionBtn3: "",
    blogsSectionTitle4: "",
    blogsSectionDescription4: "",
    blogsSectionBtn4: "",
    sectinon4H4: "",
    section4boxTitle1: "",
    section4boxDescription1: "",
    section4boxTitle2: "",
    section4boxDescription2: "",
    section4boxTitle3: "",
    section4boxDescription3: "",
    section4boxTitle4: "",
    section4boxDescription4: "",
    gallery1: "",
    galley2: "",
    gallery3: "",
    blog1: "",
    blog2: "",
    blog3: "",
    blog4: "",
  });
  
    
useEffect(() => {
    setLiveFormData(prevState => ({ ...prevState, ...step3data }));
}, [step3data]);
 

  


  return (
    <>
      
      <div className="flex flex-row justify-center" style={{fontFamily:fontStyle}}>
        <div
          dir="rtl"
          className={`flex flex-col justify-center items-center `}
          style={{
            backgroundColor: style.bgColor,
          }}
        >
          {/* section one */}

          <div className="text-center flex flex-col items-center justify-center mt-14 mb-7  ">
            <p
              id="sectionOneP"
              className={`my-3 text-xl shadow-lg shadow-gray-600 rounded-2xl p-6 `}
              style={{
                color: style.secondaryColor,
              }}
            >
              {liveFormData.section1P1
                ? liveFormData.section1P1
                : "شعار  برند  شما"}
            </p>
            <h1
              id="sectionOneH1"
              className={`my-3 text-3xl font-bold tracking-tight `}
              style={{
                color: style.primaryColor,
              }}
            >
              {liveFormData.section1H1
                ? liveFormData.section1H1
                : "عنوان برند شما"}
            </h1>
            <div>
              <p
                id="sectionOneP2"
                className={`max-w-2xl mx-auto my-2 text-base px-6 md:leading-relaxed `}
                style={{
                  color: style.textColor,
                }}
              >
                {liveFormData.section1P2
                  ? liveFormData.section1P2
                  : "معرفی آخرین خدمات ارائه شده ما. با طیف وسیعی از راه حل های ما به سرعت و کارآمد شروع کنید. طراحی شده برای رفع نیازهای شما با استفاده از آخرین فناوری ها."}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-5 mt-6 ">
              <Link
                id="homeLink"
                className={`inline-block w-auto text-center min-w-[200px] px-6 py-4  transition-all  rounded-md 
                shadow-xl   hover:bg-gradient-to-b dark:shadow-blue-900
                 shadow-blue-200 font-bold hover:shadow-2xl hover:shadow-blue-400 hover:-translate-y-px`}
                style={{
                  backgroundColor: style.secondaryColor,
                  color: style.textColor,
                }}
                href="/"
              >
                {liveFormData.section1Btn1 ? liveFormData.section1Btn1 : "خانه"}
              </Link>
              <Link
                id="ServicesLink"
                className={`inline-block  text-center min-w-[200px] px-6 py-4  transition-all rounded-md 
              shadow-xl w-auto  hover:bg-gradient-to-b dark:shadow-blue-900
               shadow-blue-200 font-bold hover:shadow-2xl hover:shadow-blue-400 hover:-translate-y-px`}
                style={{
                  backgroundColor: style.primaryColor,
                  color: style.textColor,
                }}
                href="/store"
              >
                {liveFormData.section1Btn2
                  ? liveFormData.section1Btn2
                  : "خدمات"}
              </Link>
            </div>
          </div>

          {/* section two */}

          <section className="flex">
            <div className="mx-auto py-8n px-6 py-12 ">
              <div className="mx-auto max-w-lg text-center">
                <h2
                  id="sectionTwoH2"
                  className={`text-3xl font-bold sm:text-4xl`}
                  style={{
                    color: style.textColor,
                  }}
                >
                  {liveFormData.section2H2
                    ? liveFormData.section2H2
                    : "بازاریابی خود را شروع کنید"}
                </h2>

                <p
                  id="sectionTwoP"
                  className={`mt-4`}
                  style={{ color: style.textColor }}
                >
                  {liveFormData.section2P
                    ? liveFormData.section2P
                    : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."}
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 ">
                <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`size-10`}
                    style={{
                      color: style.secondaryColor,
                    }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>

                  <div
                    id="sectionTwoBox1"
                    className={`mt-4 text-xl font-bold`}
                    style={{
                      color: style.primaryColor,
                    }}
                  >
                    {liveFormData.section2box1
                      ? liveFormData.section2box1
                      : "باکس 1"}
                  </div>

                  <p
                    id="sectionTwoDescription1"
                    className={`mt-4`}
                    style={{
                      color: style.textColor,
                    }}
                  >
                    {liveFormData.section2Description1
                      ? liveFormData.section2Description1
                      : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. "}
                  </p>
                </div>

                <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`size-10`}
                    style={{
                      color: style.secondaryColor,
                    }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>

                  <div
                    id="sectionTwoTitle2"
                    className={`mt-4 text-xl font-bold`}
                    style={{
                      color: style.primaryColor,
                    }}
                  >
                    {liveFormData.section2box2
                      ? liveFormData.section2box2
                      : "باکس 2"}
                  </div>

                  <p
                    id="sectionTwoDescription2"
                    className={`mt-4`}
                    style={{
                      color: style.textColor,
                    }}
                  >
                    {liveFormData.section2Description2
                      ? liveFormData.section2Description2
                      : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. "}
                  </p>
                </div>

                <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`size-10`}
                    style={{
                      color: style.secondaryColor,
                    }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>

                  <div
                    id="sectionTwoTitle3"
                    className={`mt-4 text-xl font-bold`}
                    style={{
                      color: style.primaryColor,
                    }}
                  >
                    {liveFormData.section2box3
                      ? liveFormData.section2box3
                      : "باکس 3"}
                  </div>

                  <p
                    id="sectionTwoDescription3"
                    className={`mt-4`}
                    style={{
                      color: style.textColor,
                    }}
                  >
                    {liveFormData.section2Description3
                      ? liveFormData.section2Description3
                      : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. "}
                  </p>
                </div>

                <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`size-10`}
                    style={{
                      color: style.secondaryColor,
                    }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>

                  <div
                    id="sectionTwoTitle4"
                    className={`mt-4 text-xl font-bold`}
                    style={{
                      color: style.primaryColor,
                    }}
                  >
                    {liveFormData.section2box4
                      ? liveFormData.section2box4
                      : "باکس 4"}
                  </div>

                  <p
                    id="sectionTwoDescription4"
                    className={`mt-4`}
                    style={{
                      color: style.textColor,
                    }}
                  >
                    {liveFormData.section2Description4
                      ? liveFormData.section2Description4
                      : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. "}
                  </p>
                </div>

                <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`size-10`}
                    style={{
                      color: style.secondaryColor,
                    }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>

                  <div
                    id="sectionTwoTitle5"
                    className={`mt-4 text-xl font-bold`}
                    style={{
                      color: style.primaryColor,
                    }}
                  >
                    {liveFormData.section2box5
                      ? liveFormData.section2box5
                      : "باکس 5"}
                  </div>

                  <p
                    id="sectionTwoDescription5"
                    className={`mt-4`}
                    style={{
                      color: style.textColor,
                    }}
                  >
                    {liveFormData.section2Description5
                      ? liveFormData.section2Description5
                      : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. "}
                  </p>
                </div>

                <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`size-10`}
                    style={{
                      color: style.secondaryColor,
                    }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>

                  <div
                    id="sectionTwoTitle6"
                    className={`mt-4 text-xl font-bold`}
                    style={{
                      color: style.primaryColor,
                    }}
                  >
                    {liveFormData.section2box6
                      ? liveFormData.section2box6
                      : "باکس 6"}
                  </div>

                  <p
                    id="sectionTwoDescription6"
                    className={`mt-4`}
                    style={{
                      color: style.textColor,
                    }}
                  >
                    {liveFormData.section2Description6
                      ? liveFormData.section2Description6
                      : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. "}
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Link
                  id="sectionTwoBtn"
                  style={{
                    backgroundColor: style.primaryColor,
                    color: style.textColor,
                  }}
                  href="/services"
                  className={`inline-block rounded px-12 text-lg py-3 lg:text-xl font-medium transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400`}
                >
                  {liveFormData.section2Btn
                    ? liveFormData.section2Btn
                    : "مشاهده خدمات"}
                </Link>
              </div>
            </div>
          </section>

          {/* section three */}

          <section>
            <div className="mx-auto max-w-screen-xl px-6 py-12 ">
              <header className="text-center">
                <h2
                  id="sectionThreeH2"
                  className={`text-3xl font-bold mb-4 sm:text-3xl`}
                  style={{
                    color: style.primaryColor,
                  }}
                >
                  {liveFormData.section3H3
                    ? liveFormData.section3H3
                    : "گالری خدمات"}
                </h2>

                <p
                  id="sectionThreeP"
                  className={`mx-auto mt-4 max-w-md px-8 py-5 rounded-lg`}
                  style={{
                    color: style.textColor,
                  }}
                >
                  {liveFormData.section3P
                    ? liveFormData.section3P
                    : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. "}
                </p>
              </header>

              <ul className="mt-8 grid grid-cols-1 gap-4 ">
                <li>
                  <Link href="#" className="group relative block">
                    <Image
                      width={500}
                      height={500}
                      src={
                        liveFormData.gallery1
                          ? liveFormData.gallery1
                          : gold.src
                      }
                      alt=""
                      className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                    />

                    <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                      <h3
                        id="sectionThreeTitle1"
                        className={`text-xl font-bold`}
                        style={{
                          color: style.textColor,
                        }}
                      >
                        {liveFormData.titleImage1
                          ? liveFormData.titleImage1
                          : "عنوان"}
                      </h3>

                      <span
                        id="sectionThreeBtn1"
                        className={`mt-1.5 inline-block rounded-md hover:bg-transparent px-5 py-2 text-sm font-bold tracking-wide`}
                        style={{
                          backgroundColor: style.secondaryColor,
                          color: style.textColor,
                        }}
                      >
                        {liveFormData.btnImage1
                          ? liveFormData.btnImage1
                          : "مشاهده بیشتر "}
                      </span>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link href="#" className="group relative block">
                    <Image
                      width={500}
                      height={500}
                      src={
                        liveFormData.galley2
                          ? liveFormData.galley2
                          : vip.src
                      }
                      alt=""
                      className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                    />

                    <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                      <h3
                        id="sectionThreeTitle2"
                        className={`text-xl font-bold`}
                        style={{
                          color: style.textColor,
                        }}
                      >
                        {liveFormData.titleImage2
                          ? liveFormData.titleImage2
                          : "عنوان"}
                      </h3>

                      <span
                        id="sectionThreeBtn2"
                        className={`mt-1.5 inline-block rounded-md hover:bg-transparent px-5 py-3 text-sm font-bold tracking-wide`}
                        style={{
                          backgroundColor: style.secondaryColor,
                          color: style.textColor,
                        }}
                      >
                        {liveFormData.btnImage2
                          ? liveFormData.btnImage2
                          : "مشاهده بیشتر "}
                      </span>
                    </div>
                  </Link>
                </li>

                <li className="">
                  <a href="#" className="group relative block">
                    <Image
                      width={500}
                      height={500}
                      src={
                        liveFormData.gallery3
                          ? liveFormData.gallery3
                          : bronze.src
                      }
                      alt=""
                      className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                    />

                    <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                      <h3
                        id="sectionThreeTitle3"
                        className={`text-xl font-bold`}
                        style={{
                          color: style.textColor,
                        }}
                      >
                        {liveFormData.titleImage3
                          ? liveFormData.titleImage3
                          : "عنوان"}
                      </h3>

                      <span
                        id="sectionThreeBtn3"
                        className={`mt-1.5 inline-block rounded-mdhover:bg-transparent px-5 py-3 text-sm font-bold tracking-wide`}
                        style={{
                          backgroundColor: style.secondaryColor,
                          color: style.textColor,
                        }}
                      >
                        {liveFormData.btnImage3
                          ? liveFormData.btnImage3
                          : "مشاهده بیشتر "}
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* section four */}

          <h3
            id="sectionFourH3"
            className={`text-4xl my-3 font-bold`}
            style={{
              color: style.textColor,
            }}
          >
            {liveFormData.blogsSection
              ? liveFormData.blogsSection
              : "بخش مقالات"}
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-5 w-full max-w-7xl mx-auto px-4 py-8">
            <div
              className={`w-full sm:w-60 h-auto sm:h-80 border-2 border-gray-500 rounded-3xl p-4
                 flex flex-col items-center justify-center
             gap-3 hover:bg-gray-200 hover:shadow-2xl hover:shadow-sky-400 transition-shadow`}
              style={{
                backgroundColor: style.bgColor,
                color: style.textColor,
              }}
            >
              <div className="w-full h-40 overflow-hidden rounded-2xl">
                <Image
                  src={
                    liveFormData.blog1
                      ? liveFormData.blog1
                      : vip.src
                  }
                  width={240}
                  height={160}
                  className="w-full h-40 object-cover rounded-2xl"
                  alt="Blog post image"
                />
              </div>
              <div className=" text-center">
                <h5
                  id="sectionFourTitle1"
                  className="font-extrabold"
                  style={{ color: style.textColor }}
                >
                  {liveFormData.blogsSectionTitle
                    ? liveFormData.blogsSectionTitle
                    : "عنوان مقاله"}
                </h5>
                <p
                  id="sectionFourDescription1"
                  className="opacity-75"
                  style={{ color: style.textColor }}
                >
                  {liveFormData.blogsSectionDescription
                    ? liveFormData.blogsSectionDescription
                    : "توضیحات کوتاه مقاله"}
                </p>
              </div>
              <button
                className={`border-b-2 font-extrabold p-2 px-6 hover:bg-sky-500 hover:rounded-lg transition-colors`}
                style={{
                  color: style.textColor,
                }}
              >
                <Link
                  id="sectionFourLink1"
                  href="/blogs"
                  style={{ color: style.textColor }}
                >
                  {liveFormData.blogsSectionBtn
                    ? liveFormData.blogsSectionBtn
                    : "مشاهده بیشتر"}
                </Link>
              </button>
            </div>
            <div
              className={`w-full sm:w-60 h-auto sm:h-80 border-2 border-gray-500 rounded-3xl p-4 flex flex-col items-center justify-center
             gap-3 hover:bg-gray-200 hover:shadow-2xl hover:shadow-sky-400 transition-shadow`}
              style={{
                backgroundColor: style.bgColor,
                color: style.textColor,
              }}
            >
              <div className="w-full h-40 overflow-hidden rounded-2xl">
                <Image
                  src={
                    liveFormData.blog2
                      ? liveFormData.blog2
                      : vip.src
                  }
                  width={240}
                  height={160}
                  className="w-full h-40 object-cover rounded-2xl"
                  alt="Blog post image"
                />
              </div>
              <div className=" text-center">
                <h5
                  id="sectionFourTitle2"
                  className="font-extrabold"
                  style={{ color: style.textColor }}
                >
                  {liveFormData.blogsSectionTitle2
                    ? liveFormData.blogsSectionTitle2
                    : "عنوان مقاله"}
                </h5>
                <p
                  id="sectionFourDescription2"
                  className="opacity-75"
                  style={{ color: style.textColor }}
                >
                  {liveFormData.blogsSectionDescription2
                    ? liveFormData.blogsSectionDescription2
                    : "توضیحات کوتاه مقاله"}
                </p>
              </div>
              <button
                className={` border-b-2  font-extrabold p-2 px-6 hover:bg-sky-500 hover:rounded-lg transition-colors`}
                style={{
                  color: style.textColor,
                }}
              >
                <Link id="sectionFourLink2" href="/blogs">
                  {liveFormData.blogsSectionBtn2
                    ? liveFormData.blogsSectionBtn2
                    : "مشاهده بیشتر"}
                </Link>
              </button>
            </div>
            <div
              className={`w-full sm:w-60 h-auto sm:h-80 border-2 border-gray-500 rounded-3xl p-4 flex flex-col items-center justify-center
             gap-3 hover:bg-gray-200 hover:shadow-2xl hover:shadow-sky-400 transition-shadow`}
              style={{
                backgroundColor: style.bgColor,
                color: style.textColor,
              }}
            >
              <div className="w-full h-40 overflow-hidden rounded-2xl">
                <Image
                  src={
                    liveFormData.blog3
                      ? liveFormData.blog3
                      : vip.src
                  }
                  width={240}
                  height={160}
                  className="w-full h-40 object-cover rounded-2xl"
                  alt="Blog post image"
                />
              </div>
              <div className=" text-center">
                <h5
                  id="sectionFourTitle4"
                  className="font-extrabold"
                  style={{ color: style.textColor }}
                >
                  {liveFormData.blogsSectionTitle3
                    ? liveFormData.blogsSectionTitle3
                    : "عنوان مقاله"}
                </h5>
                <p
                  id="sectionFourDescription3"
                  className="opacity-75"
                  style={{ color: style.textColor }}
                >
                  {liveFormData.blogsSectionDescription2
                    ? liveFormData.blogsSectionDescription2
                    : "توضیحات کوتاه مقاله"}
                </p>
              </div>
              <button
                className={` border-b-2  font-extrabold p-2 px-6 hover:bg-sky-500 hover:rounded-lg transition-colors`}
                style={{
                  color: style.textColor,
                }}
              >
                <Link id="sectionFourLink3" href="/blogs">
                  {liveFormData.blogsSectionBtn3
                    ? liveFormData.blogsSectionBtn3
                    : "مشاهده بیشتر"}
                </Link>
              </button>
            </div>
            <div
              className={`w-full sm:w-60 h-auto sm:h-80 border-2 border-gray-500 rounded-3xl p-4 flex flex-col items-center justify-center
             gap-3 hover:bg-gray-200 hover:shadow-2xl hover:shadow-sky-400 transition-shadow`}
              style={{
                backgroundColor: style.bgColor,
                color: style.textColor,
              }}
            >
              <div className="w-full h-40 overflow-hidden rounded-2xl">
                <Image
                  src={
                    liveFormData.blog4
                      ? liveFormData.blog4
                      : vip.src
                  }
                  width={240}
                  height={160}
                  className="w-full h-40 object-cover rounded-2xl"
                  alt="Blog post image"
                />
              </div>
              <div className=" text-center">
                <h5
                  id="sectionFourTitle4"
                  className="font-extrabold"
                  style={{ color: style.textColor }}
                >
                  {liveFormData.blogsSectionTitle4
                    ? liveFormData.blogsSectionTitle4
                    : "عنوان مقاله"}
                </h5>
                <p
                  className="opacity-75"
                  style={{ color: style.textColor }}
                >
                  {liveFormData.blogsSectionDescription4
                    ? liveFormData.blogsSectionDescription4
                    : "توضیحات کوتاه مقاله"}
                </p>
              </div>
              <button
                className={`text-[#d6d9df] border-b-2  font-extrabold p-2 px-6 hover:bg-sky-500 hover:rounded-lg transition-colors`}
              >
                <Link id="sectionFourLink4" href="/blogs">
                  {liveFormData.blogsSectionBtn4
                    ? liveFormData.blogsSectionBtn4
                    : "مشاهده بیشتر"}
                </Link>
              </button>
            </div>
          </div>

          {/* section Five  */}

          <h4
            id="sectionFiveH4"
            className={`text-3xl text-[#d6d9df] font-extrabold`}
          >
            {liveFormData.sectinon4H4
              ? liveFormData.sectinon4H4
              : "پرسش و پاسخ"}
          </h4>
          <div className="flex flex-col justify-center items-stretch w-full">
            <div className="space-y-4">
              <details
                className={`group border-s-4 border-gray-500 mx-4 p-6 [&_summary::-webkit-details-marker]:hidden`}
                style={{
                  backgroundColor: style.bgColor,
                }}
                open
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <span
                    id="sectionFiveQ"
                    className={`text-lg font-medium`}
                    style={{
                      color: style.secondaryColor,
                    }}
                  >
                    {liveFormData.section4boxTitle1
                      ? liveFormData.section4boxTitle1
                      : "پرسش و پاسخ بخش اول"}
                  </span>

                  <span
                    className={`shrink-0 rounded-full sm:p-3`}
                    style={{
                      color: style.textColor,
                      backgroundColor: style.primaryColor,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p
                  id="sectionFiveA"
                  className={`mt-4 leading-relaxed`}
                  style={{
                    color: style.textColor,
                  }}
                >
                  {liveFormData.section4boxDescription1
                    ? liveFormData.section4boxDescription1
                    : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. "}
                </p>
              </details>
              <details
                className={`group border-s-4 border-gray-500 text-[#d6d9df] mx-4 p-6 [&_summary::-webkit-details-marker]:hidden`}
                open
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <span
                    id="sectionFiveQ2"
                    className={`text-lg font-medium`}
                    style={{
                      color: style.secondaryColor,
                    }}
                  >
                    {liveFormData.section4boxTitle1
                      ? liveFormData.section4boxTitle1
                      : "پرسش و پاسخ بخش اول"}
                  </span>

                  <span
                    className={`shrink-0 rounded-full bg-[#377df4] p-1.5 text-[#d6d9df] sm:p-3`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p
                  id="sectionFiveA2"
                  className={`mt-4 leading-relaxed`}
                  style={{
                    color: style.textColor,
                  }}
                >
                  {liveFormData.section4boxDescription1
                    ? liveFormData.section4boxDescription1
                    : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. "}
                </p>
              </details>
              <details
                className={`group border-s-4 border-gray-500 text-[#d6d9df] mx-4 p-6 [&_summary::-webkit-details-marker]:hidden`}
                open
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <span
                    id="sectionFiveQ3"
                    className={`text-lg font-medium`}
                    style={{
                      color: style.secondaryColor,
                    }}
                  >
                    {liveFormData.section4boxTitle1
                      ? liveFormData.section4boxTitle1
                      : "پرسش و پاسخ بخش اول"}
                  </span>

                  <span
                    className={`shrink-0 rounded-full bg-[#377df4] p-1.5 text-[#d6d9df] sm:p-3`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p
                  id="sectionFiveA3"
                  className={`mt-4 leading-relaxed`}
                  style={{
                    color: style.textColor,
                  }}
                >
                  {liveFormData.section4boxDescription1
                    ? liveFormData.section4boxDescription1
                    : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. "}
                </p>
              </details>
              <details
                className={`group border-s-4 border-gray-500 text-[#d6d9df] mx-4 p-6 [&_summary::-webkit-details-marker]:hidden`}
                open
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <span
                    id="sectionFiveQ4"
                    className={`text-lg font-medium`}
                    style={{
                      color: style.secondaryColor,
                    }}
                  >
                    {liveFormData.section4boxTitle1
                      ? liveFormData.section4boxTitle1
                      : "پرسش و پاسخ بخش اول"}
                  </span>

                  <span
                    className={`shrink-0 rounded-full bg-[#377df4] p-1.5 text-[#d6d9df] sm:p-3`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p
                  id="sectionFiveA4"
                  className={`mt-4 leading-relaxed`}
                  style={{
                    color: style.textColor,
                  }}
                >
                  {liveFormData.section4boxDescription1
                    ? liveFormData.section4boxDescription1
                    : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. "}
                </p>
              </details>
            </div>
          </div>
        </div>

      
      </div>
    </>
  );
};

export default Home1;
