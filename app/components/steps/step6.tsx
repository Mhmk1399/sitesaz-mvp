import { useState } from "react";
import { ChromePicker, ColorResult } from "react-color";

interface InputProps {
    id: string;
    label: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
  }
const Step6: React.FC<{
    changeData: (data: object) => void;
    setSelectedFont: (font: string) => void;
  }> = ({  changeData ,setSelectedFont}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tag, setTag] = useState("");
    const [analytics, setAnalytics] = useState("");
    const [selectedColors, setSelectedColors] = useState({
      textColor: "#FF5733",
      navbar_footer: "#33FF57",
      navbar_footertext: "#33FF57",
      background: "#3357FF",
      primary: "#FF33F1",
      secondary: "#33FFF1"
    });
    const [font, setFont] = useState("");
  
    const fonts = [
      { name: "Vazir", id: 1 },
      { name: "BNazanin", id: 2 },
      { name: "Sahel", id: 3 },
      { name: "SahelFD", id: 4 },
      { name: "Parastoo", id: 5 },
      { name: "Samim", id: 6 },
      { name: "Tanha", id: 7 },
      { name: "Yekan", id: 8 },

    ];
  
    const handleColorChange = (color: ColorResult, colorKey: string) => {
      setSelectedColors((prevColors) => ({
        ...prevColors,
        [colorKey]: color.hex
      }));
      changeData({
        selectedColors: { ...selectedColors, [colorKey]: color.hex }
      });
    };
  
    const handleFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedFont(e.target.value);
      changeData({ selectedFont: e.target.value });
      setFont(e.target.value);
    };
  
    const handleInputChange = (field: string, value: string) => {
      switch (field) {
        case "title":
          setTitle(value);
          break;
        case "description":
          setDescription(value);
          break;
        case "tag":
          setTag(value);
          break;
        case "analytics":
          setAnalytics(value);
          break;
      }
      changeData({ [field]: value });
    };
    const Input: React.FC<InputProps> = ({
        id,
        label,
        type,
        value,
        onChange,
        required
      }) => (
        <div>
          <label htmlFor={id} className="block text-sm font-medium text-gray-700">
            {label}
          </label>
          <input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            required={required}
            className="mt-1 block w-full rounded-md border-gray-400 shadow-lg focus:border-sky-500 focus:ring-sky-500 sm:text-sm p-2"
          />
        </div>
      );
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const formData = {
        font,
        title,
        description,
        tag,
        analytics,
        selectedColors: {
          text: selectedColors.textColor,
          navbar_footer: selectedColors.navbar_footer,
          navbar_footertext: selectedColors.navbar_footertext,
          background: selectedColors.background,
          primary: selectedColors.primary,
          secondary: selectedColors.secondary
        }
      };
      changeData(formData);
    };
  
    return (
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-4 bg-opacity-80 rounded-lg"
      >
        <Input
          id="title"
          label="عنوان"
          type="text"
          value={title}
          onChange={(e) => handleInputChange("title", e.target.value)}
          required
        />
  
        <Input
          id="tag"
          label="تگ ها"
          type="text"
          value={tag}
          onChange={(e) => handleInputChange("tag", e.target.value)}
          required
        />
        <Input
          id="analytics"
          label="انالیتیکس"
          type="text"
          value={analytics}
          onChange={(e) => handleInputChange("analytics", e.target.value)}
          required
        />
        <div className="w-full">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            توضیحات
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => handleInputChange("description", e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-400 shadow-lg focus:border-sky-500 focus:ring-sky-500 sm:text-sm p-2"
          />
        </div>
  
        <h3 className="text-lg font-semibold">انتخاب رنگ‌ها:</h3>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-4 mx-auto">
          {Object.entries(selectedColors).map(([colorKey, colorValue]) => (
            <div key={colorKey}>
              <label className="block text-sm font-medium text-gray-700">
                {colorKey}:
              </label>
              <ChromePicker
                className=" mx-auto"
                color={colorValue}
                onChangeComplete={(color) => handleColorChange(color, colorKey)}
              />
            </div>
          ))}
        </div>
  
        <div>
          <p
            className="block text-lg font-medium text-gray-700 text-center"
          >
            انتخاب فونت
          </p>
          <select
            id="fontSelect"
            required
            value={font}
            onChange={handleFontChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base shadow-lg border-gray-300 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm rounded-2xl"
          >
            <option value="">انتخاب فونت</option>
            {fonts.map((font) => (
              <option key={font.id} value={font.name}>
                {font.name}
              </option>
            ))}
          </select>
        </div>
  
        <button
          type="submit"
          className="bg-sky-500 text-white px-4 py-1 rounded-full hover:bg-sky-600 transition-colors"
        >
          مرحله بعد
        </button>
      </form>
    );
  };
  export default Step6;