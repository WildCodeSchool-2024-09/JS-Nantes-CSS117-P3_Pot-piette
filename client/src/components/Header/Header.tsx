import { Link } from "react-router-dom";
import "./Header.css";
import { useContext, useState } from "react";
import { IoHeart, IoLogOut, IoPerson, IoSearch } from "react-icons/io5";
import { toast } from "react-toastify";
import { UserContext } from "../../contexts/userContext";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const { isAuthenticated, logout } = useContext(UserContext) || {};

  const handleLogout = () => {
    if (logout) {
      logout();
      toast.info("Vous avez été déconnecté");
      setIsOpen(false);
    }
  };

  return (
    <header className="header-nav">
      <button
        type="button"
        className={`burger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div> </div>
        <div> </div>
        <div> </div>
      </button>

      <nav className={`aside-menu ${isOpen ? "visible" : ""}`}>
        {!isAuthenticated ? (
          <>
            <Link to="/account" onClick={toggleMenu}>
              S'inscrire
            </Link>
            <Link to="/login" onClick={toggleMenu}>
              Se connecter
            </Link>
          </>
        ) : (
          <>
            {isAuthenticated && (
              <Link to="/favorites" onClick={toggleMenu}>
                <IoHeart /> Mes Favoris
              </Link>
            )}
            <button type="button" onClick={handleLogout} className="logout-btn">
              <IoLogOut /> Déconnexion
            </button>
          </>
        )}
      </nav>

      <Link to="/">
        <img src="/logoWhite.png" alt="Logo" className="logo" />
      </Link>

      <ul>
        <li>
          <Link to="/search">
            <IoSearch />
          </Link>
        </li>
        <li>
          {isAuthenticated ? (
            <button
              type="button"
              onClick={handleLogout}
              className="icon-btn"
              aria-label="Se déconnecter"
            >
              <IoLogOut />
            </button>
          ) : (
            <Link to="/connexion">
              <IoPerson />
            </Link>
          )}
        </li>
      </ul>
    </header>
  );
}

export default Header;
