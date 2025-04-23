function add() {
  return (
    <div className="add">
      <form className="add__form">
        <h3 className="add__form__title">Que souhaites-tu ajouter ?</h3>
        <fieldset className="add__form__pickContainer">
          <div className="add__form__pickContainer__radio">
            <input type="radio" name="pick" id="cadenas" />
            <label htmlFor="cadenas">Un cadenas ?</label>
          </div>
          <div className="add__form__pickContainer__radio">
            <input type="radio" name="pick" id="imprimante" />
            <label htmlFor="imprimante">Une imprimante ?</label>
          </div>
          <div className="add__form__pickContainer__radio">
            <input type="radio" name="pick" id="actualité" />
            <label htmlFor="actualite">Une actualité ?</label>
          </div>
        </fieldset>
        <fieldset className="add__form__cadenas">
          <h3>Décrit le cadenas :</h3>
          <div>
            <label htmlFor="cadenasNom">Nom du cadenas :</label>
            <input type="text" name="cadenasNom" id="cadenasNom" />
          </div>
          <div>
            Illustration du cadenas :
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
            />
          </div>
        </fieldset>
        <fieldset className="add__form__imprimante">
          <h3>Décrit l'imprimante :</h3>
          <div>
            <label htmlFor="imprimanteNom">Modele de l'imprimante :</label>
            <input type="text" name="imprimanteNom" id="imprimanteNom" />
          </div>
          <div>
            Illustration de l'imprimante :
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
            />
          </div>
        </fieldset>
        <fieldset className="add__form__actualite">
          <h3>Décrit l'actualité :</h3>
          <div>
            <label htmlFor="cadenasNom">Titre de l'actualité :</label>
            <input type="text" name="actualiteNom" id="actualiteNom" />
          </div>
          <div>
            <label htmlFor="cadenasNom">Description de l'actualité :</label>
            <textarea name="actualiteNom" id="actualiteNom" />
          </div>
          <div>
            Illustration du cadenas :
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default add;
