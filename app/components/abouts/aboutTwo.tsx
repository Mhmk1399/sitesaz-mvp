import Link from "next/link";
import { useEffect, useState } from "react";
import aboutimg from "../../../public/images/contact us.jpg";
import Image from "next/image";

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

interface FormDataAbout {
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
}

const AboutTwo = (props: {
  homePalete: HomePalete;
  formDataAbout: FormDataAbout;
  fontStyle: string;
}) => {
  const [style, setStyle] = useState({
    primary: "#a8dadc",
    secondary: "#e63946",
    background: "#ffffff",
    textColor: "#000000"
  });

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
    boxTitle7: "",
    boxDescription7: "",
    boxTitle8: "",
    boxDescription8: "",
    boxTitle9: "",
    boxDescription9: "",
    boxTitle10: "",
    boxDescription10: "",
    boxTitle11: "",
    boxDescription11: "",
    boxTitle12: "",
    boxDescription12: ""
  });

  useEffect(() => {
    setLiveFormData(props.formDataAbout);
  }, [props.formDataAbout]);
  useEffect(() => {
    setStyle(props.homePalete);
  }, [props.homePalete]);

  const boxItems = [
    {
      title: "boxTitle1",
      description: "boxDescription1",
      defaultTitle: "آیتم1",
      defaultDescription: "توضیحی در مورد آیتم 1"
    },
    {
      title: "boxTitle2",
      description: "boxDescription2",
      defaultTitle: "آیتم2",
      defaultDescription: "توضیحی در مورد آیتم 2"
    },
    {
      title: "boxTitle3",
      description: "boxDescription3",
      defaultTitle: "آیتم3",
      defaultDescription: "توضیحی در مورد آیتم 3"
    }
  ];

  return (
    <div className=" justify-center" style={{ fontFamily: props.fontStyle }}>
      <div
        style={{ backgroundColor: style.background }}
        className=" flex items-center justify-center border-2"
        dir="rtl"
      >
        <div className="p-10 mx-auto text-center">
          <Image
            src={aboutimg.src}
            alt="Logo"
            width={300}
            height={300}
            className="text-center items-center rounded-3xl"
          />

          {/* Heading */}
          <h1
            id="Heading1"
            className="text-4xl font-bold mb-6 mt-6"
            style={{ color: style.primary }}
          >
            {liveFormData.sectionOneH1 || "درباره ما"}
          </h1>

          {/* Description Section */}
          <p
            id="DescriptionP"
            className="text-lg mb-4"
            style={{ color: style.textColor }}
          >
            {liveFormData.boxDescription1 ||
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشدد."}
          </p>

          {/* Core Values Section */}
          <div className="flex flex-col  items-center justify-between mt-6 gap-5 max-w-2xl mx-auto">
            {boxItems.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-lg w-full  hover:scale-105 duration-150 ease-in-out transition-all"
                style={{ backgroundColor: style.primary }}
              >
                <h2
                  id={`box-title-${index + 1}`}
                  className="text-2xl font-semibold mb-3"
                  style={{ color: style.secondary }}
                >
                  {liveFormData.sectionTwoH2 || item.defaultTitle}
                </h2>
                <p
                  id={`box-description-${index + 1}`}
                  className="text-base"
                  style={{ color: style.background }}
                >
                  {liveFormData.boxDescription2 || item.defaultDescription}
                </p>
              </div>
            ))}{" "}
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <Link
              href="/"
              className="inline-block px-8  py-5 text-lg font-bold rounded-lg hover:opacity-70 transition-all"
              style={{
                backgroundColor: style.secondary,
                color: style.background
              }}
            >
              {liveFormData.boxTitle1 || "صفحه اصلی"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
