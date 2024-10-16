import { DarkFooter } from "../footers/dark-footer";
import { BigFooter } from "../footers/big-footer";
import { ManyLinkFooter } from "../footers/many-link-footer";
import { EmailInoputFooter } from "../footers/email-input-footer";
import ExplainFooter from "../footers/explain-footer";
import NewFooter from "../footers/new-footer";
import { SmallFooter } from "../footers/small-footer";
import SocialFooter from "../footers/social-footer";
import { SmallImageFooter } from "../footers/footerImages";
import NavbarThree from "../navbars/navbarThree/navbarThree";
import NavbarFive from "../navbars/NavBarFive/NavBarFive";
import NavbarOne from "../navbars/navbarOne/navbarOne";
import NavbarSeven from "../navbars/navbarSeven/navbarSeven";
import{ NavbarSix} from "../navbars/navbarSix/navbarSix";
import NavbarTwo from "../navbars/navbarTwo/navbarTwo";
import { useEffect, useState } from "react";
import Home1 from "../homes/homeOne";
import Gallery from "../gallery/gallery";
import AboutTwo from "../abouts/aboutTwo";
import Contact2 from "../contactUs/contactUs2";
import Contact1 from "../contactUs/contactUs1";
import Home2 from "../homes/homeTwo";
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

interface UserTemplateProps {
  selectedFooter: string;
  selectedNav: string;
  selectedLogo: string;
  selectedContact: string;
  selectedHome: string;
  selectedPalette: {
    textColor: string;
    navbar_footer: string;
    navbar_footertext: string;
    background: string;
    primary: string;
    secondary: string;
  };
  selectedFont: string;
  step: number;
  step3Data: Step3Data; // Step 3 data type can be defined more specifically based on use
  formDataAbout: formDataAbout; // Form Data About type can be defined more specifically based on use
  formDataContact: formDataContact; // Form Data Contact type can be defined more specifically based on use
  formDataGallery: formDataGallery; // Form Data Gallery type can be defined more specifically based on use
  selectedAbout: string;
}

export const UserTemplate: React.FC<UserTemplateProps> = ({
  selectedFooter,
  selectedNav,
  selectedLogo,
  selectedPalette,
  selectedFont,
  step,
  formDataAbout,
  step3Data,
  formDataContact,
  formDataGallery,
  selectedAbout,
  selectedContact,
  selectedHome,
}) => {
  const [logo, setLogo] = useState(selectedLogo);
  const [colors, setColors] = useState({
    color: selectedPalette.navbar_footer || "",
    textColor: selectedPalette.navbar_footertext || "",
  });
  const [homePalette, setHomePalette] = useState(selectedPalette);
  const [fontStyle, setFontStyle] = useState({ fontFamily: selectedFont });

  useEffect(() => {
    setLogo(selectedLogo);
    setColors({
      color: selectedPalette.navbar_footer,
      textColor: selectedPalette.navbar_footertext,
    });
    setHomePalette(selectedPalette);
    setFontStyle({ fontFamily: selectedFont });
  }, [selectedLogo, selectedPalette, selectedFont]);

  // Function to render the selected navbar component
  type NavbarComponentType = typeof NavbarOne | typeof NavbarTwo | typeof NavbarThree | typeof NavbarFive | typeof NavbarSix | typeof NavbarSeven;

  const renderNavbar = () => {
    const NavbarComponents: { [key: string]: NavbarComponentType  } = {
      NavbarOne,
      NavbarTwo,
      NavbarThree,
      NavbarFour: NavbarFive,
      NavbarFive: NavbarSix,
      NavbarSix: NavbarSeven,
    };

    const SelectedNavbar = NavbarComponents[selectedNav];
    return SelectedNavbar ? (
      <SelectedNavbar
        color={colors.color}
        textColor={colors.textColor}
        font={fontStyle.fontFamily}
        logo={logo}
      />
    ) : null;
  };
  // Function to render the selected footer component
  const renderFooter = () => {
    type FooterComponentType = typeof BigFooter | typeof DarkFooter | typeof ManyLinkFooter | typeof SocialFooter | typeof SmallImageFooter | typeof SmallFooter | typeof NewFooter | typeof ExplainFooter | typeof EmailInoputFooter;

    const FooterComponents: { [key: string]: FooterComponentType  } = {
      BigFooter,
      DarkFooter,
      ManyLinkFooter,
      SocialFooter,
      SmallImageFooter,
      SmallFooter,
      NewFooter,
      ExplainFooter,
      EmailInoputFooter,
    };

    const SelectedFooter = FooterComponents[selectedFooter];
    return SelectedFooter ? (
      <SelectedFooter
        color={colors.color}
        textColor={colors.textColor}
        font={selectedFont}
        logo={logo} socialLinks={[]} sections={[]} contactInfo={[]} copyright={""}      />
    ) : null;
  };

  // Function to render the selected about component
  const renderAbout = () => {
    type AboutComponentType =  typeof AboutTwo;
    const AboutComponents: { [key: string]: AboutComponentType } = {
     
      AboutTwo,
    };

    const SelectedAbout = AboutComponents[selectedAbout];
    return SelectedAbout ? (
      <SelectedAbout homePalete={{ ...homePalette, text: '', home: '' }} formDataAbout={formDataAbout} fontStyle={fontStyle.fontFamily}/>
    ) : null;
  };  // Function to render the selected contact component
  const renderContact = () => {
    type ContactComponentType = typeof Contact1 | typeof Contact2;

    const ContactComponents: { [key: string]: ContactComponentType } = {
      Contact1,
      Contact2,
    };

    const SelectedContact = ContactComponents[selectedContact];
    return SelectedContact ? (
      <SelectedContact homePalete={{ ...homePalette, text: '', home: '' }} formDataContact={formDataContact}  fontStyle={fontStyle.fontFamily} />
    ) : null;
  };

  // Function to render the selected home component
  const renderHome = () => {
    type HomeComponentType = typeof Home1 | typeof Home2;

    const HomeComponents: { [key: string]: HomeComponentType } = {
      Home1,
      Home2,
    };

    const SelectedHome = HomeComponents[selectedHome];
    return SelectedHome ? (
      <SelectedHome homePalete={{ ...homePalette, text: homePalette.textColor }} step3data={{ ...step3Data, testimonial: { quote: '' } }} fontStyle={fontStyle.fontFamily}  />
    ) : null;
  };

  return (
    <div className="relative  w-full h-fit lg:ml-20 mx-auto">
      <div
        style={{
          ...fontStyle,
          position: "absolute",
          minHeight: "700px",
          backgroundColor: "white",
          borderRadius: "30px",
          overflow: "auto",
          border: "10px solid black",
          display: "flex",
          flexDirection: "column",
          scrollbarWidth: "none",
          maxHeight: "90vh",
          minWidth: "300px",
          maxWidth: "50%",
        }}
        className="w-[90%] md:w-[70%] lg:w-[40%] mx-auto right-1/2 translate-x-1/2"
      >
        {step !== 4 && step !== 5 && (
          <div style={{ flex: 1, overflow: "auto" }} className="no-scrollbar">
            {renderNavbar()}
            {step > 1 && step !== 3 && step !== 5 && step !== 4 && (
              <div>{renderHome()}</div>
            )}
            {step === 3 && (
              <Gallery homePalete={homePalette} formDataGallery={formDataGallery} fontStyle={fontStyle.fontFamily} />
            )}
            {renderFooter()}
          </div>
        )}
        {step === 4 && <div>{renderAbout()}</div>}
        {step === 5 && <div>{renderContact()}</div>}
      </div>
    </div>
  );
};
