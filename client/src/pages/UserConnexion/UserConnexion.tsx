import { useNavigate } from "react-router-dom";
import "./UserConnexion.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

function UserConnexion() {
  const navigate = useNavigate();
  const { login } = useContext(UserContext) || {};
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );
      const res = await response.json();
      if (res.token && login) {
        login(res.token);
        navigate("/");
      }
    } catch (err) {
      alert("Mot de passe ou email invalide");
    }
  };

  return (
    <section className="login-container">
      <h1 className="login-title">CONNEXION</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Entrez votre e-mail"
          className="login-input"
        />
        <input
          name="password"
          type="password"
          placeholder="Entrez votre mot de passe"
          className="login-input"
        />

        <button type="submit" className="login-button">
          Se connecter
        </button>
        <section className="login-options">
          <p className="forgot-password">Mot de passe oublié?</p>
          <section className="remember-me">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Se souvenir de moi</label>
          </section>
        </section>
      </form>
    </section>
  );
}

export default UserConnexion;
