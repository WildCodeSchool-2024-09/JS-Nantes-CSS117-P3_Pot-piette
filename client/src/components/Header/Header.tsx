import { Link } from "react-router-dom";
import "./Header.css";
import { useContext, useState } from "react";
import { IoLogOut, IoPerson, IoSearch } from "react-icons/io5";
import { toast } from "react-toastify";
import { UserContext } from "../../contexts/userContext";

function Header() {
  const [logo, isLogo] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const { isAuthenticated, logout } = useContext(UserContext) || {};

  window.onscroll = () => {
    handleScroll();
  };

  function handleScroll() {
    if (document.documentElement.scrollTop >= 35) {
      isLogo(true);
    } else if (document.body.scrollTop <= 35) {
      isLogo(false);
    }
  }

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
            {" "}
            <Link to="/account" onClick={toggleMenu}>
              S'inscrire
            </Link>
            <Link to="/login" onClick={toggleMenu}>
              Se connecter
            </Link>
          </>
        ) : (
          <>
            <Link to="/user-info" onClick={toggleMenu}>
              Mon profil
            </Link>
            <Link to="/my-activity" onClick={toggleMenu}>
              Mes activités
            </Link>
            <Link to="/favorites" onClick={toggleMenu}>
              Mes favoris
            </Link>

            <button type="button" onClick={handleLogout} className="logout-btn">
              Se déconnecter
            </button>
          </>
        )}
      </nav>

      <Link to="/">
        <img
          src="./logoWhite.png"
          alt="Logo"
          className={logo === true ? "logo-active" : "logo"}
        />
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
