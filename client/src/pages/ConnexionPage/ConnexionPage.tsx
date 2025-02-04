import { Link } from "react-router-dom";
import "./ConnexionPage.css";

function ConnexionPage() {
  return (
    <section className="button-container">
      <Link to={"/login"}>
        <button type="button">Se connecter</button>
      </Link>
      <Link to={"/account"}>
        <button type="button">Créer un compte</button>
      </Link>
    </section>
  );
}

export default ConnexionPage;
