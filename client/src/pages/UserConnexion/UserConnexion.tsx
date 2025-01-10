import "./UserConnexion.css";

function Login() {
  return (
    <section className="login-container">
      <h1 className="login-title">CONNEXION</h1>
      <form className="login-form">
        <input
          type="email"
          placeholder="Entrez votre e-mail"
          className="login-input"
        />
        <input
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

export default Login;
