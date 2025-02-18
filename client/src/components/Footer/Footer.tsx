import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <Link to={"/"}>
            <h2>Accueil</h2>
          </Link>
        </li>
        <li>
          <Link to={"/connexion"}>
            <p>Se connecter</p>
          </Link>
        </li>
        <li>
          <Link to={"/account"}>
            <p>Créer un compte</p>
          </Link>
        </li>
        <li>Concocté par la teamm Pot'Piette</li>
      </ul>
    </footer>
  );
}

export default Footer;
