import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import "./AccountCreation.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AccountCreation() {
  const navigate = useNavigate();
  const dateOfTheDay = new Date().toLocaleDateString("en-CA");

  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);

  const validatePassword = (password: string): string[] => {
    const errors: string[] = [];
    const minLength = /(?=.{8,})/;
    const hasUpperCase = /[A-Z]/;
    const hasNumber = /\d/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

    if (!minLength.test(password)) {
      errors.push("Le mot de passe doit contenir au moins 8 Caractères.");
    }
    if (!hasUpperCase.test(password)) {
      errors.push("Le mot de passe doit contenir au moins 1 Majuscule.");
    }
    if (!hasNumber.test(password)) {
      errors.push("Le mot de passe doit contenir au moins 1 Chiffre.");
    }
    if (!hasSpecialChar.test(password)) {
      errors.push(
        "Le mot de passe doit contenir au moins 1 Caractère Spécial.",
      );
    }
    return errors;
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    const errors = validatePassword(password);
    setPasswordErrors(errors);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formObj = Object.fromEntries(data.entries());
    const { email, name, password, confirmPassword } = formObj;

    try {
      if (password !== confirmPassword) {
        throw new Error("Les mots de passe sont différents");
      }

      // Si le mot de passe est valide
      if (passwordErrors.length > 0) {
        toast.error("Veuillez corriger les erreurs du mot de passe.");
        return;
      }

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            name,
            password,
            inscription_date: dateOfTheDay,
          }),
        },
      );

      if (response.status === 204) {
        toast.success(
          "Bravo vous avez bien créé un compte. Vous pouvez maintenant vous connecter.",
        );
        navigate("/login");
      } else if (response.status === 500) {
        toast.warning(
          "L'adresse email est déjà connue, veuillez vous connecter",
        );
        navigate("/login");
      } else {
        throw new Error("L'inscription n'a pas pu aboutir");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="signup-container">
      <h1>INSCRIPTION</h1>
      <p>Merci de rejoindre la communauté Pot'Piette</p>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Votre e-mail"
        />

        <label htmlFor="name">Pseudo/Nom</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Votre pseudo / nom"
        />

        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Votre mot de passe"
          onChange={handlePasswordChange}
        />
        {passwordErrors.length > 0 && (
          <div className="password-errors">
            {passwordErrors.map((error) => (
              <p key={Date.now() + Math.random()} className="password-error">
                {error}
              </p>
            ))}
          </div>
        )}

        <label htmlFor="confirmPassword">Confirmez le mot de passe</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirmez votre mot de passe"
        />

        <button
          type="submit"
          className="signup-button"
          disabled={passwordErrors.length > 0}
        >
          Je m'inscris
        </button>
        <Link to="/login">Déjà un compte? Connectez-vous</Link>
      </form>
    </section>
  );
}

export default AccountCreation;
