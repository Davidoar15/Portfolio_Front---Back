import img from "../../assets/images/Profile.png";
import CV_EN from "../../assets/CV/CV David Olivo Alfonso Rodríguez (English).pdf";
import CV_ES from "../../assets/CV/CV David Olivo Alfonso Rodríguez (Español).pdf";
import { TypeCurrentLanguage } from "../../types";
import { useTranslation } from "react-i18next";

const About = ({
  currentLanguage,
}: {
  currentLanguage: TypeCurrentLanguage;
}) => {
  const { t } = useTranslation("global");

  const handleDowload = () => {
    const link = document.createElement("a");
    if (currentLanguage === "en") {
      link.href = CV_EN;
      link.download = "CV David Olivo Alfonso Rodríguez (English).pdf";
      link.click();
    } else {
      link.href = CV_ES;
      link.download = "CV David Olivo Alfonso Rodríguez (Español).pdf";
      link.click();
    }
  };

  return (
    <div
      id="About"
      className="lg:px-56 px-10 lg:py-0 py-20 text-left gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center"
    >
      <img
        data-aos="fade-down"
        src={img}
        width={290}
        height={290}
        alt="profile"
        className="rounded border-2 p-1 border-red-500 img_glow"
      />

      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1
          data-aos="fade-right"
          className="text-[52px] font-semibold mb-8 leading-normal text-red-500 uppercase"
        >
          {t("About.title", { lng: currentLanguage })}
        </h1>
        <p data-aos="fade-left" className="text-[20px]">
          {t("About.text", { lng: currentLanguage })}
        </p>

        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <button
                onClick={handleDowload}
                className="neno-button shadow-xl hover:shadow-red-800/50 text-white border-2 hover:bg-red-800 border-red-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden"
              >
                {t("About.cv", { lng: currentLanguage })}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
