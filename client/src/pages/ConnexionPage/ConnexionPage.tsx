import "./ConnexionPage.css";

function ConnexionPage() {
  function handleLogin() {}

  function handleSignup() {}

  return (
    <section className="button-container">
      <button type="button" className="btn" onClick={handleLogin}>
        Se connecter
      </button>
      <button type="button" className="btn" onClick={handleSignup}>
        Créer un compte
      </button>
    </section>
  );
}

export default ConnexionPage;
