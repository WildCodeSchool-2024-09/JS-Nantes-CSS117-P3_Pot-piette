import "./UserDashboard.css";

function UserInfo() {
  return (
    <section className="userdash-container">
      <h1>Informations personnelles</h1>

      <section className="userdashform-group">
        <p>Pseudonyme*</p>

        <input type="text" value="ingrid44" readOnly />
        <button type="button" className="edit-btn">
          ✏️
        </button>
      </section>

      <section>
        <p>Email*</p>
        <section className="input-group">
          <input type="email" value="ingrid_ferran44@gmailcom" readOnly />
          <button type="button" className="edit-btn">
            ✏️
          </button>
        </section>
      </section>

      <section>
        <p>Mot de passe*</p>
        <div className="input-group">
          <span>Modifier</span>
        </div>
      </section>

      <section>
        <p>Date de naissance*</p>
        <section className="input-group">
          <input type="text" value="30/02/1981" readOnly />
          <button type="button" className="edit-btn">
            ✏️
          </button>
        </section>
      </section>

      <p className="note">* Champs obligatoires</p>

      <h2>Mes Restrictions Alimentaire</h2>
      <section className="restrictions">
        <section className="item">
          <img src="" alt="Mogette" />
          <p>Mogette</p>
        </section>
        <section className="item">
          <img src="" alt="Sel" />
          <p>Sel</p>
        </section>
        <section className="item-add-btn">
          <span>+</span>
        </section>
      </section>

      <p className="note">*Champs obligatoires</p>

      <button type="button" className="save-btn">
        Enregistrer
      </button>
    </section>
  );
}

export default UserInfo;
