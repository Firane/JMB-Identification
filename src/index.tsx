import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Accueil from "./pages/accueil";
import Services from "./pages/services";
import Imprimantes from "./pages/imprimantes";
import Consommable from "./pages/consommable";
import Information from "./pages/information";
import Nous from "./pages/nous";
import Contact from "./pages/contact";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Admin from "./pages/admin";
import Edit from "./pages/edit";
import DeleteArticle from "./pages/delete";
import Add from "./pages/add";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div>
      <Header />
      <Router>
        <Navbar />
        <Routes>
          <Route path="" element={<Accueil />} />
          <Route path="/services" element={<Services />} />
          <Route path="/imprimantes" element={<Imprimantes />} />
          <Route path="/consommable" element={<Consommable />} />
          <Route path="/information" element={<Information />} />
          <Route path="/nous" element={<Nous />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/add" element={<Add />} />
          <Route path="/delete" element={<DeleteArticle />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  </React.StrictMode>
);

reportWebVitals();
