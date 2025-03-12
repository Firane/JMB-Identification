import imprimante from "../img/imprimante.jpg";
import logomagiccard from "../img/LogoMagiccard.png";
import cadenas from "../img/cadenastemplate.png";

function accueil() {
  return (
    <div className="accueil">
      <h1>Découvrez nos produits et nos services</h1>

      <article className="accueil__selection">
        <div className="accueil__selection__new">NOUVEAUTÉ</div>
        <img
          className="accueil__selection__logo"
          src={logomagiccard}
          alt="Logo magicard"
        />
        <img
          className="accueil__selection__illustration"
          src={imprimante}
          alt="Une imprimante Magicard"
        />
      </article>
    </div>
  );
}

export default accueil;
