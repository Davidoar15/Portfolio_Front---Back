import { useTranslation } from "react-i18next";
import errorImage from "../assets/resources/Survey-error-image.png";
import { TypeCurrentLanguage } from "../types";

const Error = ({
  currentLanguage,
}: {
  currentLanguage: TypeCurrentLanguage;
}) => {
  const { t } = useTranslation("global");

  return (
    <div className="flex flex-col justify-center items-center gap-10 bg-slate-700 min-h-screen">
      <div className="w-[200px] h-auto">
        <img className="w-[100%] h-[100%]" src={errorImage} alt="Page Error" />
      </div>
      <h1 className="font-bold font-mono text-2xl">
        {t("Error.title", { lng: currentLanguage })}
      </h1>
      <h3 className="font-semibold font-mono text-xl text-center mx-5">
        {t("Error.text", { lng: currentLanguage })}
      </h3>
    </div>
  );
};

export default Error;
