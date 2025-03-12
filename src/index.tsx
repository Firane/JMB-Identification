import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Accueil from "./pages/accueil";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/header";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="" element={<Accueil />} />
          {/* <Route path="/worlds" element={<Worlds />} />
          <Route path="/spell" element={<Spell />} />
          <Route path="/character" element={<Character />} /> */}
        </Routes>
      </Router>
    </div>
  </React.StrictMode>
);

reportWebVitals();
