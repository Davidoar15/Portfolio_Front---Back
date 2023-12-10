import { useEffect, useState } from "react";
import Principal from "./components/Principal";
import Details from "./components/Principal-Components/Project-Components/Details";
import Error from "./components/Error";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
  },
});

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      return;
    }

    const validRoutes = ["/", "/project"];
    const isValidRoute = validRoutes.some((route) =>
      location.pathname.startsWith(route)
    );
    if (!isValidRoute) {
      navigate("/error");
    }
  }, [location.pathname, navigate]);

  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "en"
  );

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
    localStorage.setItem("selectedLanguage", language);
  };

  return (
    <I18nextProvider i18n={i18next}>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Principal
                handleLanguageChange={handleLanguageChange}
                currentLanguage={currentLanguage}
              />
            }
          />
          <Route
            path="/project/:id"
            element={
              <Details
                handleLanguageChange={handleLanguageChange}
                currentLanguage={currentLanguage}
              />
            }
          />
          <Route
            path="/*"
            element={<Error currentLanguage={currentLanguage} />}
          />
        </Routes>
      </div>
    </I18nextProvider>
  );
}

export default App;
