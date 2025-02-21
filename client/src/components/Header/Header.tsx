import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { useContext, useState } from "react";
import { IoLogOut, IoPerson, IoSearch } from "react-icons/io5";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContext";

function Header() {
  const location = useLocation();
  const urlLocation = location.pathname;
  const splitLocation = urlLocation.split("/");
  const context = useContext(AuthContext);
  const [logo, setLogo] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const { isLogged, logout } = useContext(AuthContext) || {};

  const toggleMenu = () => setIsOpen(!isOpen);

  window.onscroll = () => {
    handleScroll();
  };

  function handleScroll() {
    if (document.documentElement.scrollTop >= 35) {
      setLogo(true);
    } else if (document.body.scrollTop <= 35) {
      setLogo(false);
    }
  }

  const handleLogout = () => {
    if (isLogged) {
      logout();
      toast.info("Vous avez été déconnecté");
      setIsOpen(false);
    }
  };

  return (
    <>
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
          {isLogged ? (
            <>
              <Link
                to={context?.isAdmin ? "/admin" : "/user-info"}
                onClick={toggleMenu}
              >
                Mon profil
              </Link>
              <Link to="/activity" onClick={toggleMenu}>
                Mes activités
              </Link>
              <Link to="/favorites" onClick={toggleMenu}>
                Mes favoris
              </Link>
            </>
          ) : (
            <>
              {" "}
              <Link to="/account" onClick={toggleMenu}>
                S'inscrire
              </Link>{" "}
              <Link to="/login" onClick={toggleMenu}>
                Se connecter
              </Link>{" "}
            </>
          )}
        </nav>
        <Link to="/">
          <img
            src="./logoWhite.png"
            alt="Logo du site potpiette affichant une toque"
            className={logo === true ? "logo-active" : "logo"}
          />
        </Link>
        <ul>
          {splitLocation[1] === "" ? (
            <li>
              <a href="#site-search">
                <IoSearch />
              </a>
            </li>
          ) : (
            ""
          )}

          <li>
            {isLogged ? (
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
