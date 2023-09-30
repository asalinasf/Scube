import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import Tienda from "../pages/Tienda";
import Algoritmos from "../pages/Algoritmos";
import Contactanos from "../pages/Contactanos";

export function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/tienda" element={<Tienda />} />
        <Route exact path="/algoritmos" element={<Algoritmos />} />
        <Route exact path="/contactanos" element={<Contactanos />} />
      </Routes>
    </Router>
  );
}
