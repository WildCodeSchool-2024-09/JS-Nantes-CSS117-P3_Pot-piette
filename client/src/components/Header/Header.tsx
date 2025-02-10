import { Link } from "react-router-dom";
import "./Header.css";
import { useContext, useState } from "react";
import { IoLogOut, IoPerson, IoSearch } from "react-icons/io5";
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
    }
  };

  return (
    <>
      <header className="header-nav">
        <button
          type="button"
          className={`burger ${isOpen ? "open " : ""}`}
          onClick={toggleMenu}
        >
          <div> </div>
          <div> </div>
          <div> </div>
        </button>
        <nav className={`aside-menu ${isOpen ? "visible" : "invicible"}`}>
          <Link to="/account" onClick={toggleMenu}>
            S'inscrire
          </Link>
          <Link to="/login" onClick={toggleMenu}>
            Se connecter
          </Link>
        </nav>
        <Link to="/">
          <img src="./logoWhite.png" alt="Logo" className="logo" />
        </Link>
        <ul>
          <li>
            <IoSearch />
          </li>
          <li>
            {isAuthenticated ? (
              <button type="button" onClick={handleLogout}>
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
    </>
  );
}

export default Header;
