import React, { useState, useEffect } from "react";

const Step4 = ({
    updateFormData,
    changeData,
    setFormDataAbout,
    setSelectedAbout
  }: {
    updateFormData: (data: object) => void;
    changeData: (data: object) => void;
    setFormDataAbout: (data: object) => void;
    setSelectedAbout: (data: string) => void;
  }) => {
    const [formDataAbout, setFormData] = useState({
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
      selectedAbout: ""
    });
    const [selectedAbout, setSelectedOption] = useState("");
  
    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setFormData((prevData) => {
        const newData = { ...prevData, [name]: value };
        setFormDataAbout(newData);
        return newData;
      });
      changeData({ [name]: value });
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      updateFormData({
        ...formDataAbout,
        selectedAbout
      });
    };
    useEffect(() => {
      setFormDataAbout(formDataAbout);
    }, [formDataAbout]);
  
    return (
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 bg-opacity-80 flex flex-col space-y-4 rounded-lg"
      >
        <div>
          <select
            name="selectedAbout"
            value={selectedAbout}
            onChange={(e) => {
              setSelectedOption(e.target.value);
              setSelectedAbout(e.target.value);
  
              changeData({ selectedAbout: e.target.value });
            }}
            className="w-full p-2 border rounded-2xl text-zinc-950"
          >
            <option value="">انتخاب کنید</option>
            <option value="AboutOne">AboutOne</option>
            <option value="AboutTwo">AboutTwo</option>
          </select>
  
          <input
            type="text"
            name="sectionOneH1"
            placeholder="درباره ما"
            value={formDataAbout.sectionOneH1}
            onChange={handleChange}
            className="w-full p-2 border rounded-2xl text-zinc-950"
          />
          <input
            type="text"
            name="sectionOneH2"
            placeholder="ماموریت ما"
            value={formDataAbout.sectionOneH2}
            onChange={handleChange}
            className="w-full p-2 border rounded-2xl text-zinc-950"
          />
          <textarea
            name="sectionOneP"
            placeholder="در این قسمت توضیحات مربوط به ماموریت  می باشد"
            value={formDataAbout.sectionOneP}
            onChange={handleChange}
            className="w-full p-2 border rounded-2xl text-zinc-950"
          ></textarea>
  
          <input
            type="text"
            name="sectionTwoH2"
            placeholder="متن تستی برای سربرگ خدمات شما"
            value={formDataAbout.sectionTwoH2}
            onChange={handleChange}
            className="w-full p-2 border rounded-2xl text-zinc-950"
          />
          <textarea
            name="sectionTwoP"
            placeholder="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،"
            value={formDataAbout.sectionTwoP}
            onChange={handleChange}
            className="w-full p-2 border rounded-2xl text-zinc-950"
          ></textarea>
          <input
            type="text"
            name="sectionTwoLink"
            placeholder="مشاهده خدمات (دکمه)"
            value={formDataAbout.sectionTwoLink}
            onChange={handleChange}
            className="w-full p-2 border rounded-2xl text-zinc-950"
          />
  
          {[1, 2, 3, 4, 5, 6].map((boxNumber) => (
            <React.Fragment key={boxNumber}>
              <input
                type="text"
                name={`boxTitle${boxNumber}`}
                placeholder={`باکس ${boxNumber}`}
                value={
                  formDataAbout[
                    `boxTitle${boxNumber}` as keyof typeof formDataAbout
                  ]
                }
                onChange={handleChange}
                className="w-full p-2 border rounded-2xl text-zinc-950 bg-pink-50"
              />
              <textarea
                name={`boxDescription${boxNumber}`}
                placeholder={`توضیحات باکس ${boxNumber}`}
                value={
                  formDataAbout[
                    `boxDescription${boxNumber}` as keyof typeof formDataAbout
                  ]
                }
                onChange={handleChange}
                className="w-full p-2 border rounded-2xl text-zinc-950 bg-pink-100"
              ></textarea>
            </React.Fragment>
          ))}
        </div>
  
        <button
          type="submit"
          className="bg-sky-500 text-white px-4 py-1 rounded-full w-fit hover:bg-sky-600 transition-colors"
        >
          مرحله بعد
        </button>
      </form>
    );
  };
  export default Step4;