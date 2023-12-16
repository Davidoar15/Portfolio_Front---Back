import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { TypeHandleLanguageChange, TypeCurrentLanguage } from "../../types";
import gif from "../../assets/resources/programming.gif";
import en from "../../assets/languages/estados-unidos.png";
import es from "../../assets/languages/espana.png";
import { useTranslation } from "react-i18next";

const NavBar = ({
  handleLanguageChange,
  currentLanguage,
}: {
  handleLanguageChange: TypeHandleLanguageChange;
  currentLanguage: TypeCurrentLanguage;
}) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const { t } = useTranslation("global");

  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition border-2 border-white">
        <ul className="text-center text-xl p-20">
          <li className="flex justify-center">
            {currentLanguage === "en" ? (
              <>
                <img
                  src={en}
                  className="w-8 h-8 cursor-pointer"
                  onClick={() => handleLanguageChange("es")}
                />
              </>
            ) : (
              <>
                <img
                  src={es}
                  className="w-8 h-8 cursor-pointer"
                  onClick={() => handleLanguageChange("en")}
                />
              </>
            )}
          </li>
          <Link spy={true} smooth={true} to="About">
            <li className="hover:text-red-500 my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer">
              {t("NavBar.about", { lng: currentLanguage })}
            </li>
          </Link>

          <Link spy={true} smooth={true} to="Services">
            <li className="hover:text-red-500 my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer">
              {t("NavBar.services", { lng: currentLanguage })}
            </li>
          </Link>

          <Link spy={true} smooth={true} to="Projects">
            <li className="hover:text-red-500 my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer">
              {t("NavBar.projects", { lng: currentLanguage })}
            </li>
          </Link>

          <Link spy={true} smooth={true} to="Contact">
            <li className="hover:text-red-500 my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer">
              {t("NavBar.contact", { lng: currentLanguage })}
            </li>
          </Link>
        </ul>
      </div>
    </>
  );

  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 border-b border-slate-800">
        <div className="flex items-center flex-1">
          <img
            src={gif}
            alt="gif"
            className="h-24 w-30 object-contain border border-white b_glow rounded"
          />
        </div>

        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link spy={true} smooth={true} to="About">
                <li className="hover:text-red-500 transition border-b-2 border-slate-900 hover:border-red-500 cursor-pointer">
                  {t("NavBar.about", { lng: currentLanguage })}
                </li>
              </Link>

              <Link spy={true} smooth={true} to="Services">
                <li className="hover:text-red-500 transition border-b-2 border-slate-900 hover:border-red-500 cursor-pointer">
                  {t("NavBar.services", { lng: currentLanguage })}
                </li>
              </Link>

              <Link spy={true} smooth={true} to="Projects">
                <li className="hover:text-red-500 transition border-b-2 border-slate-900 hover:border-red-500 cursor-pointer">
                  {t("NavBar.projects", { lng: currentLanguage })}
                </li>
              </Link>

              <Link spy={true} smooth={true} to="Contact">
                <li className="hover:text-red-500 transition border-b-2 border-slate-900 hover:border-red-500 cursor-pointer">
                  {t("NavBar.contact", { lng: currentLanguage })}
                </li>
              </Link>
              <li>
                {currentLanguage === "en" ? (
                  <>
                    <img
                      src={en}
                      className="w-8 h-8 cursor-pointer"
                      onClick={() => handleLanguageChange("es")}
                    />
                  </>
                ) : (
                  <>
                    <img
                      src={es}
                      className="w-8 h-8 cursor-pointer"
                      onClick={() => handleLanguageChange("en")}
                    />
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div>{click && content}</div>

        <button onClick={handleClick} className="block sm:hidden transition">
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
