import "./UserDashboard.css";

function UserInfo() {
  return (
    <section className="userdash-container">
      <h1>Informations personnelles</h1>

      <div className="userdashform-group">
        <p>Pseudonyme*</p>

        <input type="text" value="ingrid44" readOnly />
        <button type="button" className="edit-btn">
          ✏️
        </button>
      </div>

      <section className="">
        <p>Email*</p>
        <div className="input-group">
          <input type="email" value="ingrid_ferran44@gmailcom" readOnly />
          <button type="button" className="edit-btn">
            ✏️
          </button>
        </div>
      </section>

      <div className="">
        <p>Mot de passe*</p>
        <div className="input-group">
          <span>Modifier</span>
        </div>
      </div>

      <div>
        <p>Date de naissance*</p>
        <div className="input-group">
          <input type="text" value="30/02/1981" readOnly />
          <button type="button" className="edit-btn">
            ✏️
          </button>
        </div>
      </div>

      <p className="note">* Champs obligatoires</p>

      <h2>Mes Restrictions Alimentaire</h2>
      <div className="restrictions">
        <div className="item">
          <img src="/path-to-image-mogette.png" alt="Mogette" />
          <p>Mogette</p>
        </div>
        <div className="item">
          <img src="/path-to-image-salt.png" alt="Sel" />
          <p>Sel</p>
        </div>
        <div className="item-add-btn">
          <span>+</span>
        </div>
      </div>

      <p className="note">*Champs obligatoires</p>

      <button type="button" className="save-btn">
        Enregistrer
      </button>
    </section>
  );
}

export default UserInfo;
