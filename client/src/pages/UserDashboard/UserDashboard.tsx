import "./UserDashboard.css";
import { GoPencil } from "react-icons/go";

function UserInfo() {
  return (
    <section className="userdash-container">
      <h1>Informations personnelles</h1>
      <section>
        <p>Pseudonyme</p>
        <section className="input-group">
          <input type="text" placeholder="Pseudonyme" />
          <button type="button" className="edit-btn">
            <GoPencil />
          </button>
        </section>
      </section>

      <section>
        <p>Email</p>
        <section className="input-group">
          <input type="email" placeholder="E-mail" />
          <button type="button" className="edit-btn">
            <GoPencil />
          </button>
        </section>
      </section>

      <section>
        <p>Mot de passe</p>
        <section className="input-group">
          <p>Modifier</p>
          <button type="button" className="edit-btn">
            <GoPencil />
          </button>
        </section>
      </section>

      <button type="button" className="save-btn">
        Enregistrer
      </button>
    </section>
  );
}

export default UserInfo;
