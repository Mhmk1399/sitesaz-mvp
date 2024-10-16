import { useState } from "react";
interface FormData {
  selectedContact: string;
  h1: string;
  description: string;
  socialLink: string;
  socialTelegram: string;
  socialWatsup: string;
  socialInstagram: string;
  tellHeader: string;
  tell: string;
  formHeader: string;
  formName: string;
  formEmail: string;
  formDescription: string;
  btn: string;
}

const Step5 = ({
    updateFormData,
    setFormDataContact,
    changeData,
    setSelectedContact
  }: {
    updateFormData: (data: object) => void;
    setFormDataContact: (data: object) => void;
    changeData: (data: object) => void;
    setSelectedContact: (data: string) => void;
  }) => {
    const options = [
      { id: 1, name: "Contact1" },
      { id: 2, name: "Contact2" }
    ];
    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
      const { name, value } = e.target;
      setFormData((prevData: FormData) => {
        const newData = { ...prevData, [name]: value };
        setFormDataContact(newData);
        changeData(newData);
        return newData;
      });
    };
    const [formData, setFormData] = useState<FormData>({
      selectedContact: "",
      h1: "",
      description: "",
      socialLink: "",
      socialTelegram: "",
      socialWatsup: "",
      socialInstagram: "",
      tellHeader: "",
      tell: "",
      formHeader: "",
      formName: "",
      formEmail: "",
      formDescription: "",
      btn: ""
    });
    
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      updateFormData(formData);
    };
  
    const handleChangecontact = (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
      const { name, value } = e.target;
      setSelectedContact(value);
      setFormData((prevData: FormData) => {
        const newData = { ...prevData, [name]: value };
        setFormDataContact(newData);
        changeData(newData);
        return newData;
      });
    };
    return (
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-md bg-opacity-80 flex flex-col space-y-4"
      >
        <div>
          <label htmlFor="selectedContact">انتخاب کنید:</label>
          <select
            className="p-2 rounded-md border-gray-400 shadow-md mx-2 focus:border-black focus:ring-black sm:text-sm"
            id="selectedContact"
            name="selectedContact"
            value={formData.selectedContact}
            onChange={handleChangecontact}
            required
          >
            <option value="">انتخاب کنید:</option>
            {options.map((option) => (
              <option key={option.id} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        {Object.keys(formData).map((key) => {
          if (key !== "selectedContact") {
            return (
              <input
                key={key}
                type="text"
                name={key}
                placeholder={key}
                value={formData[key as keyof typeof formData]}
                onChange={handleChange}
                className="w-full p-2 border rounded-2xl text-zinc-950"
              />
            );
          }
          return null;
        })}
        <button
          type="submit"
          className="bg-sky-500 text-white px-4 py-1 w-fit rounded-full hover:bg-sky-600 transition-colors"
        >
          مرحله بعد
        </button>
      </form>
    );
  }; 
  export default Step5;