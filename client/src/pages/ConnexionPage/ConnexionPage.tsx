import { Link } from "react-router-dom";
import "./ConnexionPage.css";

function ConnexionPage() {
  return (
    <section className="button-container">
      <Link to={"/login"}>Se connecter</Link>
      <Link to={"/account"}>Créer un compte</Link>
    </section>
  );
}

export default ConnexionPage;
