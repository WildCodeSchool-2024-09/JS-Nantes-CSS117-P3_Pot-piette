import "./ForgetPassword.css";

function ForgotPassword() {
  return (
    <div className="forgot-password-container">
      <h1 className="forgot-password-title">Mot de passe oublié</h1>
      <p className="forgot-password-instruction">
        Entrez l'adresse mail utilisée lors de votre inscription ou votre
        pseudo. Vous allez recevoir par mail un lien pour renouveler votre mot
        de passe.
      </p>
      <form className="forgot-password-form">
        <input
          className="forgot-password-input"
          type="email"
          placeholder="Entrez votre e-mail"
        />
        <button type="submit" className="forgot-password-button">
          Valider
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
