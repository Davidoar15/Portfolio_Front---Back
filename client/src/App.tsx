import { useEffect } from "react";
import Principal from "./components/Principal";
import Details from "./components/Principal-Components/Project-Components/Details";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Error from "./components/Error";

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

  return (
    <div>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/project/:id" element={<Details />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
