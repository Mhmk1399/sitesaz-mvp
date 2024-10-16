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
const Step2 = ({
  updateFormData,
  step3Data,
  setStep3Data,
  setSelectedHome
}: {
  updateFormData: (data: object) => void;
  step3Data: Step3Data;
  setStep3Data: React.Dispatch<
    React.SetStateAction<Step3Data>
  >;
  setSelectedHome: (data: string) => void;
}) => {
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setStep3Data((prevData: Step3Data) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    imageName: string
  ) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setStep3Data((prevData: Step3Data) => ({
        ...prevData,
        [imageName]: imageUrl
      }));
    }
  };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (typeof step3Data === "object" && step3Data !== null) {
        updateFormData(step3Data);
      }
    };
    const homes = [
      { id: 1, name: "Home1" },
      { id: 2, name: "Home2" }
    ];
    const handleHomeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target;
      setSelectedHome(value);
    };
  
    return (
      <form
        className="space-y-1 bg-white/85 p-4 rounded-lg"
        onSubmit={handleSubmit}
      >
        {/* {for section one} */}
        <p className="text-center text-lg">انتخاب کنید  </p>
        <select
          className="p-2 rounded-2xl border-gray-400 shadow-md  focus:border-black focus:ring-black sm:text-sm w-full "
          id="optionSelect"
          onChange={(e) => {
            handleChange(e);
            handleHomeChange(e);
          }}
          required
          name="selectedHome"
        >
          <option value="" > انتخاب کنید :   </option>
          {homes.map((option) => (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="section1P1"
          placeholder="متن کوتاه برای سربرگ (شعار شما)"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="text"
          name="section1H1"
          placeholder="عنوان برای سربرگ"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="text"
          name="section1P2"
          placeholder="متن برای توضیحات اولیه"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        {/* buttons in section one */}
  
        <input
          type="text"
          name="section1Btn1"
          placeholder="دکمه صفحه اصلی"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="text"
          name="section1Btn2"
          placeholder="دکمه صفحه خدمات"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
  
        <input
          name="section2H2"
          placeholder="سربرگ خدمات شما"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <textarea
          name="section2P"
          placeholder="توضیحات برای قسمت خدمات"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        ></textarea>
  
        {/* box of section two */}
  
        <input
          type="text"
          name="section2box1"
          placeholder="عنوان برای قسمت خدمات آیتم 1"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="text"
          name="section2Description1"
          placeholder="توضیحات برای قسمت خدمات آیتم 1"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="text"
          name="section2box2"
          placeholder="عنوان برای قسمت خدمات آیتم 2"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="text"
          name="section2Description2"
          placeholder="توضیحات برای قسمت خدمات آیتم 2"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="text"
          name="section2box3"
          placeholder="عنوان برای قسمت خدمات آیتم 3"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="text"
          name="section2Description3"
          placeholder="توضیحات برای قسمت خدمات آیتم 3"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="text"
          name="section2box4"
          placeholder="عنوان برای قسمت خدمات آیتم 4"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="text"
          name="section2Description4"
          placeholder="توضیحات برای قسمت خدمات آیتم 4"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="text"
          name="section2box5"
          placeholder="عنوان برای قسمت خدمات آیتم 5"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="text"
          name="section2Description5"
          placeholder="توضیحات برای قسمت خدمات آیتم 5"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="text"
          name="section2box6"
          placeholder="عنوان برای قسمت خدمات آیتم 6"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="text"
          name="section2Description6"
          placeholder="توضیحات برای قسمت خدمات آیتم 6"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
  
        {/* button in section two */}
  
        <input
          type="text"
          name="section2Btn"
          placeholder="دکمه برای رفتن به صفحه خدمات"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
  
        {/* section three */}
  
        <input
          type="text"
          name="section3H3"
          placeholder="عنوان برای گالری"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="text"
          name="section3P"
          placeholder="توضیحات برای گالری"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
  
        {/* image gallery of section three */}
        <label className="text-black" htmlFor="gallery1">
          عکس 1 :
        </label>
        <input
          className="bg-rose-200 text-black p-2"
          type="file"
          onChange={(e) => handleImageChange(e, "gallery1")}
        />
        <br />
        <label className="text-black" htmlFor="gallery1">
          عکس 2 :
        </label>
        <input
          type="file"
          
          className="bg-rose-200 text-black p-2"
          onChange={(e) => handleImageChange(e, "galley2")}
        />
        <br />
        <label className="text-black" htmlFor="gallery1">
          عکس 3 :
        </label>
        <input
          className="bg-rose-200 text-black p-2"
          type="file"
          onChange={(e) => handleImageChange(e, "gallery3")}
        />
  
        <input
          type="text"
          name="titleImage1"
          placeholder="عنوان روی تصویر 1"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="text"
          name="btnImage1"
          placeholder="دکمه روی تصویر 1"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="text"
          name="titleImage2"
          placeholder="عنوان روی تصویر 2"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="text"
          name="btnImage2"
          placeholder="دکمه روی تصویر 2"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="text"
          name="titleImage3"
          placeholder="عنوان روی تصویر 3"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="text"
          name="btnImage3"
          placeholder="دکمه روی تصویر 3"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
  
        {/* blogs section */}
  
        <input
          type="text"
          name="blogsSection"
          placeholder="عنوان برای سربرگ مقالات"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
  
        {/* blog box 1 */}
  
        <input
          type="text"
          name="blogsSectionTitle"
          placeholder="عنوان برای مقاله 1 "
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="text"
          name="blogsSectionDescription"
          placeholder="توضیح کوتاه برای مقاله 1 "
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="text"
          name="blogsSectionBtn"
          placeholder="دکمه برای مقاله 1 "
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="file"
          placeholder="عکس برای مقاله 1 "
          onChange={(e) => handleImageChange(e, "blog1")}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
  
        {/* blog box 2  */}
  
        <input
          type="text"
          name="blogsSectionTitle2"
          placeholder="عنوان برای مقاله 2"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="text"
          name="blogsSectionDescription2"
          placeholder="توضیح کوتاه برای مقاله 2"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="text"
          name="blogsSectionBtn2"
          placeholder="دکمه برای مقاله 2"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="file"
          placeholder="عکس برای مقاله 2"
          onChange={(e) => handleImageChange(e, "blog2")}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        {/* blog box 3  */}
  
        <input
          type="text"
          name="blogsSectionTitle3"
          placeholder="عنوان برای مقاله 3"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="text"
          name="blogsSectionDescription3"
          placeholder="توضیح کوتاه برای مقاله 3"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="text"
          name="blogsSectionBtn3"
          placeholder="دکمه برای مقاله 3"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="file"
          placeholder="عکس برای مقاله 3"
          onChange={(e) => handleImageChange(e, "blog3")}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        {/* blog box 4  */}
  
        <input
          type="text"
          name="blogsSectionTitle4"
          placeholder="عنوان برای مقاله 4"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="text"
          name="blogsSectionDescription4"
          placeholder="توضیح کوتاه برای مقاله 4"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="text"
          name="blogsSectionBtn4"
          placeholder="دکمه برای مقاله 4"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="file"
          placeholder="عکس برای مقاله 4"
          onChange={(e) => handleImageChange(e, "blog4")}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
  
        {/* section of FAQs */}
  
        <input
          type="text"
          name="sectinon4H4"
          placeholder="سربرگ برای قسمت سوالات متداول"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
  
        {/* box of section four */}
  
        <input
          type="text"
          name="section4boxTitle1"
          placeholder="سربرگ برای قسمت سوالات متداول باکس 1"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="text"
          name="section4boxDescription1"
          placeholder="توضیحات برای قسمت سوالات متداول باکس 1"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="text"
          name="section4boxTitle2"
          placeholder="سربرگ برای قسمت سوالات متداول باکس 2"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="text"
          name="section4boxDescription2"
          placeholder="توضیحات برای قسمت سوالات متداول باکس 2"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="text"
          name="section4boxTitle3"
          placeholder="سربرگ برای قسمت سوالات متداول باکس 3"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="text"
          name="section4boxDescription3"
          placeholder="توضیحات برای قسمت سوالات متداول باکس 3"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="text"
          name="section4boxTitle4"
          placeholder="سربرگ برای قسمت سوالات متداول باکس 4"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
        <input
          type="text"
          name="section4boxDescription4"
          placeholder="توضیحات برای قسمت سوالات متداول باکس 4"
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950 "
        />
  
        <br />
        <br />
        <button
          type="submit"
          className="bg-sky-500 text-white px-4 py-1 rounded-full w-fit hover:bg-sky-600 transition-colors"
        >
          مرحله بعد
        </button>
      </form>
    );
  };
  export default Step2;