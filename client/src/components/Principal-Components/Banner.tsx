import { useEffect } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import img from "../../assets/images/Banner.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

import { useTranslation } from "react-i18next";
import { TypeCurrentLanguage } from "../../types";

const Banner = ({
  currentLanguage,
}: {
  currentLanguage: TypeCurrentLanguage;
}) => {
  const { t } = useTranslation("global");

  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);

  return (
    <div className="lg:px-56 px-10 lg:py-0 py-20 text-left gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <div className="h-full lg:py-20 flex flex-col justify-center lg:items-start items-center text-white">
        <h1
          data-aos="fade-right"
          className="text-[52px] text-center text-red-500 font-semibold mb-8 leading-normal uppercase"
        >
          {t("Banner.title", { lng: currentLanguage })}
        </h1>
        <p data-aos="fade-left" className="text-[20px]">
          {t("Banner.text", { lng: currentLanguage })}
        </p>

        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a
                href="https://www.linkedin.com/in/david-olivo-rodr%C3%ADguez-401412239/"
                className="text-red-600 hover:text-red-500 rounded-full glow p-2"
              >
                <AiFillLinkedin className="text-[28px]" />
              </a>

              <a
                href="https://github.com/Davidoar15"
                className="text-red-600 hover:text-red-500 rounded-full glow p-2"
              >
                <AiFillGithub className="text-[28px]" />
              </a>

              <a
                href="https://www.instagram.com/davidoar15/?igshid=MmIzYWVlNDQ5Yg%3D%3D"
                className="text-red-600 hover:text-red-500 rounded-full glow p-2"
              >
                <FiInstagram className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <img
        data-aos="fade-up"
        src={img}
        width={290}
        height={290}
        alt="profile"
        className="rounded-full border-2 p-1 border-red-500 img_glow"
      />
    </div>
  );
};

export default Banner;
