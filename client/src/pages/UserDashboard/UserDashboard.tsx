import "./UserDashboard.css";
import { GoPencil } from "react-icons/go";

function UserInfo() {
  return (
    <main className="userdash-container">
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

      {/* <section>
        <p>Date de naissance*</p>
        <section className="dashinput-group">
          <input type="text" value="30/02/1981" readOnly />
          <button type="button" className="edit-btn">
            <GoPencil />
          </button>
        </section>
      </section>

      <h2>Mes Restrictions Alimentaire</h2>
      <section className="restrictions">
        <section className="item">
          <img src="src\assets\tests\Anchois.png" alt="Anchois" />
          <p>Anchois</p>
        </section>
        <section className="item">
          <img src="src\assets\tests\Jambon.png" alt="jambon" />
          <p>Jambon</p>
        </section>
        <section className="item-add-btn">
          <span>+</span>
        </section>
      </section>

      <p className="note">*Champs obligatoires</p> */}

      <button type="button" className="save-btn">
        Enregistrer
      </button>
    </main>
  );
}

export default UserInfo;
