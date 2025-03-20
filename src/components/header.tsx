import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faS, faClock, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

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
    </header>
  );
}

export default header;
