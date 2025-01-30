import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import { IoPerson, IoSearch } from "react-icons/io5";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="header-nav">
        <button
          type="button"
          className={`burger ${isOpen ? "open " : ""}`}
          onClick={toggleMenu}
        >
          <div> </div>
          <div> </div>
          <div> </div>
        </button>
        <nav className={`aside-menu ${isOpen ? "visible" : ""}`}>
          <Link to="/account" onClick={toggleMenu}>
            S'inscrire
          </Link>
          <Link to="/login" onClick={toggleMenu}>
            Se connecter
          </Link>
        </nav>
        <ul>
          <li>
            <IoSearch />
          </li>
          <li>
            <Link to="/connexion">
              <IoPerson />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="logo-container">
        <Link to="/">
          <img src="./logoWhite.png" alt="Logo" className="logo" />
        </Link>
      </div>
    </>
  );
}

export default Header;
