import { Link } from "react-router-dom";
import "./Header.css"; // Assurez-vous d'avoir ce fichier CSS

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list left">
          <li>
            <Link to="/">
              <img
                src="https://i.ibb.co/W07r41p/menu-hamburger.png"
                alt="Menu"
                className="nav-icon"
              />
            </Link>
          </li>
        </ul>
        <ul className="nav-list right">
          <li>
            <Link to="/">
              <img
                src="https://i.ibb.co/ZJH0xp6/chercher.png"
                alt="Recherche"
                className="nav-icon"
              />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img
                src="https://i.ibb.co/qmk9DRT/utilisateur.png"
                alt="Utilisateur"
                className="nav-icon"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
