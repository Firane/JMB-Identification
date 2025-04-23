import { Link } from "react-router-dom";

function admin() {
  return (
    <div className="admin">
      <h2>Bienvenue Chloé sur ta page admin 👋</h2>
      <div>A toi de choisir ce que tu souhaites faire :</div>
      <Link to="/add">Ajouter du contenu</Link>
      <Link to="/edit">Editer du contenu</Link>
      <Link to="/delete">Supprimer du contenu</Link>
    </div>
  );
}

export default admin;
