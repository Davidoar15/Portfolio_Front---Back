import { useForm } from "@formspree/react";
import { useState, ChangeEvent } from "react";
import { TypeCurrentLanguage } from "../../types";
import { useTranslation } from "react-i18next";

const Contact = ({
  currentLanguage,
}: {
  currentLanguage: TypeCurrentLanguage;
}) => {
  const { t } = useTranslation("global");

  const [state, handleSubmit] = useForm("xvojnpql");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  if (state.succeeded) {
    return (
      <div
        id="Contact"
        data-aos="fade-up"
        className="p-4 lg:p-20 flex flex-col items-center justify-center"
      >
        <h1 className="text-[52px] text-center font-semibold mb-15 leading-normal uppercase text-red-500">
          {t("Contact.postTitle", { lng: currentLanguage })}
        </h1>
        <p className="text-[48px] text-slate-500 mt-6">
          {t("Contact.postMsg", { lng: currentLanguage })}
        </p>
      </div>
    );
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };
  const isFormEmpty = Object.values(formValues).some(
    (value) => value.trim() === ""
  );

  return (
    <div
      id="Contact"
      className="p-4 lg:p-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-up"
        className="text-[52px] text-center font-semibold mb-15 leading-normal uppercase text-red-500"
      >
        {t("Contact.title", { lng: currentLanguage })}
      </h1>

      <form
        onSubmit={handleSubmit}
        data-aos="fade-up"
        className="flex flex-col gap-2 lg:w-1/2"
      >
        <div className="lg:flex gap-9">
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            placeholder={t("Contact.phName", { lng: currentLanguage })}
            className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-red-800 b_glow text-xl text-slate-500"
          />

          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder={t("Contact.phEmail", { lng: currentLanguage })}
            className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-red-800 b_glow text-xl text-slate-500"
          />
        </div>

        <textarea
          name="message"
          value={formValues.message}
          onChange={handleChange}
          cols={20}
          rows={10}
          placeholder={t("Contact.phTextarea", { lng: currentLanguage })}
          className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-red-800 b_glow text-xl text-slate-500"
        ></textarea>

        <button
          type="submit"
          disabled={isFormEmpty}
          className={`neno-button shadow-xl hover:shadow-red-800/50 text-white border-2 border-red-800 bg-slate-900 rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden b_glow text-xl font-bold mb-10
                    ${
                      isFormEmpty ? "disabled" : "hover:bg-red-800"
                    }`}
        >
          {t("Contact.submit", { lng: currentLanguage })}
        </button>
      </form>
    </div>
  );
};

export default Contact;
