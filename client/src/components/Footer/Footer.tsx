import { Link } from "react-router-dom";
import "./Footer.css";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContext";

function Footer() {
  const { isLogged, logout } = useContext(AuthContext) || {};

  const handleLogout = () => {
    if (isLogged) {
      logout();
      toast.info("Vous avez été déconnecté");
    }
  };

  return (
    <footer>
      {isLogged ? (
        <ul>
          <li>
            <Link to={"/"}>
              <h2>Accueil</h2>
            </Link>
          </li>

          <li>
            <button type="button" onClick={handleLogout}>
              Se déconnecter{" "}
            </button>
          </li>
          <li>Concocté par la team Pot'Piette</li>
        </ul>
      ) : (
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
          <li>Concocté par la team Pot'Piette</li>
        </ul>
      )}
    </footer>
  );
}

export default Footer;
