import imprimante from "../img/imprimante.jpg";
import logomagiccard from "../img/LogoMagiccard.png";
import cadenas from "../img/cadenastemplate.png";
import cadenaicon from "../img/cadenaicon.png";
import etiquette from "../img/etiquette.png";
import codebarre from "../img/codebarre.png";
import chariot from "../img/chariot.png";
import Carrousel from "../components/carrousel";
import antenne from "../img/antenne.png";
import accumulateur from "../img/accumulateur.png";
import geniemecanique from "../img/geniemecanique.png";
import tramway from "../img/tramway.png";
import metro from "../img/metro.png";
import sncf from "../img/sncf.png";
import tracteur from "../img/tracteur.png";
import clinique from "../img/clinique.png";
import voiture from "../img/voiture.png";
import aeronautiques from "../img/aeronautiques.png";
import minerals from "../img/minerals.png";
import audit from "../img/audit.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faS,
  faT,
  faCircle,
  faPrint,
  faTags,
  faHandshake,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

library.add(faS, faCircle, faPrint, faTags, faHandshake, faCircleInfo, faT);

const carrouselItems = [
  {
    description: "Condamnation Consignation",
    image: cadenas,
  },
  {
    description: "Marqueurs de tuyauteries",
    image: cadenas,
  },
  {
    description: "Imprimantes",
    image: cadenas,
  },
  {
    description: "Panneaux",
    image: cadenas,
  },
  {
    description: "Salut",
    image: cadenas,
  },
  {
    description: "test",
    image: cadenas,
  },
  {
    description: "autre",
    image: cadenas,
  },
  {
    description: "autre",
    image: cadenas,
  },
  {
    description: "autre",
    image: cadenas,
  },
  {
    description: "autre",
    image: cadenas,
  },
  {
    description: "autre",
    image: cadenas,
  },
  {
    description: "autre",
    image: cadenas,
  },
];

function accueil() {
  return (
    <div className="accueil">
      <h1>Découvrez nos produits et nos services</h1>
      <section className="accueil__decouverte">
        <div>
          <article className="accueil__decouverte__selection">
            <div className="accueil__decouverte__selection__illustration">
              <div className="accueil__decouverte__selection__illustration__new">
                NOUVEAUTÉ
              </div>
              <img
                className="accueil__decouverte__selection__illustration__logo"
                src={logomagiccard}
                alt="Logo magicard"
              />
              <img
                className="accueil__decouverte__selection__illustration__image"
                src={imprimante}
                alt="Une imprimante Magicard"
              />
              <figcaption className="accueil__decouverte__selection__illustration__figcaption">
                Imprimante de badges de sécurité
              </figcaption>
            </div>
            <Carrousel
              carrouselData={carrouselItems}
              classstring="accueil__decouverte__selection"
            ></Carrousel>
          </article>
          <aside className="accueil__decouverte__aside">
            <button className="accueil__decouverte__aside__identification">
              <img src={etiquette} alt="etiquette icone" />
              <div>
                <h3>IDENTIFICATION DE SECURITE</h3>
                <div>
                  Equipement d'usine, etiquetage visuel, panneaux sécuritaires,
                  marquage au sol ...
                </div>
              </div>
            </button>
            <button className="accueil__decouverte__aside__consignation">
              <img src={cadenaicon} alt="cadenas icon" />
              <div>
                <h3>CONSIGNATION, CONDAMNATION</h3>
                <div>
                  Risque électrique, risque mécanique, cadenas, accessoires sur
                  mesure, ...
                </div>
              </div>
            </button>
            <button className="accueil__decouverte__aside__application">
              <img src={codebarre} alt="code barre icon" />
              <div>
                <h3>APPLICATION, REPERAGE ET MARQUAGE</h3>
                <div>
                  Contraintes hospitalières, LEAN 5s, Armoire éléctrique, RFID,
                  échafaudages, ...
                </div>
              </div>
            </button>
            <button className="accueil__decouverte__aside__materiels">
              <img src={chariot} alt="chariot icon" />
              <div>
                <h3>MATERIELS ET CONSOMMABLES</h3>
                <div>
                  Imprimantes, Rubans, Lecteurs, EPI, Marquage industriel,
                  Materiel de chantier...
                </div>
              </div>
            </button>
          </aside>
        </div>
      </section>
      <section className="accueil__secteurs">
        <div>
          <h2>
            Profitez d'une expérience professionnelle importante, riche et
            concrète dans ce métier. Nous travaillons depuis 1989 dans un large
            éventail de secteurs d'activités
          </h2>
          <div className="accueil__secteurs__icons">
            <div className="accueil__secteurs__icons__label">
              <img src={antenne} alt="Icone antenne" />
              <div>Télécom</div>
            </div>
            <div className="accueil__secteurs__icons__label">
              <img src={accumulateur} alt="Icone accumulateur" />
              <div>Electricité basse et moyenne tension</div>
            </div>
            <div className="accueil__secteurs__icons__label">
              <img src={geniemecanique} alt="Icone genie mecanique" />
              <div>Mécanique</div>
            </div>
            <div className="accueil__secteurs__icons__label">
              <img src={tramway} alt="Icone tramway" />
              <div>Tramway</div>
            </div>
            <div className="accueil__secteurs__icons__label">
              <img src={metro} alt="Icone metro" />
              <div>Métro</div>
            </div>
            <div className="accueil__secteurs__icons__label">
              <img src={sncf} alt="Icone sncf" />
              <div>Train</div>
            </div>
            <div className="accueil__secteurs__icons__label">
              <img src={tracteur} alt="Icone tracteur" />
              <div>Agro-alimentaire</div>
            </div>
            <div className="accueil__secteurs__icons__label">
              <img src={clinique} alt="Icone clinique" />
              <div>Hôpitaux publics et privés</div>
            </div>
            <div className="accueil__secteurs__icons__label">
              <img src={voiture} alt="Icone voiture" />
              <div>Automobile</div>
            </div>
            <div className="accueil__secteurs__icons__label">
              <img src={aeronautiques} alt="Icone aeronautiques" />
              <div>Aéronautique</div>
            </div>
            <div className="accueil__secteurs__icons__label">
              <img src={minerals} alt="Icone minerais" />
              <div>Carrières et mines</div>
            </div>
            <div className="accueil__secteurs__icons__label">
              <img src={audit} alt="Icone audit" />
              <div>Audit et conseil</div>
            </div>
          </div>
          <div className="accueil__secteurs__dots">
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faCircle} />
          </div>
        </div>
      </section>
      <section className="accueil__infos">
        <div>
          <div className="accueil__infos__card">
            <div className="accueil__infos__card__icon">
              <FontAwesomeIcon icon={faPrint} />
            </div>
            <div className="accueil__infos__card__text">
              <h3>Matériel et consommables</h3>
              <div>
                Imprimantes industrielles, étiqueteuses, systèmes de sécurité,
                RFID, étiquettes, rubans, panneaux et autres produits de
                signalisation et d'indentification durables. <br />
                <br />
                Toute la gamme Brady est à votre disposition.
              </div>
            </div>
          </div>
          <div className="accueil__infos__card">
            <div className="accueil__infos__card__icon">
              <FontAwesomeIcon icon={faTags} />
            </div>
            <div className="accueil__infos__card__text">
              <h3>Production</h3>
              <div>
                Vos besoins sont ponctuels, en petites quantités ou peu
                fréquents ? Nous assurons pour vous la production rapide de vos
                étiquettes, badges, cartes, RFID.
              </div>
            </div>
          </div>
          <div className="accueil__infos__card">
            <div className="accueil__infos__card__icon">
              <FontAwesomeIcon icon={faHandshake} />
            </div>
            <div className="accueil__infos__card__text">
              <h3>Expertise</h3>
              <div>
                Notre expertise comprend 25 années d'expérience, sans cesse
                renouveléee. Nous vous apportons les solutions globales, de
                l'étude à la réalisation, en appui sur toute la gamme Brady.
              </div>
            </div>
          </div>
          <div className="accueil__infos__card">
            <div className="accueil__infos__card__icon">
              <FontAwesomeIcon icon={faCircleInfo} />
            </div>
            <div className="accueil__infos__card__text">
              <h3>Matériel et consommables</h3>
              <div>
                La maitrise de nos périphériques garantit une utilisation
                efficace et optimale de nos solutions d'identification.
                <br />
                <br />
                Pour vous accompagner, nous vous proposons des formations vous
                assurant une prise en main rapide, et une productivité maximale.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default accueil;
