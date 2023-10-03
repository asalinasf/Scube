import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import Tienda from "../pages/Tienda";
import Algoritmos from "../pages/Algoritmos";
import Contactanos from "../pages/Contactanos";
import CuboDetails from "../pages/CuboDetails";
import Noticias from "../pages/Noticias";
import NoticiaDetails from "../pages/NoticiaDetails";
import TipoCubos from "../pages/TipoCubos";

export function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/tienda" element={<Tienda />} />
        <Route exact path="/algoritmos" element={<Algoritmos />} />
        <Route exact path="/contactanos" element={<Contactanos />} />
        <Route exact path="/tienda/cubos/:cuboId" element={<CuboDetails />} />
        <Route exact path="/noticias" element={<Noticias />} />
        <Route exact path="/noticias/:id" element={<NoticiaDetails />} />
        <Route
          exact
          path="/tienda/cubos/tipo/:tipoCubo"
          element={<TipoCubos />}
        />
      </Routes>
    </Router>
  );
}
