"use client";
import {  useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import contact from "../../../public/images/contact us.jpg";
 
interface HomePalete {
  text: string;
  navbar_footer: string;
  navbar_footertext: string;
  home: string;
  background: string;
  textColor: string;
  primary: string;
  secondary: string;
}
interface FormDataContact {
  h1: string;
  description: string;
  socialLink: string;
  socialTelegram: string;
  socialWatsup: string;
  socialInstagram: string;
  formHeader: string;
  formName: string;
  formEmail: string;
  formDescription: string;
  btn: string;
  tellHeader: string;
  tell: string;
}


const Contact2: React.FC<{ formDataContact: FormDataContact; homePalete: HomePalete ;fontStyle:string}> = ({ formDataContact, homePalete ,fontStyle }) => {  const [style, setStyle] = useState({
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
    h1: "",
    description: "",
    socialLink: "",
    socialTelegram: "",
    socialWatsup: "",
    socialInstagram: "",
    formHeader: "",
    formName: "",
    formEmail: "",
    formDescription: "",
    btn: ""
  });
  useEffect(() => {
    setLiveFormData({
      h1: formDataContact.h1,
      description: formDataContact.description,
      socialLink: formDataContact.socialLink,
      socialTelegram: formDataContact.socialTelegram,
      socialWatsup: formDataContact.socialWatsup,
      socialInstagram: formDataContact.socialInstagram,
      formHeader: formDataContact.formHeader,
      formName: formDataContact.formName,
      formEmail: formDataContact.formEmail,
      formDescription: formDataContact.formDescription,
      btn: formDataContact.btn
    });
  }, [formDataContact]);

  // {/* start Contact Information Section */}
  const [formContactData, setFormContactData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormContactData({
      ...formContactData,
      [e.target.name]: e.target.value
    });
  };
  // {/* end Contact Information Section */}

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send to backend or API)
    setSubmitted(true);
    // Reset form
    setFormContactData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <>
      <div className="flex flex-row justify-center" style={{fontFamily:fontStyle}}>
        <div
          className={`flex flex-col  gap-6 items-center justify-center p-6  `}
          style={{
            backgroundColor: style.backgroundColor
          }}
          dir="rtl"
        >
          {/* Contact Information Section */}
          <div className="text-center flex flex-col justify-center items-center">
            <h1
              id="sectionOneH1"
              className={`text-4xl font-bold  mb-4 shadow-2xl shadow-gray-300  px-6 w-full py-3 rounded-tl-2xl rounded-br-2xl`}
              style={{
                backgroundColor: style.primary,
                color: style.textColor
              }}
            >
              {liveFormData.h1 ? liveFormData.h1 : "ارتباط با ما"}
            </h1>

            <Image src={contact} alt="contact" width={300} height={300} className="rounded-xl" />

            <p
              style={{ color: style.textColor }}
              id="sectionOneDescription"
              className={`text-lg mt-4`}
            >
              {liveFormData.description
                ? liveFormData.description
                : "ما دوست داریم از شما بشنویم! فرقی نمی‌کند در مورد ویژگی‌ها، قیمت یا هر چیز دیگری سؤالی داشته باشید، تیم ما آماده پاسخگویی به تمام سؤالات شما است."}
            </p>
            <h2
              id="sectionOneSocialLink"
              className={` text-2xl my-5 font-bold px-8 py-3 rounded-xl`}
              style={{
                backgroundColor: style.secondary,
                color: style.textColor
              }}
            >
              {liveFormData.socialLink
                ? liveFormData.socialLink
                : "شبکه های اجتماعی"}
            </h2>
            <div className="flex flex-row items-center justify-center mt-2 gap-2">
              {/* {instagram svg} */}

              <Link
                href={
                  liveFormData.socialInstagram
                    ? liveFormData.socialInstagram
                    : "#"
                }
                className="relative hover:scale-105 flex items-center justify-center w-[45px] h-[45px] rounded-md cursor-pointer transition-all duration-300 overflow-hidden bg-transparent border-none"
              >
                <span className="relative flex items-center justify-center w-full h-full bg-transparent animate-pulse rounded-lg transition-all duration-300">
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <rect
                        x="2"
                        y="2"
                        width="28"
                        height="28"
                        rx="6"
                        fill="url(#paint0_radial_87_7153)"
                      ></rect>{" "}
                      <rect
                        x="2"
                        y="2"
                        width="28"
                        height="28"
                        rx="6"
                        fill="url(#paint1_radial_87_7153)"
                      ></rect>{" "}
                      <rect
                        x="2"
                        y="2"
                        width="28"
                        height="28"
                        rx="6"
                        fill="url(#paint2_radial_87_7153)"
                      ></rect>{" "}
                      <path
                        d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
                        fill="white"
                      ></path>{" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                        fill="white"
                      ></path>{" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
                        fill="white"
                      ></path>{" "}
                      <defs>
                        {" "}
                        <radialGradient
                          id="paint0_radial_87_7153"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
                        >
                          {" "}
                          <stop stop-color="#B13589"></stop>{" "}
                          <stop offset="0.79309" stop-color="#C62F94"></stop>{" "}
                          <stop offset="1" stop-color="#8A3AC8"></stop>{" "}
                        </radialGradient>{" "}
                        <radialGradient
                          id="paint1_radial_87_7153"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
                        >
                          {" "}
                          <stop stop-color="#E0E8B7"></stop>{" "}
                          <stop offset="0.444662" stop-color="#FB8A2E"></stop>{" "}
                          <stop offset="0.71474" stop-color="#E2425C"></stop>{" "}
                          <stop
                            offset="1"
                            stop-color="#E2425C"
                            stop-opacity="0"
                          ></stop>{" "}
                        </radialGradient>{" "}
                        <radialGradient
                          id="paint2_radial_87_7153"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"
                        >
                          {" "}
                          <stop
                            offset="0.156701"
                            stop-color="#406ADC"
                          ></stop>{" "}
                          <stop offset="0.467799" stop-color="#6A45BE"></stop>{" "}
                          <stop
                            offset="1"
                            stop-color="#6A45BE"
                            stop-opacity="0"
                          ></stop>{" "}
                        </radialGradient>{" "}
                      </defs>{" "}
                    </g>
                  </svg>
                </span>
              </Link>

              {/* {telegram svg} */}

              <Link
                href={
                  liveFormData.socialTelegram
                    ? liveFormData.socialTelegram
                    : "#"
                }
                className="relative hover:scale-105 flex items-center justify-center w-[45px] h-[45px] rounded-md cursor-pointer transition-all duration-300 overflow-hidden bg-transparent border-none"
              >
                <span className="relative flex items-center justify-center w-full h-full bg-transparent animate-pulse rounded-lg transition-all duration-300">
                  <svg
                    viewBox="0 0 256 256"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    preserveAspectRatio="xMidYMid"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <path
                          d="M128,0 C57.307,0 0,57.307 0,128 L0,128 C0,198.693 57.307,256 128,256 L128,256 C198.693,256 256,198.693 256,128 L256,128 C256,57.307 198.693,0 128,0 L128,0 Z"
                          fill="#40B3E0"
                        >
                          {" "}
                        </path>{" "}
                        <path
                          d="M190.2826,73.6308 L167.4206,188.8978 C167.4206,188.8978 164.2236,196.8918 155.4306,193.0548 L102.6726,152.6068 L83.4886,143.3348 L51.1946,132.4628 C51.1946,132.4628 46.2386,130.7048 45.7586,126.8678 C45.2796,123.0308 51.3546,120.9528 51.3546,120.9528 L179.7306,70.5928 C179.7306,70.5928 190.2826,65.9568 190.2826,73.6308"
                          fill="#FFFFFF"
                        >
                          {" "}
                        </path>{" "}
                        <path
                          d="M98.6178,187.6035 C98.6178,187.6035 97.0778,187.4595 95.1588,181.3835 C93.2408,175.3085 83.4888,143.3345 83.4888,143.3345 L161.0258,94.0945 C161.0258,94.0945 165.5028,91.3765 165.3428,94.0945 C165.3428,94.0945 166.1418,94.5735 163.7438,96.8115 C161.3458,99.0505 102.8328,151.6475 102.8328,151.6475"
                          fill="#D2E5F1"
                        >
                          {" "}
                        </path>{" "}
                        <path
                          d="M122.9015,168.1154 L102.0335,187.1414 C102.0335,187.1414 100.4025,188.3794 98.6175,187.6034 L102.6135,152.2624"
                          fill="#B5CFE4"
                        >
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </span>
              </Link>

              {/* {whats app svg} */}

              <Link
                href={
                  liveFormData.socialWatsup ? liveFormData.socialWatsup : "#"
                }
                className="relative hover:scale-105 flex items-center justify-center w-[45px] h-[45px] rounded-md cursor-pointer transition-all duration-300 overflow-hidden bg-transparent border-none"
              >
                <span className="relative flex items-center justify-center w-full h-full bg-transparent animate-pulse rounded-lg transition-all duration-300">
                  <svg
                    viewBox="0 0 48 48"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>Whatsapp-color</title>{" "}
                      <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                      <g
                        id="Icons"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        {" "}
                        <g
                          id="Color-"
                          transform="translate(-700.000000, -360.000000)"
                          fill="#67C15E"
                        >
                          {" "}
                          <path
                            d="M723.993033,360 C710.762252,360 700,370.765287 700,383.999801 C700,389.248451 701.692661,394.116025 704.570026,398.066947 L701.579605,406.983798 L710.804449,404.035539 C714.598605,406.546975 719.126434,408 724.006967,408 C737.237748,408 748,397.234315 748,384.000199 C748,370.765685 737.237748,360.000398 724.006967,360.000398 L723.993033,360.000398 L723.993033,360 Z M717.29285,372.190836 C716.827488,371.07628 716.474784,371.034071 715.769774,371.005401 C715.529728,370.991464 715.262214,370.977527 714.96564,370.977527 C714.04845,370.977527 713.089462,371.245514 712.511043,371.838033 C711.806033,372.557577 710.056843,374.23638 710.056843,377.679202 C710.056843,381.122023 712.567571,384.451756 712.905944,384.917648 C713.258648,385.382743 717.800808,392.55031 724.853297,395.471492 C730.368379,397.757149 732.00491,397.545307 733.260074,397.27732 C735.093658,396.882308 737.393002,395.527239 737.971421,393.891043 C738.54984,392.25405 738.54984,390.857171 738.380255,390.560912 C738.211068,390.264652 737.745308,390.095816 737.040298,389.742615 C736.335288,389.389811 732.90737,387.696673 732.25849,387.470894 C731.623543,387.231179 731.017259,387.315995 730.537963,387.99333 C729.860819,388.938653 729.198006,389.89831 728.661785,390.476494 C728.238619,390.928051 727.547144,390.984595 726.969123,390.744481 C726.193254,390.420348 724.021298,389.657798 721.340985,387.273388 C719.267356,385.42535 717.856938,383.125756 717.448104,382.434484 C717.038871,381.729275 717.405907,381.319529 717.729948,380.938852 C718.082653,380.501232 718.421026,380.191036 718.77373,379.781688 C719.126434,379.372738 719.323884,379.160897 719.549599,378.681068 C719.789645,378.215575 719.62006,377.735746 719.450874,377.382942 C719.281687,377.030139 717.871269,373.587317 717.29285,372.190836 Z"
                            id="Whatsapp"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Contact Form */}

          <div
            className={`w-full  rounded-lg shadow-xl p-6  `}
            style={{
              backgroundColor: style.primary
            }}
          >
            <h3
              id="contact"
              className={`text-2xl font-semibold text-center mb-6`}
              style={{
                color: style.backgroundColor
              }}
            >
              {liveFormData.formHeader
                ? liveFormData.formHeader
                : "فرم تماس با ما"}
            </h3>

            {submitted ? (
              <div className="bg-green-500 text-white font-semibold p-4 rounded-lg text-center">
                متشکرم! پیام شما ارسال شد
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    id="nameForm"
                    htmlFor="name"
                    className={`block text-lg font-semibold opacity-75  mb-3`}
                    style={{
                      color: style.textColor
                    }}
                  >
                    {liveFormData.formName
                      ? liveFormData.formName
                      : "نام و نام خانوادگی"}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formContactData.name}
                    placeholder="نام و نام خانوادگی"
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2  rounded-lg shadow-lg shadow-stone-300 text-black border-none focus:shadow-none focus:outline-none "
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    id="emailForm"
                    htmlFor="email"
                    className={`block text-lg font-semibold opacity-75 mb-3`}
                    style={{
                      color: style.textColor
                    }}
                  >
                    {liveFormData.formEmail ? liveFormData.formEmail : "ایمیل"}
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="ایمیل"
                    name="email"
                    value={formContactData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2  rounded-lg shadow-lg shadow-stone-300 text-black border-none focus:shadow-none focus:outline-none "
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    id="messageForm"
                    htmlFor="message"
                    className={`block text-lg font-semibold opacity-75 mb-3`}
                    style={{
                      color: style.textColor
                    }}
                  >
                    {liveFormData.formDescription
                      ? liveFormData.formDescription
                      : "پیام شما"}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formContactData.message}
                    placeholder="پیام شما..."
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2  rounded-lg shadow-lg shadow-stone-300 text-black border-none focus:shadow-none focus:outline-none "
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    id="submitButton"
                    type="submit"
                    style={{
                      backgroundColor: style.secondary,
                      color: style.textColor
                    }}
                    className={`w-full px-4 py-3  font-semibold rounded-lg hover:scale-x-95 transition duration-300`}
                  >
                    {liveFormData.btn ? liveFormData.btn : "ارسال پیام"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact2;
