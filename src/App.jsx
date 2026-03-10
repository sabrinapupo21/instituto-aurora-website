import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import NossaEquipe from "./pages/NossaEquipe";
import SobreNos from "./pages/SobreNos";
import Servicos from "./pages/Servicos";

import Contato from "./pages/Contato";

function App() {
  return (
    <>
      <Router basename="/institutoAurora">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="NossaEquipe" element={<NossaEquipe />} />
            <Route path="SobreNos" element={<SobreNos />} />
            <Route path="Servicos" element={<Servicos />} />

            <Route path="Contato" element={<Contato />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
