import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import img from "../../assets/resources/programming.jpg";
import { TypeCurrentLanguage } from "../../types";
import { useTranslation } from "react-i18next";

const Footer = ({
  currentLanguage,
}: {
  currentLanguage: TypeCurrentLanguage;
}) => {
  const { t } = useTranslation("global");

  return (
    <footer className="bg-slate-800 text-white lg:px-40 px-4 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 md:text-left text-center">
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <img
            src={img}
            alt="img"
            className="h-20 w-30 object-contain border border-white b_glow rounded"
          />
          <p className="text-[25px] my-4">
            {t("Footer.thanks", { lng: currentLanguage })}
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <h2 className="text-[22px] font-semibold text-red-800 py-2">
            {t("Footer.services", { lng: currentLanguage })}
          </h2>
          <ul className="text-[16px] my-4">
            <li className="my-2">
              {t("Footer.webDesign", { lng: currentLanguage })}
            </li>
            <li className="my-2">
              {t("Footer.webDevelopment", { lng: currentLanguage })}
            </li>
            <li className="my-2">E - Commerce</li>
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-[22px] font-semibold text-red-800 py-2">
            {t("Footer.contact", { lng: currentLanguage })}
          </h2>
          <p className="text-[16px] my-4">E-mail: davidoar15@gmail.com</p>
          <p className="text-[16px] my-4">
            {t("Footer.phone", { lng: currentLanguage })}: +54 9 1124016394
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-[22px] font-semibold text-red-800 py-2">
            {t("Footer.networks", { lng: currentLanguage })}
          </h2>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/david-olivo-rodr%C3%ADguez-401412239/"
              className="text-white hover:text-red-600 transition-all duration-150 ease-in-out"
            >
              <AiFillLinkedin className="text-[25px]" />
            </a>

            <a
              href="https://github.com/Davidoar15"
              className="text-white hover:text-red-600 transition-all duration-150 ease-in-out"
            >
              <AiFillGithub className="text-[25px]" />
            </a>

            <a
              href="https://www.instagram.com/davidoar15/?igshid=MmIzYWVlNDQ5Yg%3D%3D"
              className="text-white hover:text-red-600 transition-all duration-150 ease-in-out"
            >
              <FiInstagram className="text-[25px]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
