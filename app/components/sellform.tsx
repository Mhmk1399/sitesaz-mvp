"use client";
import  {useState } from "react";
import { UserTemplate } from "./user-tamplate/UserTamplate";
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";
import Step4 from "./steps/step4";
import Step5 from "./steps/step5";
import Step6 from "./steps/step6";
type FormDataItem = {
  businessModel?: string;

};
interface formDataGallery{
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
}
interface formDataContact{
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
interface Step3Data {
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
  boxDescription12: "",
  selectedHome: ""
};
 interface formDataAbout{
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

export const SellForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormDataItem[]>(
    Array(6).fill({})
  );
console.log(formData);

  const [selectedFooter, setSelectedFooter] = useState<string>("");
  const [selectedNav, setSelectedNav] = useState<string>("");
  const [selectedLogo, setSelectedLogo] = useState<string>("");
  const [selectedHome, setSelectedHome] = useState<string>("");
  const [selectedPalette, setSelectedPalette] = useState<{
    navbar_footer: string;
    navbar_footertext: string;
    background: string;
    primary: string;
    secondary: string;
    textColor: string;
  }>({
    textColor: "#000000",
    navbar_footer: "#d4a373",
    navbar_footertext: "#000000",
    background: "#fefae0",
    primary: "#97DFFC",
    secondary: "#ccd5ae"
  });
  const [selectedContact, setSelectedContact] = useState<string>("Contact1");
  const [formDataContact, setFormDataContact] = useState<formDataContact>({
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
    tell: ""
  });
  const [selectedFont, setSelectedFont] = useState<string>("");
  const [selectedAbout, setSelectedAbout] = useState<string>("AboutOne");
  const [formDataAbout, setFormDataAbout] = useState<formDataAbout>({
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
  const [formDataGallery, setFormDataGallery] = useState<formDataGallery>({
    sectionOneH1: "",
    sectionOneP: "",
    boxImage1: "",
    image1File: "",
    boxImage2: "",
    image2File: "",
    boxImage3: "",
    image3File: "",
    boxImage4: "",
    image4File: "",
    boxImage5: "",
    image5File: "",
    boxImage6: "",
    image6File: ""
  });
  const [step3Data, setStep3Data] = useState<Step3Data>( {
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
    boxDescription12: "",
    selectedHome: ""
 
  });
  const [modalMessage, setModalMessage] = useState<{ [key: number]: string }>({
    1: "در مرحله اول باید نوار بالایی - نوار پایین و لوگو خودرا انتخاب کنید",
    2: "در مرحله دوم صفحه اصلی خود را انتخاب کنید",
    3: "در مرحله سوم صفحه فروشگاه خود را انتخاب کنید",
    4: "در مرحله چهارم صفحه درباره ما را انتخاب کنید",
    5: "در مرحله پنجم صفحه تماس با ما را انتخاب کنید",
    6: "در مرحله ششم مشخصات ظاهری سایت خود را تعیین کنید"
  });

  const headers = [
    "انتخاب نوار بالایی و پایینی و لوگو",
    "انتخاب صفحه اصلی",
    "انتخاب صفحه فروشگاه",
    "انتخاب صفحه درباره ما",
    "انتخاب صفحه تماس با ما",
    "انتخاب مشخصات ظاهری"
  ];

  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep((prevStep) => {
        showModal(prevStep + 1);
        return prevStep + 1;
      });
      
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const updateFormData = (stepData: object) => {
    setFormData((prevData) => {
      const newData = [...prevData];
      newData[currentStep - 1] = stepData;
      return newData;
    });

    if (currentStep === 3) {
      setStep3Data(stepData as Step3Data);
    } else if (currentStep === 4 && "selectedFooter" in stepData) {
      setSelectedFooter(stepData.selectedFooter as string);
    } else if (currentStep === 6 && "selectedColors" in stepData) {
      setSelectedPalette(
        stepData.selectedColors as {
          navbar_footer: string;
          navbar_footertext: string;
          background: string;
          primary: string;
          secondary: string;
          textColor: string;
        }
      );
    }

    nextStep();
  };

  const showModal = (p0?: number) => {
    setModalMessage((prevState) => ({
      ...prevState,
      [currentStep]: prevState[currentStep],
      p: p0
    }));
  };
  

  const closeModal = () => {
    setModalMessage((prevState) => ({ ...prevState, [currentStep]: "" }));
  };

  const Modal = ({
    message,
    onClose
  }: {
    message: string;
    onClose: () => void;
  }) => (
    <div className=" bg-white bg-opacity-60  right-auto   flex items-center justify-center mx-auto z-100 relative top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="bg-white p-6 rounded-lg shadow-xl flex justify-center items-center w-full flex-col mx-auto absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="text-lg mb-4">{message}</p>
        <button
          onClick={onClose}
          className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600 transition-colors"
        >
          بستن
        </button>
      </div>
    </div>
  );

  const renderStep = (step: number) => {
    const StepComponent = getStepComponent(step);
    return (
      <div className="reletive ">
        {modalMessage[currentStep] && (
          <Modal message={modalMessage[currentStep]} onClose={closeModal} />
        )}
        <StepComponent
          updateFormData={updateFormData}
          changeData={changeData}
          step3Data={step3Data}
          setStep3Data={setStep3Data}
          setFormDataAbout={(data: Partial<typeof formDataAbout>) => setFormDataAbout({...formDataAbout, ...data})}
          setFormDataContact={(data: Partial<typeof formDataContact>) => setFormDataContact({...formDataContact, ...data})}
          setFormDataGallery={(data: Partial<typeof formDataGallery>) => setFormDataGallery({...formDataGallery, ...data})}
          
          setSelectedAbout={(data: string) => setSelectedAbout(data)}
          setSelectedContact={(data: string) =>
            setSelectedContact(data)
          }
          setSelectedHome={(data: string) => setSelectedHome(data)}
          setSelectedFont={(data: string) => setSelectedFont(data)}
        />
      </div>
    );
  };  const changeData = (stepData: object) => {    setFormData((prevData) => {
      const newData = [...prevData];
      newData[currentStep - 1] = stepData;
      return newData;
    });
    if (currentStep === 1) {
      if ("selectedFooter" in stepData)
        setSelectedFooter(stepData.selectedFooter as string);
      if ("selectedNav" in stepData)
        setSelectedNav(stepData.selectedNav as string);
      if ("logo" in stepData) setSelectedLogo(stepData.logo as string);
    } else if (currentStep === 6 && "selectedColors" in stepData) {
      setSelectedPalette(
        stepData.selectedColors as {
          navbar_footer: string;
          navbar_footertext: string;
          background: string;
          primary: string;
          secondary: string;
          textColor: string;
        }
      );
    }
  };
  const getStepComponent = (step: number) => {
    switch (step) {
      case 1:
        return Step1; // Step 1 Component
      case 2:
        return Step2; // Step 2 Component
      case 3:
        return Step3; // Step 3 Component
      case 4:
        return Step4; // Step 4 Component
      case 5:
        return Step5; // Step 5 Component
      case 6:
        return Step6; // Step 6 Component
      default:
        return () => null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between justify-center  w-full lg:py-5 lg:px-10">
      <div className="cursor-pointer group overflow-hidden p-5 duration-1000 hover:duration-1000 w-full lg:w-1/2 bg-neutral-800 rounded-xl lg:min-w-[600px] relative">
        <div className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 -top-16 -left-12 absolute shadow-yellow-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-32 h-32"></div>
        <div className="group-hover:rotate-45 bg-transparent group-hover:scale-150 top-52 left-14 absolute shadow-red-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-32 h-32"></div>
        <div className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 top-32 left-56 absolute shadow-sky-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-32 h-32"></div>
        <div className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 top-16 left-12 absolute shadow-red-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-32 h-32"></div>
        <div className="group-hover:rotate-45 bg-transparent group-hover:scale-150 top-16 left-12 absolute shadow-green-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-52 h-52"></div>
        <div className="group-hover:rotate-45 bg-transparent group-hover:scale-150 -top-20 -left-12 absolute shadow-sky-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-72 h-72"></div>
        <div className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 top-20 left-12 absolute shadow-sky-500 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-9 h-9"></div>
        <div className="w-full h-full shadow-sm shadow-white p-3 bg-neutral-800 border bg-opacity-70 opacity-85 rounded-xl flex-col gap-2 flex justify-between">
          <h2 className="text-2xl font-bold text-white m-2 opacity-100">
            {currentStep !== 7
              ? headers[currentStep - 1]
              : formData[0].businessModel === "seller"
              ? "انتخاب کارت محصولات"
              : "انتخاب گالری"}
          </h2>
          {renderStep(currentStep)}
          <div className="button-container mt-4 opacity-100">
            {currentStep > 1 && (
              <button
                onClick={prevStep}
                className="bg-white text-sky-500 px-4 py-1 rounded-full ml-4 hover:bg-sky-100 transition-colors opacity-90"
              >
                مرحله قبل
              </button>
            )}
          </div>
        </div>
      </div>

      <UserTemplate
        selectedFooter={selectedFooter}
        selectedNav={selectedNav}
        selectedLogo={selectedLogo}
        selectedPalette={selectedPalette}
        selectedFont={selectedFont}
        step3Data={step3Data}
        step={currentStep}
        formDataAbout={formDataAbout}
        formDataContact={formDataContact}
        formDataGallery={formDataGallery}
        selectedAbout={selectedAbout}
        selectedContact={selectedContact}
        selectedHome={selectedHome}
      />
    </div>
  );
};

export default SellForm;
// finalize
