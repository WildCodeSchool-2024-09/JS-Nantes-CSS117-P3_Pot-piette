import { Link } from "react-router-dom";
import "./Header.css";
import { IoSearch, IoPerson } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  return (
    <>
      <header className="header">
        {/* Burger Menu */}
        <section className="burger-menu">
          <Link to="/">
            <RxHamburgerMenu />
          </Link>
        </section>

        {/* nav-list */}
        <ul className="nav-list">
          <li>
            <IoSearch />
          </li>
          <li>
            <IoPerson />
          </li>
        </ul>
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
}

export default Header;
