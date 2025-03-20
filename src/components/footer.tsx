import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faS } from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import logojmbbig from "../img/jmblogobig.png";

library.add(faS, faYoutube, faInstagram, faFacebook);

function footer() {
  return (
    <footer className="footer">
      <div className="footer__liens">
        <div className="footer__liens__infos">
          <h4>JMB Identification</h4>
          <img src={logojmbbig} alt="Logo JMB" />
          <div>
            <span>Téléphone:</span> +33 03 83 67 81 01
          </div>
        </div>

        <div className="footer__liens__imprimantes">
          <h4>Imprimantes</h4>
          <ul>
            <li>
              <a href="http://google.fr">Imprimantes portables</a>
            </li>
            <li>
              <a href="http://google.fr">Imprimantes industrielles</a>
            </li>
            <li>
              <a href="http://google.fr">Imprimantes de signalisation</a>
            </li>
            <li>
              <a href="http://google.fr">Imprimantes badges</a>
            </li>
          </ul>
        </div>
        <div className="footer__liens__condamnation">
          <h4>Système de condamnation</h4>
          <ul>
            <li>
              <a href="http://google.fr">Cadenas de condamnation</a>
            </li>
            <li>
              <a href="http://google.fr">Condamnation électrique</a>
            </li>
            <li>
              <a href="http://google.fr">Condamnation mécanique</a>
            </li>
            <li>
              <a href="http://google.fr">Multi-condamnation</a>
            </li>
            <li>
              <a href="http://google.fr">Organisation de la condamnation</a>
            </li>
          </ul>
        </div>
        <div className="footer__liens__consommables">
          <h4>Consommables</h4>
          <ul>
            <li>
              <a href="http://google.fr">Fils</a>
            </li>
          </ul>
        </div>
        <div className="footer__liens__services">
          <h4>Services</h4>
          <ul>
            <li>
              <a href="http://google.fr">Expertise</a>
            </li>
            <li>
              <a href="http://google.fr">Formations</a>
            </li>
            <li>
              <a href="http://google.fr">Productions</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer__droits">
        <div className="footer__droits__copyrights">
          © Copyright 2025 JMB Identification
        </div>
        <div className="footer__droits__reseauxsociaux">
          <a href="http://google.fr">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="http://google.fr">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com/p/JMB-Identification-100063759384903/">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default footer;
