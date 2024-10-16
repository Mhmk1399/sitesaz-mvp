  "use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";




const Contact1: React.FC<{
  formDataContact: {
    h1: string
    description: string
    socialLink: string
    socialTelegram: string
    socialWatsup: string
    socialInstagram: string
    formHeader: string
    formName: string
    formEmail: string
    formDescription: string
    btn: string
    tellHeader: string
    tell: string
  }
  homePalete: {
    background: string
    textColor: string
    primary: string
    secondary: string
  }
  fontStyle: string
}> = ({ formDataContact, homePalete,fontStyle }) => {
  const [style, setStyle] = useState({ backgroundColor: "", textColor: "",primary: "", secondary: "" });
  
  useEffect(() => {
    setStyle({ backgroundColor: homePalete.background, textColor: homePalete.textColor, primary: homePalete.primary, secondary: homePalete.secondary });
  }, [homePalete]);
  const [liveFormData, setLiveFormData] = useState<{
    h1: string
    description: string
    socialLink: string
    socialTelegram: string
    socialWatsup: string
    socialInstagram: string
    formHeader: string
    formName: string
    formEmail: string
    formDescription: string
    btn: string
    tellHeader: string
    tell: string
  }>({
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
    btn: "",
    tellHeader: "",
    tell: "",
  });

  useEffect(() => {
    setLiveFormData(formDataContact);
  }, [formDataContact]);
  
  console.log(homePalete);
  
  // {// start of form contact}

  const [formContactData, setFormContactData] = useState({
    name: "e",
    email: "e",
    message: "e",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormContactData({
      ...formContactData,
      [e.target.name]: e.target.value,
    });
  }; 

  useEffect(() => {
    setStyle({
      backgroundColor: homePalete.background,
      textColor: homePalete.textColor,
      primary: homePalete.primary,
      secondary: homePalete.secondary
    });
  }, [homePalete]);


  // {// end of form contact}

  const [submitted, setSubmitted] = useState(false);

  const handleFormContact = (e: React.FormEvent) => {
    e.preventDefault();
    setFormContactData({
      name: formContactData.name,
      email: formContactData.email,
      message: formContactData.message,
    });
    // Handle form submission logic (e.g., send to backend or API)
    setSubmitted(true);
    console.log(formContactData);

    // Reset form
    setFormContactData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <div className=" justify-center" style={{fontFamily:fontStyle}}>
        <div
          className={` h-auto flex flex-col items-center gap-8 justify-center  px-4`}
          style={style.backgroundColor!==''?{
            backgroundColor: style.backgroundColor
          }:{backgroundColor:"#ffefd3"}}
          dir="rtl"
        >
          <div
            className={`w-full p-4 rounded-xl shadow-lg mt-4 flex flex-col items-center justify-center`}
            style={{
              backgroundColor: style.primary,
            }}
          >
            <h1
              id="sectionOneH1"
              className={` text-center w-full text-3xl my-4 px-7 py-3 rounded-lg  font-semibold`}
             
              style={style.backgroundColor!==''?{
                backgroundColor: style.backgroundColor,
                color: style.textColor
              }:{backgroundColor:"#c9ada7",
                color: '#ffffff'
              }}
            >
              {liveFormData.h1 ? liveFormData.h1 : "ارتباط با ما"}
            </h1>
            <p
              id="sectionOneP"
              style={{ color: style.textColor }}
              className={` p-2 text-center text-base `}
            >
              {liveFormData.description
                ? liveFormData.description
                : " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله ر ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مور نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،"}
            </p>
            <Image
              src="/images/contact.svg"
              alt="contact"
              className="w-fit  "
              width={500}
              height={500}
            />
            <h3
              id="sectionOneH3"
              className={`  py-3 border-s-2 px-5 font-bold text-xl  mt-3 text-center`}
              style={style.backgroundColor!==''?{
                color: style.textColor
              }:{
                color: '#ffffff'
              }}            >
              {" "}
              {liveFormData.socialLink
                ? liveFormData.socialLink
                : "سربرگ برای شبکه های اجتماعی"}{" "}
            </h3>
            <div className="flex items-center justify-center p-[25px] gap-5 bg-lightGray shadow-custom w-fit h-fit">
              {/* Instagram */}
              <Link
                href={
                  liveFormData.socialInstagram
                    ? liveFormData.socialInstagram
                    : "#"
                }
                className="w-13 h-13 flex items-center justify-center overflow-hidden p-2 transition duration-300 rounded-lg hover:bg-[#f5599f] active:scale-90"
              >
                <svg className="w-[30px] fill-white" viewBox="0 0 16 16">
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048
               4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                  ></path>
                </svg>
              </Link>

              {/* Telegram */}
              <Link
                href={
                  liveFormData.socialTelegram
                    ? liveFormData.socialTelegram
                    : "#"
                }
                className="w-13 h-13 bg-darkGray flex items-center p-2 justify-center overflow-hidden transition duration-300 rounded-lg hover:bg-[#61c4fa] active:scale-90"
              >
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 24.00 24.00"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffff"
                  strokeWidth="0.00024000000000000003"
                  transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#CCCCCC"
                    strokeWidth="0.192"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z"
                      fill="#ffff"
                    ></path>{" "}
                  </g>
                </svg>
              </Link>

              {/* WhatsApp */}
              <Link
                href={
                  liveFormData.socialWatsup ? liveFormData.socialWatsup : "#"
                }
                className="w-13 h-13 bg-darkGray flex items-center p-2 justify-center overflow-hidden transition duration-300 rounded-lg hover:bg-[#59d86a] active:scale-90"
              >
                <svg
                  className="w-[30px] fill-white animate-none hover:animate-slide-in-top"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                </svg>
              </Link>
            </div>
            <span
              id="headingSpan"
              className={` shadow-xl p-5 rounded-3xl shadow-[#f8e8a9] mb-3 `}
              style={style.backgroundColor!==''?{
                color: style.textColor
              }:{
                color: '#ffffff'
              }}             >
              {" "}
              {liveFormData.tellHeader
                ? liveFormData.tellHeader
                : "آدرس و توضیحات تماس"}{" "}
            </span>
            <Link
              className=""
              href={`tel:+98${liveFormData.tell ? liveFormData.tell : ""}`}
            >
              <svg
                width="40px"
                height="59px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
                strokeWidth="0.00024000000000000003"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.98569 3.47641C7.9721 2.04283 5.94388 1.80096 4.7177 3.0919L3.1481 4.7444C2.61224 5.30855 2.20497 6.09224 2.25401
                 7.00591C2.35326 8.85513 3.13844 12.64 7.27161 16.9915C11.701 21.6548 15.9261 21.8893 17.75 21.7092C18.497 21.6355 19.1016
                  21.2371 19.545 20.7703L20.9655 19.2747C22.2705 17.9008 21.8904 15.6016 20.2575 14.6617L18.347 13.5621C17.2485 12.9298 
                  15.8862 13.111 15.0124 14.031L14.6038 14.4612C14.5748 14.4714 14.484 14.4959 14.3103 14.4677C13.9078 14.4023 13.0391 14.0469
                   11.607 12.5392C10.1793 11.0361 9.82765 10.1104 9.7609 9.65489C9.7287 9.43513 9.76142 9.31935 9.77436 9.28299L9.7765
                    9.27719L10.0214 9.0194C10.9889 8.00073 11.0574 6.40656 10.2467 5.25989L8.98569 3.47641ZM5.80528 4.12493C6.32812 3.57449
                     7.24855 3.61773 7.7609 4.34237L9.02189 6.12586C9.44403 6.72292 9.3793 7.51731 8.93376 7.98637L8.64695 8.28834L9.17861
                      8.79333C8.64694 8.28835 8.64625 8.28907 8.64556 8.2898L8.64415 8.2913L8.64125 8.29441L8.63514 8.30104L8.62182
                       8.31603C8.61246 8.32678 8.60219 8.33909 8.5912 8.35298C8.56922 8.38075 8.54435 8.41489 8.51826 8.45566C8.46594 8.53742
                        8.40921 8.64508 8.36116 8.78011C8.26346 9.05468 8.21022 9.41827 8.27675 9.87234C8.40746 10.7645 8.99202 11.9642 10.5194
                         13.5722C12.0422 15.1755 13.1924 15.8058 14.0699 15.9483C14.5201 16.0214 14.8846 15.963 15.1606 15.8541C15.2955 15.8009
                          15.4023 15.7384 15.4824 15.6816C15.5223 15.6533 15.5556 15.6264 15.5825 15.6028C15.5959 15.591 15.6078 15.5801 
                          15.6181 15.5701L15.6324 15.556L15.6388 15.5495L15.6417 15.5464L15.6432 15.545C15.6438 15.5442 15.6445 15.5435
                           15.1174 15.0428L15.6446 15.5435L16.1 15.064C16.4854 14.6582 17.086 14.567 17.5987 14.8621L19.5092 15.9618C20.3301
                            16.4342 20.4907 17.5965 19.8779 18.2417L18.4574 19.7373C18.1783 20.031 17.8864 20.1885 17.6026 20.2165C16.1676 
                            20.3581 12.4234 20.2373 8.35919 15.9584C4.48307 11.8776 3.83289 8.43533 3.75185 6.92552C3.73042 6.52621 3.90429 
                            6.12632 4.23568 5.77743L5.80528 4.12493Z"
                    fill="#55a630"
                  ></path>{" "}
                  <path
                    d="M15.75 3.99978C15.75 3.58556 15.4143 3.24978 15 3.24978C14.5858 3.24978 14.25 3.58556 14.25 3.99978L14.25 5.05178C14.25
                 5.95026 14.25 6.69947 14.33 7.29426C14.4144 7.92205 14.6 8.48885 15.0555 8.94432C15.511 9.39979 16.0778 9.58546 16.7056 
                 9.66987C17.1662 9.7318 17.7195 9.74575 18.3631 9.74888L17.5315 10.4141C17.2081 10.6729 17.1556 11.1449 17.4144 11.4683C17.6731
                  11.7917 18.1451 11.8442 18.4686 11.5854L20.9686 9.58543C21.1465 9.4431 21.25 9.22761 21.25 8.99978C21.25 8.77194 21.1465 
                  8.55645 20.9686 8.41412L18.4686 6.41412C18.1451 6.15537 17.6731 6.20781 17.4144 6.53125C17.1556 6.8547 17.2081 7.32667 17.5315
                   7.58543L18.3606 8.24866C17.7357 8.24539 17.2729 8.23265 16.9054 8.18324C16.444 8.1212 16.2465 8.01398 16.1162 7.88366C15.9858
                    7.75334 15.8786 7.55585 15.8166 7.09438C15.7516 6.61135 15.75 5.96379 15.75 4.99978V3.99978Z"
                    fill="#55a630"
                  ></path>{" "}
                </g>
              </svg>
            </Link>
          </div>
          <div
            className={` shadow-lg rounded-xl p-8 max-w-md w-full mt-4`}
            style={style.backgroundColor!==''?{
              color: style.backgroundColor
            }:{
              color: '#55a630',
            }} 
          >
            <h2
              id="contact-form-header"
              className={`text-3xl font-bold my-4  text-center px-2 py-2`}
              style={style.backgroundColor!==''?{
                color: style.secondary
              }:{
                color: '#c9ada7'
              }}
            >
              {liveFormData.formHeader ? liveFormData.formHeader : "تماس با ما"}
            </h2>
            {submitted ? (
              <div className="bg-green-500 text-white font-semibold p-4 rounded-lg text-center">
                متشکرم! پیام شما ارسال شد
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleFormContact}>
                {/* Name Field */}
                <div>
                  <label
                    id="nameForm"
                    htmlFor="name"
                    className={`block font-semibold mb-2`}
                    style={style.backgroundColor!==''?{
                      color: style.textColor
                    }:{
                      color: '#ffffff'
                    }}
                  >
                    {liveFormData.formName ? liveFormData.formName : "نام"}
                  </label>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    id="name"
                    required
                    className="w-full px-4 py-2 border text-black border-deepBlue rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f4d35e]"
                    placeholder="نام"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    id="emailForm"
                    htmlFor="email"
                    className={`block font-semibold mb-2 `}
                    style={style.backgroundColor!==''?{
                    
                      color: style.textColor
                    }:{
                      color: '#ffffff'
                    }}       >
                    {liveFormData.formEmail ? liveFormData.formEmail : "ایمیل"}
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    id="email"
                    required
                    className="w-full px-4 py-2 text-black border border-deepBlue rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f4d35e]"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    id="messageForm"
                    htmlFor="message"
                    className={`block font-semibold mb-2`}
                    style={style.backgroundColor!==''?{
                    
                      color: style.textColor
                    }:{
                      color: '#ffffff'
                    }}                  >
                    {liveFormData.formDescription
                      ? liveFormData.formDescription
                      : "توضیحات"}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border text-black border-deepBlue rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f4d35e]"
                    placeholder="متن پیام شما ..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    id="submitForm"
                    type="submit"
                    className={` font-bold text-lg mb-2 hover:scale-95 transition-all duration-300 hover:opacity-90 py-3 px-6 rounded-xl`}
                    style={style.backgroundColor!==''?{
                      backgroundColor: style.secondary,
                      color: style.textColor
                    }:{backgroundColor:"#c9ada7",
                      color: '#ffffff'
                    }}
                  >
                    {liveFormData.btn ? liveFormData.btn : "ارسال"}
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
export default Contact1;
