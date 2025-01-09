import { Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <>
      {/* NavBar */}
      <header className="header">
        <nav className="nav">
          {/* Left Menu */}
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

          {/* Right Icones */}
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

      {/* Center Logo */}
      <div className="logo-container">
        <Link to="/">
          <img
            src="https://i.ibb.co/1v4Z0cL/PAUPIETTE-01-1.png"
            alt="Logo"
            className="logo"
          />
        </Link>
      </div>
    </>
  );
};

export default Header;
