import { useState } from "react";

const Step1 = ({
    changeData,
    updateFormData
  }: {
    changeData: (data: object) => void;
    updateFormData: (data: object) => void;
  }) => {
    const navs = [
      { id: 1, name: "NavbarOne" },
      { id: 2, name: "NavbarTwo" },
      { id: 3, name: "NavbarThree" },
      { id: 5, name: "NavbarFour" },
      { id: 6, name: "NavbarFive" },
      { id: 7, name: "NavbarSix" },
    ];
    const footers = [
      { id: 1, name: "BigFooter" },
      { id: 2, name: "DarkFooter" },
      { id: 3, name: "ManyLinkFooter" },
      { id: 5, name: "SocialFooter" },
      { id: 7, name: "SmallImageFooter" },
      { id: 8, name: "SmallFooter" },
      { id: 9, name: "NewFooter" },
      { id: 10, name: "ExplainFooter" },
      { id: 11, name: "EmailInoputFooter" }
    ];
    const [logo, setLogo] = useState<string>("");
    const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
          const imageUrl = reader.result as string;
          setLogo(imageUrl);
          changeData({ logo: imageUrl });
        };
        reader.readAsDataURL(file);
      }
    };
    const [selectedNav, setSelectedNav] = useState("");
    const [selectedFooter, setSelectedFooter] = useState("");
    const handlenavChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newSelectedNav = e.target.value;
      setSelectedNav(newSelectedNav);
      changeData({ selectedNav: newSelectedNav });
    };
    const handleFooterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newSelectedFooter = e.target.value;
      setSelectedFooter(newSelectedFooter);
      changeData({ selectedFooter: newSelectedFooter });
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      updateFormData({ selectedNav, selectedFooter, logo });
    };
  
    return (
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-md bg-opacity-80 flex flex-col space-y-4"
      >
        <label htmlFor="optionSelect">انتخاب نوار بالایی:</label>
        <select
          className="p-2 rounded-md border-gray-400 shadow-md mx-2 focus:border-black focus:ring-black sm:text-sm "
          id="optionSelect"
          value={selectedNav}
          onChange={handlenavChange}
          required
        >
          <option value="">انتخاب کنید </option>
          {navs.map((option) => (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
        <label htmlFor="optionSelect">انتخاب کنید: </label>
        <select
          className="p-2 rounded-md border-gray-400 shadow-md mx-2 focus:border-black focus:ring-black sm:text-sm "
          id="optionSelect"
          value={selectedFooter}
          onChange={handleFooterChange}
          required
        >
          <option value="">انتخاب کنید:</option>
          {footers.map((option) => (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
        <div>
          <label
            htmlFor="logoUpload"
            className="block text-sm font-medium text-gray-700"
          >
            آپلود لوگو:
          </label>
          <input
            type="file"
            id="logoUpload"
            accept="image/*"
            onChange={handleLogoUpload}
            className="mt-1 block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-sky-50 file:text-sky-700
              hover:file:bg-sky-100"
          />
        </div>
  
        <button
          type="submit"
          className="bg-sky-500 text-white px-4 py-1 w-fit rounded-full hover:bg-sky-600 transition-colors"
        >
          مرحله بعد
        </button>
      </form>
    );
  };
  export default Step1;