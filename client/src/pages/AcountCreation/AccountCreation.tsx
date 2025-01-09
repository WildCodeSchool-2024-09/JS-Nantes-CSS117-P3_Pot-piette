import "./AccountCreation.css";

function AccountCreation() {
  return (
    <section className="signup-container">
      <h1>INSCRIPTION</h1>
      <p className="signup-subtitle">
        Merci de rejoindre la communauté Pot'Piette
      </p>
      <form className="signup-form">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Votre e-mail"
        />

        <label htmlFor="pseudo">Pseudo</label>
        <input
          type="text"
          id="pseudo"
          name="pseudo"
          placeholder="Votre pseudo"
        />

        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Votre mot de passe"
        />

        <label htmlFor="confirmPassword">Confirmez le Mot de passe</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirmez votre mot de passe"
        />

        <label htmlFor="birthDate">Date de naissance</label>
        <input type="date" id="birthDate" name="birthDate" />

        <button type="submit" className="signup-button">
          Je m'inscris
        </button>
      </form>
    </section>
  );
}

export default AccountCreation;
