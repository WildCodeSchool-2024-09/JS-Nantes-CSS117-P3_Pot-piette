import type { ChangeEvent } from "react";
import "./AccountCreation.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AccountCreation() {
  const navigate = useNavigate();
  const dateOfTheDay = new Date().toLocaleDateString("en-CA");

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formObj = Object.fromEntries(data.entries());
    const { email, name, password, confirmPassword } = formObj;

    try {
      if (password !== confirmPassword) {
        throw new Error("Les mots de passe sont différents");
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
          placeholder="Votre pseudo/nom"
        />

        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Votre mot de passe"
        />

        <label htmlFor="confirmPassword">Confirmez le mot de passe</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirmez votre mot de passe"
        />

        <button type="submit" className="signup-button">
          Je m'inscris
        </button>
      </form>
    </section>
  );
}

export default AccountCreation;
