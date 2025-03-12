import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faS, faClock, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../img/logo.jpg";

library.add(faS, faClock, faPhone, faYoutube, faInstagram, faLinkedin);

function header() {
  return (
    <header className="header">
      <div className="header__infos">
        <div className="header__infos__start">
          <div className="header__infos__start__horaires">
            <FontAwesomeIcon icon={faClock} /> Du lundi au vendredi, de 9h à 18h
          </div>
          <div className="header__infos__start__tel">
            <FontAwesomeIcon icon={faPhone} />
            03 83 67 81 01
          </div>
        </div>
        <div className="header__infos__end">
          <div className="header__infos__end__name">JMB Identification</div>
          <a className="header__infos__end__newsletter" href="http://google.fr">
            Newsletter
          </a>
          <div className="header__infos__end__reseauxsociaux">
            {" "}
            <a href="http://google.fr">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="http://google.fr">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/company/jmb-identification/?originalSubdomain=fr">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
      <nav className="header__nav">
        <div className="header__nav__logo">
          <img src={logo} alt="logo jmb" />
        </div>
        <a className="header__nav__accueil" href="http://google.fr">
          Accueil
        </a>
        <a href="http://google.fr" className="header__nav__imprimantes">
          Imprimantes
        </a>
        <a href="http://google.fr" className="header__nav__services">
          Services
        </a>
        <a
          href="http://google.fr"
          className="header__nav__Consommablesetproduits"
        >
          Consommables & Produits
        </a>
        <a href="http://google.fr" className="header__nav__sinformer">
          S'informer
        </a>
        <a href="http://google.fr" className="header__nav__nous">
          Qui sommes nous ?
        </a>
        <a href="http://google.fr" className="header__nav__contact">
          Nous contacter
        </a>
      </nav>
    </header>
  );
}

export default header;
