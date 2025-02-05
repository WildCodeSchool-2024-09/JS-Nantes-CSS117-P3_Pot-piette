import { useRef, useState } from "react";
import type { ChangeEventHandler, FormEventHandler } from "react";
import "./AccountCreation.css";
import { useNavigate } from "react-router-dom";

function AccountCreation() {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();
  const dateOfTheDay = new Date().toLocaleDateString("en-CA");

  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: emailRef.current?.value,
            name: nameRef.current?.value,
            password,
            inscription_date: dateOfTheDay,
          }),
        },
      );

      if (response.status === 201) {
        navigate("/");
      } else {
        console.info(response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handlePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirm: ChangeEventHandler<HTMLInputElement> = (event) => {
    setConfirm(event.target.value);
  };

  return (
    <section className="signup-container">
      <h1>INSCRIPTION</h1>
      <p>Merci de rejoindre la communauté Pot'Piette</p>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input
          ref={emailRef}
          type="email"
          id="email"
          name="email"
          placeholder="Votre e-mail"
        />

        <label htmlFor="pseudo">Pseudo/Nom</label>
        <input
          ref={nameRef}
          type="text"
          id="pseudo"
          name="pseudo"
          placeholder="Votre pseudo/nom"
        />

        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Votre mot de passe"
          value={password}
          onChange={handlePassword}
        />

        <label htmlFor="confirmPassword">Confirmez le mot de passe</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirmez votre mot de passe"
          value={confirm}
          onChange={handleConfirm}
          className={confirm === password ? "valid" : "not-valid"}
        />

        <button type="submit" className="signup-button">
          Je m'inscris
        </button>
      </form>
    </section>
  );
}

export default AccountCreation;
