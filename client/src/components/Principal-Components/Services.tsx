import { useTranslation } from "react-i18next";
import { ServiceImg } from "../../Obj-Img";
import { TypeCurrentLanguage } from "../../types";

const Services = ({
  currentLanguage,
}: {
  currentLanguage: TypeCurrentLanguage;
}) => {
  const { t } = useTranslation("global");

  return (
    <div
      id="Services"
      className="p-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-red-500"
      >
        {t("Services", { lng: currentLanguage })}
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
        <div data-aos="fade-right" className="flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-red-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
              JavaScript
              <img
                src={ServiceImg.JS}
                alt="JavaScript"
                className="h-12 w-12 object-contain mt-4"
              />
            </h2>
          </div>
        </div>

        <div data-aos="fade-right" className="flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-red-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
              TypeScript
              <img
                src={ServiceImg.TS}
                alt="TypeScript"
                className="h-12 w-12 object-contain mt-4"
              />
            </h2>
          </div>
        </div>

        <div data-aos="fade-right" className="flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-red-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
              JAVA
              <img
                src={ServiceImg.JAVA}
                alt="JAVA"
                className="h-12 w-12 object-contain mt-4"
              />
            </h2>
          </div>
        </div>

        <div data-aos="fade-right" className="flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-red-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
              HTML5
              <img
                src={ServiceImg.HTML}
                alt="html"
                className="h-12 w-12 object-contain mt-4"
              />
            </h2>
          </div>
        </div>

        <div data-aos="fade-right" className="flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-red-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
              CSS3
              <img
                src={ServiceImg.CSS}
                alt="css"
                className="h-12 w-12 object-contain mt-4"
              />
            </h2>
          </div>
        </div>

        <div data-aos="fade-right" className="flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-red-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
              React
              <img
                src={ServiceImg.React}
                alt="React"
                className="h-12 w-12 object-contain mt-4"
              />
            </h2>
          </div>
        </div>

        <div data-aos="fade-right" className="flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-red-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
              Vue
              <img
                src={ServiceImg.Vue}
                alt="Vue"
                className="h-12 w-12 object-contain mt-4"
              />
            </h2>
          </div>
        </div>

        <div data-aos="fade-right" className="flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-red-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
              Next.js
              <img
                src={ServiceImg.Next}
                alt="Next"
                className="h-12 w-12 object-contain mt-4"
              />
            </h2>
          </div>
        </div>

        <div data-aos="fade-right" className="flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-red-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
              Node.js
              <img
                src={ServiceImg.Node}
                alt="Node"
                className="h-12 w-12 object-contain mt-4"
              />
            </h2>
          </div>
        </div>

        <div data-aos="fade-right" className="flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-red-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
              PostgreSQL
              <img
                src={ServiceImg.Postgre}
                alt="PostgreSQL"
                className="h-12 w-12 object-contain mt-4"
              />
            </h2>
          </div>
        </div>

        <div data-aos="fade-right" className="flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-red-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
              MongoDB
              <img
                src={ServiceImg.MongoDB}
                alt="MongoDB"
                className="h-12 w-12 object-contain mt-4"
              />
            </h2>
          </div>
        </div>

        <div data-aos="fade-right" className="flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-red-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
              Git
              <img
                src={ServiceImg.Git}
                alt="Git"
                className="h-12 w-12 object-contain mt-4"
              />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
