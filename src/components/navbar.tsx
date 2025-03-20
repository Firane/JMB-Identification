import logo from "../img/logo.jpg";
import { Link } from "react-router";

function navbar() {
  return (
    <nav className="header__nav">
      <div className="header__nav__logo">
        <img src={logo} alt="logo jmb" />
      </div>
      <Link to="" className="header__nav__accueil">
        Accueil
      </Link>
      <Link to="/imprimantes" className="header__nav__imprimantes">
        Imprimantes
      </Link>
      <Link to="/services" className="header__nav__services">
        Services
      </Link>
      <Link to="/consommable" className="header__nav__Consommablesetproduits">
        Consommables & Produits
      </Link>
      <Link to="/information" className="header__nav__sinformer">
        S'informer
      </Link>
      <Link to="/nous" className="header__nav__nous">
        Qui sommes nous ?
      </Link>
      <Link to="/contact" className="header__nav__contact">
        Nous contacter
      </Link>
    </nav>
  );
}

export default navbar;
