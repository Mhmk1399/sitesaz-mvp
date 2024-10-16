import React, { useState } from "react";

const Step3 = ({
    updateFormData,
    setFormDataGallery
  }: {
    updateFormData: (data: object) => void;
    setFormDataGallery: (data: object) => void;
  }) => {
    const [formData, setFormData] = useState({
      sectionOneH1: "",
      sectionOneP: "",
      boxImage1: "",
      boxImage2: "",
      boxImage3: "",
      boxImage4: "",
      boxImage5: "",
      boxImage6: "",
      selectedGallery: ""
    });
    const galleries = [
      { id: 1, name: "gallery1" },
      { id: 2, name: "gallery2" }
    ];
    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      const { name, value } = e.target;
      const newData = { ...formData, [name]: value };
      setFormData(newData);
      setFormDataGallery(newData);
    };
    
  
    const handleImageChange = (
      e: React.ChangeEvent<HTMLInputElement>,
      imageName: string
    ) => {
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        const newData = { ...formData, [imageName]: imageUrl };
        setFormData(newData);
        setFormDataGallery(newData);
      }
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      updateFormData(formData);
    };
  
    return (
      <form
        className="space-y-1 bg-white/70 p-4 rounded-lg "
        onSubmit={handleSubmit}
      >
        <p  className="text-center w-full">انتخاب صفحه فروشگاه </p>
        <select
  className="p-2 rounded-2xl border-gray-400 shadow-md  focus:border-black focus:ring-black sm:text-sm w-full"
  id="optionSelect"
  name="selectedGallery"
  value={formData.selectedGallery}
  onChange={handleChange}
>
  <option value="">انتخاب کنید </option>
  {galleries.map((option) => (
    <option key={option.id} value={option.name}>
      {option.name}
    </option>
  ))}
</select>
        <input
          type="text"
          name="sectionOneH1"
          placeholder="متن سربرگ"
          value={formData.sectionOneH1}
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950"
        />
        <input
          type="text"
          name="sectionOneP"
          placeholder="توضیحات"
          value={formData.sectionOneP}
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl text-zinc-950"
        />
  
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <React.Fragment key={num}>
            <input
              type="text"
              name={`boxImage${num}`}
              placeholder={`باکس${num}`}
              value={formData[`boxImage${num}` as keyof typeof formData]}
              onChange={handleChange}
              className="w-full p-2 border rounded-2xl text-zinc-950 bg-pink-50"
            />
            <input
              type="file"
              onChange={(e) => handleImageChange(e, `image${num}File`)}
              className="w-full p-2 border rounded-2xl text-zinc-950 bg-pink-100"
            />
          </React.Fragment>
        ))}
  
        <button
          type="submit"
          className="bg-sky-500 text-white px-4 py-1 w-fit rounded-full hover:bg-sky-600 transition-colors"
        >
          مرحله بعد
        </button>
      </form>
    );
  };
  export default Step3;