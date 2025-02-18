import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <main className="page-not-found">
      <h2>La page que vous cherchez n'est pas encore cuite</h2>
      <img src="./Marmitte.png" alt="" />

      <p>
        Retour à{" "}
        <Link to="/">
          <span>l'accueil</span>
        </Link>
      </p>
    </main>
  );
}

export default NotFound;
